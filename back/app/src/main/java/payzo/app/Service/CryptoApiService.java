package payzo.app.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Service;
import payzo.app.Model.ExternalApiCrypto;
import payzo.app.Model.ExternalApiCryptoResponse;
import payzo.app.Model.Currency;
import payzo.app.Repository.CurrencyRepository;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpConnectTimeoutException;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CryptoApiService implements ApplicationRunner {
    @Autowired
    CurrencyRepository currencyRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        if(currencyRepository.count() == 0){
            ObjectMapper objectMapper = new ObjectMapper();
            ExternalApiCryptoResponse apiCryptoResponse = objectMapper.readValue(getCrypto(), ExternalApiCryptoResponse.class);
            List<Currency> currencyList = adjustProducts(apiCryptoResponse.getData());
            currencyRepository.saveAll(currencyList);
        }
    }
    public String getCrypto() {
        try{
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(new URI("https://api.coinlore.net/api/tickers/?start=0&limit=15"))
                    .GET()
                    .build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if(response.statusCode() != 200) {
                throw new HttpConnectTimeoutException("Error trying to reach external API");
            }
            return response.body();
        }catch (Exception e2){
            throw new RuntimeException("Unable to retrieve info from external API", e2);
        }
    }

    public List<Currency> adjustProducts(List<ExternalApiCrypto> list){
        return list.stream()
                .map(externalApiCrypto -> {
                    Currency currency = new Currency();
                    currency.setProductName(externalApiCrypto.getName());
                    currency.setSymbol(externalApiCrypto.getSymbol());
                    currency.setProductType(Currency.ProductType.valueOf("crypto"));//crypto = 0 / stock = 1
                    currency.setCurrentPrice(Double.valueOf(externalApiCrypto.getPrice_usd()));
                    Double previous = calculatePreviousPrice(currency.getCurrentPrice(), Double.valueOf(externalApiCrypto.getPercent_change_1h()));
                    currency.setPreviousPrice(previous);
                    currency.setLastUpdate(new Date());
                    currency.setActive(true);
                    return currency;
                })
                .collect(Collectors.toList());
    }

    public Double calculatePreviousPrice(Double current, Double change){
        if(change>0){
            return current - (current * change);
        }else{
            return current + (current * change);
        }
    }
}

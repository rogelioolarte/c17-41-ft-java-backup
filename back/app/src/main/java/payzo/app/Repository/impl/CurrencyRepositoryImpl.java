package payzo.app.Repository.impl;

import jakarta.transaction.Transactional;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import payzo.app.Model.Currency;
import payzo.app.Repository.CurrencyRepository;
import payzo.app.dto.CurrencyDto;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CurrencyRepositoryImpl {

    @Autowired
    private CurrencyRepository currencyRepository;


    public List<CurrencyDto> findAllCurrencies() {
        try {
            List<Currency> listCurrency = currencyRepository.findAll();
            return listCurrency.stream().map(CurrencyDto::new).toList();
        } catch (Exception e) {
            throw new ServiceException("Error occurred while fetching all orders", e);
        }
    }

    public Currency traaerCurrencyPorId(Long id) {
        var c = currencyRepository.findById(id);
        return new Currency(c);
    }
}

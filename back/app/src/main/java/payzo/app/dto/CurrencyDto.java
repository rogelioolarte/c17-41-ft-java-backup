package payzo.app.dto;

import jakarta.persistence.Column;
import payzo.app.Model.Currency;

import java.util.Date;

public record CurrencyDto(Long cryptoId,

                          String symbol,
                          String productName,
                          Double currentPrice,
                          Double previousPrice,
                          Date lastUpdate
                       ) {

    public CurrencyDto(Currency currency){
        this(currency.getCryptoId(), currency.getSymbol(), currency.getProductName(), currency.getCurrentPrice()
        , currency.getPreviousPrice(), currency.getLastUpdate());
    }
}

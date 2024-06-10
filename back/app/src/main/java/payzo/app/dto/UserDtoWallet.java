package payzo.app.dto;

import java.math.BigDecimal;

public record UserDtoWallet(String quantity) {
    public  UserDtoWallet(Double quantity){
        this(String.valueOf(quantity));
    }
}

package payzo.app.dto;

import jakarta.validation.constraints.NotBlank;
import payzo.app.Model.User;

import java.math.BigDecimal;

public record UserDtoUpdate(


        String name,

        String lastname,

        String dni,

        String email,

        String password,

        String avatar,
        BigDecimal wallet,
        String cbuDollar
) {

    public UserDtoUpdate(User userUpdate) {
        this(userUpdate.getName(), userUpdate.getLastname(),userUpdate.getDni(),userUpdate.getEmail(),null,userUpdate.getAvatar(),userUpdate.getWallet(),userUpdate.getCbuDollar());
    }
}

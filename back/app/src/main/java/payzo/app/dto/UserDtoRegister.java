package payzo.app.dto;

import jakarta.validation.constraints.NotBlank;

public record UserDtoRegister(

        @NotBlank
        String name,

        String lastname,

        String dni,
        @NotBlank
        String email,
        @NotBlank
        String password,

        String avatar,

        String cbuDollar
) {

}

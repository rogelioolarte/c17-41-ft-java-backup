package payzo.app.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import payzo.app.Model.User;

import java.math.BigDecimal;
import java.util.Optional;

public record ResponseUserComplete(
        @NotBlank Long userId,
        @NotBlank String name,
        String lastname,
        String dni,
        @NotBlank String email,
        String avatar,
        BigDecimal wallet,
        String cbuDollar
) {
    public ResponseUserComplete(Optional<User> user) {
        this(user.get().getUserId(), user.get().getName(), user.get().getLastname(), user.get().getDni(), user.get().getEmail(),
                user.get().getAvatar(),user.get().getWallet(), user.get().getCbuDollar());
    }
}

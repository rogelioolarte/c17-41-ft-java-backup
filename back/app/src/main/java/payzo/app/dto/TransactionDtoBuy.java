package payzo.app.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record TransactionDtoBuy(
        @NotNull
        Long userId,
        @NotNull
        Long currencyId,

        @NotNull
        int quantity


) {

}

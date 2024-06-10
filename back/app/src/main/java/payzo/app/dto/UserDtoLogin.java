package payzo.app.dto;

import jakarta.validation.constraints.NotBlank;

public record UserDtoLogin(@NotBlank String email, @NotBlank String password) {
}

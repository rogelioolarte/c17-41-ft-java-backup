package payzo.app.dto;

import lombok.Builder;
import payzo.app.Model.Transaction;
import payzo.app.Model.User;

import javax.print.DocFlavor;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
@Builder
public record responseUser(Long id, String name, String avatar, BigDecimal wallet, List<CurrencyDtoList> currencyDtoList) {
    public responseUser(User userCreated) {
        this(userCreated.getUserId(), userCreated.getName(), userCreated.getAvatar(), userCreated.getWallet(),null);
    }

    public responseUser(String id, String name, String avatar, String wallet) {
        this(Long.parseLong(id),  name,  avatar, BigDecimal.valueOf(Long.parseLong(wallet)),null);
    }
    public responseUser(Optional<User> user) {
        this(user.get().getUserId(), user.get().getName(), user.get().getAvatar(), user.get().getWallet(), null);
    }
}

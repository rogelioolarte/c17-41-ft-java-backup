package payzo.app.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import payzo.app.dto.UserDtoRegister;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "users")
@Entity(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;
    @Column(name = "first_name")
    private String name;
    @Column(name = "last_name")
    private String lastname;
    @Column(name = "dni")
    private String dni;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "avatar")
    private String avatar;
    @Column(name = "wallet")
    private BigDecimal wallet;
    @Column(name = "cbu_dollar")
    private String cbuDollar;
    @Column(name = "cbu_pesos")
    private String cbuPesos;

    @OneToMany(mappedBy = "userId")
    private List<Transaction> transacciones;

    public User(UserDtoRegister userDtoRegister) {
        this.name = userDtoRegister.name();
        this.lastname = userDtoRegister.lastname();
        this.dni = userDtoRegister.dni();
        this.email = userDtoRegister.email();
        this.password = userDtoRegister.password();
        this.avatar = userDtoRegister.avatar();
        this.cbuDollar = userDtoRegister.cbuDollar();
    }

    public User(Optional<User> userUpdate) {
        this.userId = userUpdate.get().getUserId();
        this.name = userUpdate.get().getName();
        this.lastname = userUpdate.get().getLastname();
        this.dni = userUpdate.get().getDni();
        this.email = userUpdate.get().getEmail();
        this.password = userUpdate.get().getPassword();
        this.avatar = userUpdate.get().getAvatar();
        this.wallet = userUpdate.get().getWallet();
        this.cbuDollar = userUpdate.get().getCbuDollar();
    }
}

package payzo.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import payzo.app.Model.Currency;
import payzo.app.Model.User;
import payzo.app.dto.CurrencyDtoList;
import payzo.app.dto.ResponseUserComplete;
import payzo.app.dto.UserDtoLogin;
import payzo.app.dto.responseUser;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  /*  @Query("SELECT u FROM User u WHERE u.email =:email AND u.password =:password")
    User findByEmailAndPassword(@Param("email")String email,@Param("password") String password);*/
  User findByEmailAndPassword(String email,String password);


  @Query(value = "SELECT * FROM users WHERE email = :email AND password = :password",nativeQuery = true)
  User findByEmailAndContrasenia(@Param("email") String email, @Param("password") String password);

    @Query("SELECT NEW payzo.app.dto.CurrencyDtoList(t.currency.cryptoId, t.currency.productName, " +
            "SUM(CASE WHEN t.type = 'buy' THEN t.quantity ELSE -t.quantity END)) " +
            "FROM Transaction t " +
            "WHERE t.userId.userId = :usuarioId " +
            "GROUP BY t.currency.cryptoId, t.currency.productName")
    List<CurrencyDtoList> findByIdComplete(@Param("usuarioId") Long usuarioId);

}

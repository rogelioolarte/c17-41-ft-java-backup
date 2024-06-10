package payzo.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import payzo.app.Model.Currency;
@Repository
public interface CurrencyRepository extends JpaRepository<Currency, Long> {

}

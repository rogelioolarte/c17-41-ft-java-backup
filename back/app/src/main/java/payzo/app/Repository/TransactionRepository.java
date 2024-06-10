package payzo.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import payzo.app.Model.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction,Long> {
}

package payzo.app.Controller;

import jakarta.persistence.Entity;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import payzo.app.Repository.impl.TransactionRepositoryImpl;
import payzo.app.dto.TransactionDtoBuy;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin("*")
public class TransactionController {

    @Autowired
    private TransactionRepositoryImpl transactionRepositoryImpl;

    @PostMapping(value = "/buy", consumes = "application/json")
    public ResponseEntity<?> buyCurrency(@RequestBody @Valid TransactionDtoBuy transactionDtoBuy) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(transactionRepositoryImpl.buyCurrency(transactionDtoBuy));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Error! Something went wrong n/"+e.getMessage());
        }
    }
    @PostMapping(value = "/sell", consumes = "application/json")
    public ResponseEntity<?> sellCurrency(@RequestBody @Valid TransactionDtoBuy transactionDtoBuy) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(transactionRepositoryImpl.sellCurrency(transactionDtoBuy));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Error! Something went wrong n/"+e.getMessage());
        }
    }
}

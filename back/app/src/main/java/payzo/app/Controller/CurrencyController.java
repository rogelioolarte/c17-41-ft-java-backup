package payzo.app.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import payzo.app.Repository.CurrencyRepository;
import payzo.app.Repository.impl.CurrencyRepositoryImpl;

@RestController
@RequestMapping("/api/currency")
@CrossOrigin("*")
public class CurrencyController {

    @Autowired
    private CurrencyRepositoryImpl currencyRepositoryImpl;


    @GetMapping(value = "/all", produces = "application/json")
    public ResponseEntity<?> getAll() {

        try {
            return ResponseEntity.status(HttpStatus.OK).body(currencyRepositoryImpl.findAllCurrencies());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }


}

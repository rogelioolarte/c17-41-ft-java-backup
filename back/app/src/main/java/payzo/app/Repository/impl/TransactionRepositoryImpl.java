package payzo.app.Repository.impl;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import payzo.app.Model.Currency;
import payzo.app.Model.TRANSACTIONTYPE;
import payzo.app.Model.Transaction;
import payzo.app.Model.User;
import payzo.app.Repository.TransactionRepository;
import payzo.app.Repository.UserRepository;
import payzo.app.dto.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Service
@Transactional
public class TransactionRepositoryImpl  {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private CurrencyRepositoryImpl currencyRepositoryImpl;

    @Autowired
    private UserRepositoryImpl userRepositoryImpl;

    @Autowired
    private UserRepository userRepository;
    public responseUser buyCurrency(TransactionDtoBuy transactionDtoBuy) {
        var transactionCreated = new Transaction(transactionDtoBuy);
        Currency currency = currencyRepositoryImpl.traaerCurrencyPorId(transactionDtoBuy.currencyId());
        transactionCreated.setType(TRANSACTIONTYPE.buy);
        transactionCreated.setCurrency(currency);
        transactionCreated.setPricePerUnit(new BigDecimal(currency.getCurrentPrice()));
        double totalCuenta = currency.getCurrentPrice() * transactionDtoBuy.quantity();
        var ususario = userRepositoryImpl.findByUserId(transactionDtoBuy.userId());
        if(totalCuenta > Double.valueOf(String.valueOf(ususario.getWallet()))) throw new RuntimeException("El usuario no posee dinero");
        ususario.setWallet(ususario.getWallet().subtract(new BigDecimal(String.valueOf(totalCuenta))));
        responseUser ususarioActualizado =  userRepositoryImpl.userWalletSell(totalCuenta, ususario.getUserId());
        transactionCreated.setTotal(new BigDecimal(totalCuenta));
         transactionRepository.save(transactionCreated);

        List<CurrencyDtoList> listaCurrencyForUser = userRepository.findByIdComplete(ususario.getUserId());

        return responseUser.builder()
                .id(ususario.getUserId())
                .name(ususario.getName())
                .avatar(ususario.getAvatar())
                .wallet(ususario.getWallet())
                .currencyDtoList(listaCurrencyForUser)
                .build();

    }

    public responseUser sellCurrency(TransactionDtoBuy transactionDtoBuy) {
        var transactionCreated = new Transaction(transactionDtoBuy);
        Currency currency = currencyRepositoryImpl.traaerCurrencyPorId(transactionDtoBuy.currencyId());
        transactionCreated.setType(TRANSACTIONTYPE.sell);
        transactionCreated.setCurrency(currency);
        transactionCreated.setPricePerUnit(new BigDecimal(currency.getCurrentPrice()));

        double totalCuenta = currency.getCurrentPrice() * transactionDtoBuy.quantity();
        User ususario = userRepositoryImpl.findByUserId(transactionDtoBuy.userId());
        List<CurrencyDtoList> listaCurrencyForUser = userRepository.findByIdComplete(ususario.getUserId());
        Optional<CurrencyDtoList> filtradDeLista = listaCurrencyForUser.stream().filter(c -> c.id().equals(transactionDtoBuy.currencyId())).findFirst();
       if(filtradDeLista == null) throw new RuntimeException("El usuario no posee ese objeto dentro de tu lista");

       if(transactionDtoBuy.quantity() > Double.valueOf(String.valueOf(filtradDeLista.get().cuantity()))) throw new RuntimeException("El usuario no posee esa cantidad que quiere vender");
        ususario.setWallet(ususario.getWallet().add(new BigDecimal(String.valueOf(totalCuenta))));
        responseUser ususarioActualizado =  userRepositoryImpl.userWalletCharge(new UserDtoWallet(totalCuenta), ususario.getUserId());
        transactionCreated.setTotal(new BigDecimal(totalCuenta));
        transactionRepository.save(transactionCreated);

        listaCurrencyForUser = userRepository.findByIdComplete(ususario.getUserId());

        return responseUser.builder()
                .id(ususario.getUserId())
                .name(ususario.getName())
                .avatar(ususario.getAvatar())
                .wallet(ususario.getWallet())
                .currencyDtoList(listaCurrencyForUser)
                .build();

    }
}

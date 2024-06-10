package payzo.app.Controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import payzo.app.Model.User;
import payzo.app.Repository.impl.UserRepositoryImpl;
import payzo.app.dto.UserDtoLogin;
import payzo.app.dto.UserDtoRegister;
import payzo.app.dto.UserDtoUpdate;
import payzo.app.dto.UserDtoWallet;

import java.net.PasswordAuthentication;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class userController {

    @Autowired
    private UserRepositoryImpl userRepositoryImpl;

   // @Autowired
   // PasswordEncoder passwordEncoder;

    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<?> getById(@PathVariable Long id) {

        try {
            return ResponseEntity.status(HttpStatus.OK).body(userRepositoryImpl.findByUserId(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error! Something went wrong n/" + e.getMessage());
        }
    }

    @PostMapping(value = "/register", produces = "application/json")
    public ResponseEntity<?> getRegister (@RequestBody @Valid UserDtoRegister userDtoRegister) {

        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(userRepositoryImpl.userRegister(userDtoRegister));
        } catch (Exception e) {
            return  ResponseEntity.status(HttpStatus.CONFLICT).body("El usuario ya existe");
        }
    }

    @PostMapping(value = "/login", produces = "application/json")
    public ResponseEntity<?> Login (@RequestBody @Valid UserDtoLogin userDtoLogin) {

        try {
            return ResponseEntity.status(HttpStatus.OK).body(userRepositoryImpl.userLogin(userDtoLogin));
        } catch (Exception e) {
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Hups!! algo salio mal"+e.getMessage());
        }
    }

    @PutMapping(value = "/register/{id}", produces = "application/json")
    public ResponseEntity<?> updateUser (@RequestBody @Valid UserDtoUpdate userDtoRegister, @PathVariable Long id) {

        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(userRepositoryImpl.userUpdate(userDtoRegister,id));
        } catch (Exception e) {
            return  ResponseEntity.status(HttpStatus.CONFLICT).body("Error al actulizar el ususario");
        }
    }

    @PatchMapping(value = "/wallet/{id}", produces = "application/json")
    public ResponseEntity<?> updateWallet (@RequestBody @Valid UserDtoWallet userDtoWallet, @PathVariable Long id) {

        try {
            return ResponseEntity.status(HttpStatus.OK).body(userRepositoryImpl.userWalletCharge(userDtoWallet,id));
        } catch (Exception e) {
            return  ResponseEntity.status(HttpStatus.CONFLICT).body("No se puedo realizar la carga de dinero");
        }
    }
}

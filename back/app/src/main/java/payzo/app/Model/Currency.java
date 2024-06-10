package payzo.app.Model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "currency")
@Entity(name = "Currency")
public class Currency {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long cryptoId;
    @Column(name = "product_type")
    private ProductType productType;
    @Column(name = "symbol")
    private String symbol;
    @Column(name = "product_name")
    private String productName;
    @Column(name = "current_price")
    private Double currentPrice;
    @Column(name = "previous_price")
    private Double previousPrice;
    @Column(name = "last_update")
    private Date lastUpdate;
    @Column(name = "active")
    private Boolean active;

    @OneToMany(mappedBy = "currency")
    private List<Transaction> transacciones;

    public Currency(Optional<Currency> c){
        this.cryptoId = c.get().cryptoId();
        this.productType = c.get().getProductType();
    this.symbol = c.get().getSymbol();
        this.productName= c.get().getProductName();
        this.currentPrice= c.get().getCurrentPrice();
        this.previousPrice = c.get().getPreviousPrice();
        this.lastUpdate= c.get().getLastUpdate();
        this.active = c.get().getActive();
    }

    private Long cryptoId() {
        return this.cryptoId;
    }

    public enum ProductType{
        crypto,
        stock
    }
}

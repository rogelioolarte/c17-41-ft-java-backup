package payzo.app.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExternalApiCrypto {
    @JsonProperty("id")
    private String id;
    @JsonProperty("symbol")
    private String symbol;
    @JsonProperty("name")
    private String name;
    @JsonProperty("nameid")
    private String nameid;
    @JsonProperty("rank")
    private int rank;
    @JsonProperty("price_usd")
    private String price_usd;
    @JsonProperty("percent_change_24h")
    private String percent_change_24h;
    @JsonProperty("percent_change_1h")
    private String percent_change_1h;
    @JsonProperty("percent_change_7d")
    private String percent_change_7d;
    @JsonProperty("price_btc")
    private String price_btc;
    @JsonProperty("market_cap_usd")
    private String market_cap_usd;
    @JsonProperty("volume24")
    private double volume24;
    @JsonProperty("volume24a")
    private double volume24a;
    @JsonProperty("csupply")
    private String csupply;
    @JsonProperty("tsupply")
    private String tsupply;
    @JsonProperty("msupply")
    private String msupply;
}

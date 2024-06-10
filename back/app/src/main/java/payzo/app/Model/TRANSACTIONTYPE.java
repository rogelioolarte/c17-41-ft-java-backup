package payzo.app.Model;

public enum TRANSACTIONTYPE {
    buy("buy"),
    sell("sell");


    private final String description;

    TRANSACTIONTYPE(String description) {
        this.description = description;
    }
}

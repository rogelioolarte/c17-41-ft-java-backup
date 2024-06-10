export class Transaction {
    transactionId = 0;
    currency = '';
    type = '';
    quantity = 0;
    total = 0;
    transactionDate = Date;

    /**
     * Create a transaction
     * @param {*} product Currency Object of the transaction
     * @param {*} date Date time of the transsaction
     * @param {*} quantity Quantity of the transaction
     */
    constructor(transactionId, currency, type, quantity, total, transactionDate){
        this.transactionId = transactionId;
        this.currency = currency;
        this.type = type;
        this.quantity = quantity;
        this.total = total;
        this.transactionDate = transactionDate;
    }
}
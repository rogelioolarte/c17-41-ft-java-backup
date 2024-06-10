export class Currency {
    cryptoId = '';
    symbol = '';
    productName = '';
    currentPrice = 0;
    previousPrice = 0;
    lastUpdate = '';

    /**
     * Create a currency
     * @param {*} cryptoId Id of the currency
     * @param {*} symbol Symbol of the currency
     * @param {*} productName Name of the currency
     * @param {*} currentPrice Current price of the currency
     * @param {*} previousPrice Previous price of the currency
     * @param {*} lastUpdate Last update of the currency
     */
    constructor(cryptoId, symbol, productName, currentPrice, previousPrice, lastUpdate){
        this.cryptoId = cryptoId;
        this.symbol = symbol;
        this.productName = productName;
        this.currentPrice = currentPrice;
        this.previousPrice = previousPrice;
        this.lastUpdate = lastUpdate;
    }
}
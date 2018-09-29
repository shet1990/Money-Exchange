module.exports = function makeExchange(currency) {
    const obj = {};

    if (currency > 0 && currency < 10000) {
        const objMoney = { 'H': 50, 'Q': 25, 'D': 10, 'N': 5, 'P': 1 };
        let money = currency;

        for (key in objMoney) {
            money = getCoinsCount(money, objMoney[key], key);
        }

        function getCoinsCount(money, equalCoin, nameCoin) {
            let rem = money % equalCoin;
            let quantityCoin = Math.floor(money / equalCoin);
            if (quantityCoin > 0) {
                obj[nameCoin] = quantityCoin;
            }
            return rem;
        }
        return obj;
    } else if (currency >= 10000) {
        obj.error = "You are rich, my friend! We don\'t have so much coins for exchange";
        return obj;
    } else {
        return obj;
    }
}
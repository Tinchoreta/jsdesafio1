let cryptoCurrencyPrice = 0;
let cryptoCurrencyName = "";
let exchangeName = "";
let optionSelected = 0;
let dateSelected = 0;

debugger;

function initSimulation() {

    exchangeName = selectExchange();
    cryptoCurrencyName = selectCurrency();
    dateSelected = Date.now();
    cryptoCurrencyPrice = getPrice(cryptoCurrencyName, exchangeName);

    alert("El precio de: " + cryptoCurrencyName + "\n En el Exchange: " + exchangeName+ " \n Es de $: " + cryptoCurrencyPrice.toFixed(2) + " \n Fecha: " + Date.parse(dateSelected);
}


function selectCurrency() {

    do {
        optionSelected = parseInt(prompt("De qué criptomoneda querés saber la cotización?: \n 1- Bitcoin (BTC) \n 2- Ethereum (ETH) \n 3- Binance coin (BNB)"))

    }
    while (optionSelected != 1 && optionSelected != 2 && optionSelected != 3)
    switch (optionSelected) {
        case 1:
            return "BITCOIN";
        case 2:
            return "ETHEREUM";
        case 3:
            return "BINANCE COIN";
    }
}

function selectExchange() {

    do {
        optionSelected = parseInt(prompt("¿Cuál exchange te interesa?: \n 1- Binance \n 2- Coinbase \n 3- Kraken"))

    }
    while (optionSelected != 1 && optionSelected != 2 && optionSelected != 3)
    switch (optionSelected) {
        case 1:
            return "BINANCE";
        case 2:
            return "COINBASE";
        case 3:
            return "KRAKEN";
    }
}


function getPrice(cryptoCurrencyName, exchangeName) {

    switch (cryptoCurrencyName) {
        case "BITCOIN":
            return getBitcoinPrice(exchangeName);
        case "ETHEREUM":
            return getEthereumPrice(exchangeName);
        case "BINANCE COIN":
            return getBinanceCoinPrice(exchangeName);;
    }
}


function getBitcoinPrice(exchangeName) {
    var min = 0;
    var max = 0;

    switch (exchangeName) {
        case "BINANCE":
            min = 19800;
            max = 21300;
            return parseFloat(Math.random() * (max - min) + min);
            
        case "COINBASE":
            min = 19900;
            max = 22500;
            return parseFloat(Math.random() * (max - min) + min);

        case "KRAKEN":
            min = 20000;
            max = 23000;
            return parseFloat( Math.random() * (max - min) + min);
    }

    return 0;
}


function getEthereumPrice(exchangeName) {
    var min = 0;
    var max = 0;

    switch (exchangeName) {
        case "BINANCE":
            min = 1450;
            max = 1550;
            return parseFloat(Math.random() * (max - min) + min);
            
        case "COINBASE":
            min = 1550;
            max = 1600;
            return parseFloat(Math.random() * (max - min) + min);

        case "KRAKEN":
            min = 1600;
            max = 1650;
            return parseFloat( Math.random() * (max - min) + min);
    }

    return 0;
}


function getBinanceCoinPrice(exchangeName) {
    var min = 0;
    var max = 0;

    switch (exchangeName) {
        case "BINANCE":
            min = 250;
            max = 300;
            return parseFloat(Math.random() * (max - min) + min);
            
        case "COINBASE":
            min = 300;
            max = 350;
            return parseFloat(Math.random() * (max - min) + min);

        case "KRAKEN":
            min = 350;
            max = 400;
            return parseFloat( Math.random() * (max - min) + min);
    }

    return 0;
}

initSimulation();
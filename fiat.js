let price = require("crypto-price");
    price
      .getCryptoPrice(base, crypto)
      .then((obj) => {
        amount = amount.toFixed(8);
        message.channel.send(
          `For $${fiat} you would be able to purchase ${amount} BTC`
        );
      })
      .catch((err) => {
        console.log(err);
      });
        // let currentCrypto = obj.price;
        // let fiat = args[2];
        // let amount = fiat / currentCrypto;
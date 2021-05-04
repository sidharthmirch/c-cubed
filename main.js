const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`${client.user.tag} is now online!`);
  client.user.setActivity(`markets | $help`, {type : 'WATCHING'}).catch(console.error)
  console.log(client.guilds.cache.size);
});

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "help") {
    message.channel.send(
      "I now officially support (almost) all cryptocurrencies and **some** fiat currencies! \
    \nPlease type `$commands` for commands that you can use."
    );
  } else if (command === "commands") {
    message.channel.send(
      "`$price [CRYPTO] [CURRENCY]` This will provide the price of a given crypto in the provided currency.\
    \n```Example usage: $price BTC USD --> This would give you the price of BTC in USD.``` \
    \nLegacy support for `$fbtc` at the moment - will be reworking the function into the new `$price` command. \
    \n`status` Server count + my discord for help."
    );
  } else if (command === "status") {
    let count = client.guilds.cache.size; 
    message.channel.send(`I am in ${count} servers! 
    \nIf you want help or would like to report a bug, reach me on discord: \`sid#0003\`! `
      
    );
  } else if (command === "price") {
    let price = require("crypto-price");
    let base = args[1];
    let crypto = args[0];
    price
      .getCryptoPrice(base, crypto)
      .then((obj) => {
        let currentPrice = obj.price;
        currentPrice = Math.round(currentPrice);
        message.channel.send(
          `1 ${crypto.toUpperCase()} is worth ${currentPrice} ${base.toUpperCase()}`
        );
      })
      .catch((err) => {
        message.channel.send("That fiat currency is not supported :(");
      });
  } else if (command === "fbtc") {
    let price = require("crypto-price");
    price
      .getCryptoPrice("USD", "BTC")
      .then((obj) => {
        let currentBtc = obj.price;
        let fiat = args[0];
        let amount = fiat / currentBtc;
        amount = amount.toFixed(8);
        message.channel.send(
          `For $${fiat} you would be able to purchase ${amount} BTC`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

client.login(token);

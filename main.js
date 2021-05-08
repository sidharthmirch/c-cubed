// https://www.npmjs.com/package/cryptocompare
// fml


// want to make a nice format and shit
// add info in embed
// use a file with png of coin symbol 
// use file to pull $ sign etc

const getSymbolFromCurrency = require('currency-symbol-map')
const Discord = require("discord.js");
const { prefix, token, apiKey } = require("./config.json");
const client = new Discord.Client();
global.fetch = require('node-fetch');
const cc = require('cryptocompare');
cc.setApiKey(apiKey);
let value;

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
    \n`$status` Provides server count + my discord for help."
    );
  } else if (command === "status") {
    let count = client.guilds.cache.size; 
    message.channel.send(`I am in ${count} servers! 
    \nIf you want help or would like to report a bug, reach me via discord: \`sid#0003\`!`)
  } else if (command === "price") {
    let base = args[1];
    let crypto = args[0];
      cc.price(crypto, base)
      .then(prices => {
        const currentPrice = prices[Object.keys(prices)[0]];
        // if (crypto.toUpperCase() in getSymbolFromCurrency && base.toUpperCase() in getSymbolFromCurrency) {
        //     message.channel.send(`${getSymbolFromCurrency(crypto.toUpperCase())}1 is worth ${getSymbolFromCurrency(base.toUpperCase())}${currentPrice}`)   
        // } else {
        //     message.channel.send(`1 ${crypto.toUpperCase()} is worth ${currentPrice} ${base.toUpperCase()}`)
        // }
        const cryptoSymbol = (getSymbolFromCurrency(crypto.toUpperCase()) !== undefined) ? getSymbolFromCurrency(crypto.toUpperCase()) : crypto.toUpperCase(); 
        const baseSymbol = (getSymbolFromCurrency(base.toUpperCase()) !== undefined) ? getSymbolFromCurrency(base.toUpperCase()) : base.toUpperCase();
        message.channel.send(`1${cryptoSymbol} is worth ${baseSymbol}${currentPrice}`)
      })
      .catch((err) => {
        message.channel.send('The arguements you supplied are causing me to fumble... Please try new values');
      })
    
  }
});

client.login(token);
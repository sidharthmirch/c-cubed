import * as Discord from "discord.js";
import { getPrice } from "./getPrice.js";
import { getSymbols } from "./getSymbols.js";
import dotenv from "dotenv";
dotenv.config();
const COLOR = process.env.COLOR || 0xffd600;

const helpRes = (message) => {
  const res = new Discord.MessageEmbed()
    .setTitle('')
    .setColor(COLOR)
    .setDescription(
      `I now officially support (almost) all cryptocurrencies and **some** fiat currencies! \
      \nPlease type \`$commands\` for commands that you can use.`
    );
  message.channel.send(res);
};

const commandsRes = (message) => {
  const res = new Discord.MessageEmbed()
    .setTitle()
    .setColor(COLOR)
    .setDescription(
      "`$price [CRYPTO] [CURRENCY]` This will provide the price of a given crypto in the provided currency.\
      \n```Example usage: $price BTC USD --> This would give you the price of BTC in USD.``` \
      \n`$status` Provides server count + my discord for help."
    );
  message.channel.send(res);
};

const statusRes = (message) => {
  const res = new Discord.MessageEmbed()
    .setTitle(
      `If you would like to help out, feel free to check out the GitHub repo!`
    )
    .setColor(COLOR)
    .setURL(`https://github.com/sidharthmirch/c-cubed`);
  message.channel.send(res);
};

const priceRes = async (message) => {
  const args = message.content.slice(1).trim().split(/ +/g);
  const [currencyA, currencyB] = [args[1], args[2]];
  try {
    const { symbolA, symbolB } = getSymbols(
      currencyA.toUpperCase(),
      currencyB.toUpperCase()
    );
    const currentPrice = await getPrice(currencyA, currencyB);
    const res = new Discord.MessageEmbed()
      .setTitle(`${currencyA.toUpperCase()} to ${currencyB.toUpperCase()}`)
      .setColor(COLOR)
      .setDescription(
        `${currencyA.toUpperCase()} symbol: **${symbolA}**\n${currencyB.toUpperCase()} symbol: **${symbolB}**\n\n1 ${symbolA} is worth ${currentPrice} ${symbolB}`
      );
    message.channel.send(res);
  } catch (err) {
    console.log(err)
    const res = new Discord.MessageEmbed()
      .setTitle("Oh no!")
      .setColor(COLOR)
      .setDescription(
        "Please double check the arguments you passed!\nIf you believe that you have found a bug please open a new issue on GitHub.\nUse `$status` for more information."
      );
    message.channel.send(res);
  }
};

export { helpRes, commandsRes, statusRes, priceRes };

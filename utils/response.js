import { MessageEmbed, MessageAttachment } from "discord.js";
import { getChart } from "./getChart.js";
import { getPrice } from "./getPrice.js";
import { getSymbols } from "./getSymbols.js";
import { client } from "../index.js";
import formatCurrency from "format-currency";
import dotenv from "dotenv";
dotenv.config();
const COLOR = process.env.COLOR || 0xffd600;
const OWNER_ID = process.env.OWNER_ID;

const helpRes = (message) => {
  const res = new MessageEmbed()
    .setTitle("")
    .setColor(COLOR)
    .setDescription(
      `I now officially support (almost) all cryptocurrencies and **some** fiat currencies! \
      \nPlease type \`$commands\` for commands that you can use.`
    );
  message.channel.send(res);
};

const commandsRes = (message) => {
  const res = new MessageEmbed()
    .setTitle(`Commands`)
    .setColor(COLOR)
    .setDescription(
      "`$price [CRYPTO] [CURRENCY]` This will provide the price of a given crypto in the provided currency.\
      \n```Example usage: $price BTC USD --> This would give you the price of BTC in USD.``` \
      \n`$github` Link to the github repo!."
    );
  message.channel.send(res);
};

const githubRes = (message) => {
  const res = new MessageEmbed()
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
    const res = new MessageEmbed().setColor(COLOR).addFields(
      {
        name: `${currencyA.toUpperCase()}`,
        value: `${symbolA} ${formatCurrency(1, {
          code: currencyA,
        })}`,
        inline: true,
      },
      {
        name: `${currencyB.toUpperCase()}`,
        value: `${symbolB} ${formatCurrency(currentPrice, {
          code: currencyB,
        })}`,
        inline: true,
      }
    );
    message.channel.send(res);
  } catch (err) {
    console.log(err);
    const res = new MessageEmbed()
      .setTitle("Oh no!")
      .setColor(COLOR)
      .setDescription(
        "Please double check the arguments you passed!\nIf you believe that you have found a bug please open a new issue on GitHub.\nUse `$github` for more information."
      );
    message.channel.send(res);
  }
};

const serverListRes = async (message) => {
  // Can only be invoked by bot owner
  if (message.author.id === OWNER_ID) {
    let serverCount = client.guilds.cache.size;
    let servers = [];
    client.guilds.cache.forEach((s) => {
      servers.push(s.name);
    });
    const res = new MessageEmbed()
      .setTitle(`Currently in ${serverCount} servers`)
      .setColor(COLOR)
      .setDescription(`\`\`\`${servers.join(",\n")}\`\`\``);
    message.channel.send(res);
  } else {
    const res = new MessageEmbed()
      .setTitle("Oh no!")
      .setColor(COLOR)
      .setDescription("It looks like you aren't my owner!");
    message.channel.send(res);
  }
};

const chartRes = async (message) => {
  const args = message.content.slice(1).trim().split(/ +/g);
  const [currencyA, currencyB] = [args[1], args[2]];
  const { symbolA, symbolB } = getSymbols(
    currencyA.toUpperCase(),
    currencyB.toUpperCase()
  );
  const currentPrice = await getPrice(currencyA, currencyB);
  const canvas = await getChart(currencyA, currencyB);
  const attachment = new MessageAttachment(canvas, "chart.png");
  const res = new MessageEmbed()
    .setTitle( // TODO: Convert ticker to full name
      `${currencyA.toUpperCase()}\n${symbolB}${formatCurrency(currentPrice, {
        code: currencyB,
      })}`
    )
    .setColor(COLOR)
    .attachFiles(attachment)
    .setImage("attachment://chart.png");
  message.channel.send(res);
};

export { helpRes, commandsRes, githubRes, priceRes, serverListRes, chartRes };

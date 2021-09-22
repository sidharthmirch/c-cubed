const helpRes = `I now officially support (almost) all cryptocurrencies and **some** fiat currencies! \
\nPlease type \`$commands\` for commands that you can use.`;

const commandsRes = "`$price [CRYPTO] [CURRENCY]` This will provide the price of a given crypto in the provided currency.\
\n```Example usage: $price BTC USD --> This would give you the price of BTC in USD.``` \
\n`$status` Provides server count + my discord for help.";

const status = () => {
  let count = client.guilds.cache.size;
  `I am in ${count} servers!`
};

export { helpRes, commandsRes, status };
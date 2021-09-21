const support = {};

support.help = `I now officially support (almost) all cryptocurrencies and **some** fiat currencies! \
\nPlease type \`$commands\` for commands that you can use.`;

support.commands = "`$price [CRYPTO] [CURRENCY]` This will provide the price of a given crypto in the provided currency.\
\n```Example usage: $price BTC USD --> This would give you the price of BTC in USD.``` \
\n`$status` Provides server count + my discord for help.";

support.status = () => {
  let count = client.guilds.cache.size;
  `I am in ${count} servers!`
};

export const support;
import price from "cryptocompare";

export const getPrice = (crypto, base) => {
  price(crypto, base).then((prices) => {
    const currentPrice = prices[Object.keys(prices)[0]];
  });

  return { currentPrice: currentPrice };
};

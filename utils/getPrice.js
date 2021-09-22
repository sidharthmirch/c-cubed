import * as cc from "cryptocompare";
import dotenv from "dotenv";
dotenv.config()

const API_KEY = process.env.CC_KEY;

export const getPrice = (crypto, base) => {
  cc.setApiKey(API_KEY);
  cc.price(crypto, base).then((prices) => {
    const currentPrice = prices[Object.keys(prices)[0]];
  });

  return { currentPrice: currentPrice };
};

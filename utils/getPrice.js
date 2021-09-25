import { setApiKey, price } from "cryptocompare";
import fetch from "node-fetch";
globalThis.fetch = fetch;
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.CC_KEY;

export const getPrice = async (currencyA, currencyB) => {
  setApiKey(API_KEY);
  const resolvedPrice = await price(currencyA, currencyB).then((prices) => {
    const currentPrice = prices[Object.keys(prices)[0]];
    return currentPrice;
  });
  return resolvedPrice;
};

import getSymbolFromCurrency from "currency-symbol-map";

export const getSymbols = (crypto, base) => {
  const cryptoSymbol =
    getSymbolFromCurrency(crypto.toUpperCase()) !== undefined
      ? getSymbolFromCurrency(crypto.toUpperCase())
      : crypto.toUpperCase();
  const baseSymbol =
    getSymbolFromCurrency(base.toUpperCase()) !== undefined
      ? getSymbolFromCurrency(base.toUpperCase())
      : base.toUpperCase();

  return {
    cryptoSymbol: cryptoSymbol,
    baseSymbol: baseSymbol,
  };
};

import getSymbolFromCurrency from 'currency-symbol-map'

export const getSymbols = (currencyA, currencyB) => {
  const symbolA =
    getSymbolFromCurrency(currencyA.toUpperCase()) !== undefined
      ? getSymbolFromCurrency(currencyA.toUpperCase())
      : currencyA.toUpperCase()
  const symbolB =
    getSymbolFromCurrency(currencyB.toUpperCase()) !== undefined
      ? getSymbolFromCurrency(currencyB.toUpperCase())
      : currencyB.toUpperCase()

  return {
    symbolA: symbolA,
    symbolB: symbolB
  }
}

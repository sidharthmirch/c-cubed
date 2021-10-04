// Based on https://www.npmjs.com/package/crypto-color-extractor , made my own as it is out of date.
import symbolList from "cryptocurrencies";

export const getColor = (name) => {
  switch (symbolList[name].toLowerCase()) {
    case "bitcoin":
      return "rgba(247,147,26,1)";
      break;
    case "blackcoin":
      return "rgba(0,0,0,1)";
      break;
    case "bitcoin cash":
      return "rgba(45,179,1,1)";
      break;
    case "eos":
      return "rgba(2,2,2,1)";
      break;
    case "zcash":
      return "rgba(215,149,45,1)";
      break;
    case "ethereum":
      return "rgba(140,140,140,1)";
      break;
    case "monero":
      return "rgba(255,102,1,1)";
      break;
    case "litecoin":
      return "rgba(190,190,190,1)";
      break;
    case "ethereum classic":
      return "rgba(30,159,103,1)";
      break;
    case "xrp":
      return "rgba(210,210,210,1)";
      break;
    case "dash":
      return "rgba(0,141,230,1)";
      break;
    case "qtum":
      return "rgba(208,201,234,1)";
      break;
    case "neo":
      return "rgba(123,184,81,1)";
      break;
    case "bytom":
      return "rgba(215,215,215,1)";
      break;
    case "tether":
      return "rgba(38,161,23,1)";
      break;
    case "bitshares":
      return "rgba(4,110,52,1)";
      break;
    case "tron":
      return "rgba(228,7,20,1)";
      break;
    case "cardano":
      return "rgba(6,21,41,1)";
      break;
    case "stellar":
      return "rgba(221,223,252,1)";
      break;
    case "exchange union":
      return "rgba(17,69,134,1)";
      break;
    case "true chain":
      return "rgba(30,107,186,1)";
      break;
    case "paxos standard":
      return "rgba(230,228,56,1)";
      break;
    case "gifto":
      return "rgba(137,52,255,1)";
      break;
    case "unitedbitcoin":
      return "rgba(61,183,247,1)";
      break;
    case "basic attention token":
      return "rgba(48,48,48,1)";
      break;
    case "bitcoin gold":
      return "rgba(255,200,98,1)";
      break;
    case "selfkey":
      return "rgba(47,53,69,1)";
      break;
    case "ravencoin":
      return "rgba(55,64,130,1)";
      break;
    case "binance coin":
      return "rgba(246,190,48,1)";
      break;
    case "omisego":
      return "rgba(27,83,240,1)";
      break;
    case "hshare":
      return "rgba(90,69,141,1)";
      break;
    case "okex":
      return "rgba(90,148,255,1)";
      break;
    case "0x":
      return "rgba(28,23,37,1)";
      break;
    case "mithril":
      return "rgba(147,147,200,1)";
      break;
    default:
      return "rgba(242, 169, 0, 1)";
  }
};

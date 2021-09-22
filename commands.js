import { getPrice } from "./utils/getPrice.js";
import { helpRes , commandsRes, statusRes, priceRes } from "./utils/response.js";

export const commands = {
  "price": priceRes,
  "help": helpRes,
  "commands": commandsRes,
  "status": statusRes,
};

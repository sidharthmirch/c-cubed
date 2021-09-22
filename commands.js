import { getPrice } from "./utils/getPrice.js";
import { helpRes , commandsRes, status } from "./utils/support.js";

export const commands = {
  "price": () => {console.log("price hit")},
  "help": helpRes,
  "commands": commandsRes,
  "status": status,
};

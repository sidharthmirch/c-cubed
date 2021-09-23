import { helpRes , commandsRes, priceRes, githubRes } from "./utils/response.js";

export const commands = {
  "price": priceRes,
  "help": helpRes,
  "commands": commandsRes,
  "github": githubRes,
};

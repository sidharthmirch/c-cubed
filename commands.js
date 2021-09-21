import getPrice from "utils/getPrice";
import support from "utils/support";

export const commands = {
  "price": getPrice,
  "help": support.help,
  "commands": support.commands,
  "status": support.status,
};

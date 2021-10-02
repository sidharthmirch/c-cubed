import {
  helpRes,
  commandsRes,
  priceRes,
  githubRes,
  serverListRes,
  chartRes,
} from "./utils/response.js";

export const commands = {
  price: priceRes,
  chart: chartRes,
  help: helpRes,
  commands: commandsRes,
  github: githubRes,
  sl: serverListRes,
};

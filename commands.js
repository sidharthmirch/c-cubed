import {
  helpRes,
  commandsRes,
  priceRes,
  githubRes,
  serverListRes
} from './utils/response.js'

export const commands = {
  price: priceRes,
  help: helpRes,
  commands: commandsRes,
  github: githubRes,
  sl: serverListRes
}

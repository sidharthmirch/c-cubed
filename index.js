import { commands } from "./commands.js";
import dotenv from "dotenv";
import * as Discord from "discord.js";

dotenv.config();
const DISCORD_KEY = process.env.DISCORD_KEY;
const prefix = "$";
let serverCount;

const client = new Discord.Client();
client.on("ready", () => {
  serverCount = client.guilds.cache.size;
  console.log(`${client.user.tag} online and serving ${serverCount} servers.`);
  let servers = [];
  client.guilds.cache.forEach((s) => {
    servers.push(s.name);
  });
  console.log(`Server list: `, servers);
  client.user
    .setActivity(`${serverCount} markets | $help`, { type: "WATCHING" })
    .catch(console.error);
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix) && !message.author.bot) {
    try {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();
      commands[cmd](message);
    } catch (error) {
      console.error(error);
    }
  }
});

client.login(DISCORD_KEY);

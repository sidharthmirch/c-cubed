import { commands } from "./commands.js";
import dotenv from "dotenv";
import * as Discord from "discord.js";

dotenv.config()
const DISCORD_KEY = process.env.DISCORD_KEY;
const prefix = "!";

const client = new Discord.Client();
client.on("ready", () => {
  console.log(
    `${client.user.tag} online and serving ${client.guilds.cache.size} servers.`
  );
  client.user
    .setActivity(`markets | $help`, { type: "WATCHING" })
    .catch(console.error);
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix) && !message.author.bot) {
    try {
      console.log(message.content);
    } catch (error) {
      console.error(error);
    }
  }
});

client.login(DISCORD_KEY);
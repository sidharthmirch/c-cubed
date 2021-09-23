import { commands } from "./commands.js";
import dotenv from "dotenv";
import * as Discord from "discord.js";

dotenv.config();
const DISCORD_KEY = process.env.DISCORD_KEY;
const prefix = "$";

const client = new Discord.Client();
client.on("ready", () => {
  setInterval(() => {
    let serverCount = client.guilds.cache.size;
    let servers = [];

    client.guilds.cache.forEach((s) => {
      servers.push(s.name);
    });

    client.user.setActivity(`${serverCount} markets | ${prefix}help`, {
      type: "WATCHING",
    });

    console.log(
      `${client.user.tag} online and serving ${serverCount} servers.`
    );
    console.log(`Server list: `, servers);
  }, 60000);
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

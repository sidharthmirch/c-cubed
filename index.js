import { commands } from "./commands.js";
import dotenv from "dotenv";
import { Client, Intents } from "discord.js";

dotenv.config();
const DISCORD_KEY = process.env.DISCORD_KEY;
const prefix = "$";

export const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.on("ready", () => {
  // Initialize status
  let serverCount = client.guilds.cache.size;
  console.log(`${client.user.tag} online and serving ${serverCount} servers.`);

  client.user.setActivity(`${serverCount} markets | ${prefix}help`, {
    type: "WATCHING",
  });

  // Dynamic update of status
  setInterval(() => {
    serverCount = client.guilds.cache.size;

    client.user.setActivity(`${serverCount} markets | ${prefix}help`, {
      type: "WATCHING",
    });
  }, 60000);
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix) && !message.author.bot) {
    try {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();
      let func = commands[cmd];
      if (func != undefined) commands[cmd](message);
    } catch (error) {
      console.error(error);
    }
  }
});

client.login(DISCORD_KEY);

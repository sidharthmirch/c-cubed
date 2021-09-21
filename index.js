const Discord = require("discord.js");

const prefix = "$";
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
      commands[request.split(" ")[0]](message);
    } catch (error) {
      console.error(error);
    }
  }
});

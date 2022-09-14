const client = require("..");
const chalk = require("chalk");
const Discord = require("discord.js");

client.on("ready", () => {
  console.log(chalk.red(`Connecté en tant que ${client.user.tag}!`));
});

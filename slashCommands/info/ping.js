const { ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'ping',
	description: "Regarde la latence du bot.",
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,
	run: async (client, interaction) => {
		interaction.reply({ content: `Latence: **${Math.round(client.ws.ping)} ms**` })
	}
};
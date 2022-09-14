const Discord = require('discord.js');
const time = require('ms')

module.exports = {
	name: 'uptime',
	description: "regarde depuis combien de temps le bot est en ligne..",
	cooldown: 3000,
	userPerms: [],
	botPerms: [],
	run: async (client, message, args) => {
		const uptime = time(client.uptime)

    const embed = new Discord.EmbedBuilder()
    .addFields({ name: 'J\'ai été mis a jour depuis :', value: `${uptime}`})
    .setFooter({ text: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL({ dynamic: true })}` })

    message.channel.send({embeds: [embed]})
}
};

	

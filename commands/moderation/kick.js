const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "kick",
  description: "kick un utilisateur du serveur.",
  cooldown: 3000,
  userPerms: [Discord.PermissionsBitField.Flags.KickMembers],
  botPerms: [Discord.PermissionsBitField.Flags.KickMembers],
  run: async (client, message, args) => {
    let mentionMember = message.mentions.members.first();
    if (!mentionMember && args[0]) mentionMember = args[0];
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Aucune raison donnée";

    const embed = new Discord.EmbedBuilder()

      .setTitle(`Vous avez été kick de **${message.guild.name}**`)
      .setDescription(`Raison: ${reason}`)
      .setTimestamp()
      .setFooter({
        text: `${client.user.tag}`,
        iconURL: `${client.user.displayAvatarURL({ dynamic: true })}`,
      });

    if (!args[0])
      return message.channel.send(
        `Vous devez spécifier un utilisateur à kick.`
      );

    if (mentionMember.id === message.author.id)
      return message.channel.send(`Vous ne pouvez pas vous auto kick.`);

    if (mentionMember.id === client.user.id)
      return message.channel.send(`Vous ne pouvez pas me kick.`);
    if (mentionMember.id === message.guild.ownerID)
      return message.channel.send(
        `Vous ne pouvez pas kick le propriétaire du serveur.`
      );

    if (!mentionMember)
      return message.channel.send(
        `Cet utilisateur n'est pas un utilisateur valide / n'est plus sur le serveur!`
      );

    if (!mentionMember.bannable)
      return message.channel.send(
        `  Désolé, je ne peux pas kick cet utilisateur!`
      );

    await mentionMember.send({ embeds: [embed] });
    await mentionMember
      .kick({
        mentionMember,
        reason: reason,
      })
      .then(() =>
        message.channel.send(
          `Kick avec succès:  ` + "**" + mentionMember.user.tag + "**"
        )
      );
  },
};

const { ApplicationCommandType } = require("discord.js");

module.exports = {
  name: "vc",
  description: "affiche le nombre de personne en vocal.",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async (client, interaction) => {
    interaction.reply({
      content: `🎙️ | Membre en vocal: **${
        interaction.guild.members.cache.filter((m) => m.voice.channel).size
      }** (**${interaction.guild.memberCount} membres**)`,
    });
  },
};

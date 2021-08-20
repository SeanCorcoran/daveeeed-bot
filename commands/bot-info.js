const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bot-info')
    .setDescription('Show some info about the bot.'),
  async execute(interaction) {
    const message = `${interaction.client.user.username} is owned by <@${process.env.OWNER_USER_ID}>.
The source code can be found at ${process.env.GITHUB_URL}`
    await interaction.reply({ content: message, ephemeral: true });
  },
};

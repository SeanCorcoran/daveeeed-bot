const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('set-game')
    .setDescription('Set Daveeeed\'s Game status')
    .addStringOption(option => option.setName('activity').setDescription('What is he playing?').setRequired(true)),
  async execute(interaction) {
    const activity = interaction.options.getString('activity');
    interaction.client.user.setActivity(activity, { type: 'PLAYING' });
    await interaction.reply({ content: 'Activity has been set!', ephemeral: true });
  },
};

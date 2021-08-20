const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quote')
    .setDescription('Daveeeed will share one of his favorite anime quotes!'),
  async execute(interaction) {
    await interaction.deferReply();
    fetch('https://animechan.vercel.app/api/random')
      .then(response => response.json())
      .then(async quote => { 
        content = `> ${quote.quote}
        
_${quote.character} from ${quote.anime}_`

        await interaction.editReply({ content: content })
      });
  },
};

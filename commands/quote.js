const { SlashCommandBuilder, quote, italic } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quote')
    .setDescription('Daveeeed will share one of his favorite anime quotes!'),
  async execute(interaction) {
    await interaction.deferReply();
    fetch('https://animechan.vercel.app/api/random')
      .then(response => response.json())
      .then(async quoteRes => { 
        content = `${quote(quoteRes.quote)}
        
${italic(quoteRes.character)} from ${italic(quoteRes.anime)}`

        await interaction.editReply({ content: content })
      });
  },
};

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('Daveeeed will share a cute cat picture!'),
  async execute(interaction) {
    fetch('https://aws.random.cat/meow')
      .then(response => response.json())
      .then(async res => {
        const embed = new MessageEmbed()
          .setTitle("Cat")
          .setImage(res.file)
          .setFooter("Courtesy of http://random.cat");
        
        await interaction.reply({ embeds: [embed] });
      })
      .catch(async err => {
        console.log(err);
        await interaction.reply({ content: 'Sorry, there was an error with the Cat API :(', ephemeral: true });
      });
  },
};
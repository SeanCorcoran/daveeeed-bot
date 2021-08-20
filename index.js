require('dotenv').config()
const fs = require('fs')
const { Client, Collection, Intents } = require('discord.js');

// create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Register commands
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
  console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
  // Only respond to Slash Commands
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command! :(', ephemeral: true });
  }
});

// login to Discord with your app's token
client.login(process.env.TOKEN);

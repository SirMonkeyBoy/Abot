require('dotenv').config();
const { token } = process.env;
const {Client, IntentsBitField, ActivityType, Collection } = require('discord.js');
const fs = require('fs');

const welcome = require('./welcome.js');
const register = require('./register-commands.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online`)

    welcome(client)

    client.user.setActivity({
        name: 'Robbery | v2.1',
        type: ActivityType.Playing,
    });
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'nextrobbery') {
      return interaction.reply('Check events for the next robbery');
    }
  
  });
client.login(token);
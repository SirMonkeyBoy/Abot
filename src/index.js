require('dotenv').config();
const { token } = process.env;
const {Client, IntentsBitField, ActivityType, Collection } = require('discord.js');
const { CommandKit } = require('commandkit');
const fs = require('fs');

const welcome = require('./welcome.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

new CommandKit({
    client,
    eventsPath: `${__dirname}/events`,
    commandsPath: `${__dirname}/commands`,
    bulkRegister: true,
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online`)

    welcome(client)

    client.user.setActivity({
        name: 'Robbery | v2.3',
        type: ActivityType.Playing,
    });
});

client.login(token);

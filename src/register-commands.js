const { REST, Routes } = require('discord.js');
require('dotenv').config();
const { token, GUILD_ID, BotID } = process.env;

const commands = [
    {
        name: 'nextrobbery',
        description: 'Time of next Robbery',
    },
];

const rest = new REST({ version: '10'}).setToken(token);

(async () => {
    try {
      console.log('Registering slash commands...');
  
      await rest.put(
        Routes.applicationGuildCommands(
          BotID,
          GUILD_ID
        ),
        { body: commands }
      );
  
      console.log('Slash commands were registered successfully!');
    } catch (error) {
      console.log(`There was an error: ${error}`);
    }
  })();
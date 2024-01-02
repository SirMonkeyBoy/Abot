const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("nextrobbery").setDescription('data of next robbery'),
    run: ({ interaction, client }) => {
        interaction.reply('Check events for the next robbery time');
    },
}
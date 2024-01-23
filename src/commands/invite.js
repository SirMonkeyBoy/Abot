require('dotenv').config();

const { SlashCommandBuilder } = require("discord.js");
const { inviteCode } = process.env;

module.exports = {
    data: new SlashCommandBuilder().setName("invite").setDescription('Gives you an invite link for the server'),
    run: ({ interaction, client }) => {
        interaction.reply(`https://discord.gg/${inviteCode}`);
    },
}

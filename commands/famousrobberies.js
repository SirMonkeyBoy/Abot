const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("famousrobberies").setDescription('ramdom wikipedia pages on robberies'),
    run: ({ interaction, client }) => {
        var itemList = [
            "https://en.wikipedia.org/wiki/Bank_of_Australia_robbery", 
            "https://en.wikipedia.org/wiki/1984_Sydney_bank_robbery",
            "https://en.wikipedia.org/wiki/Great_Bookie_robbery",
            "https://en.wikipedia.org/wiki/Nelson_robbery",
            "https://en.wikipedia.org/wiki/Perth_Mint_Swindle",
            "https://en.wikipedia.org/wiki/List_of_bank_robbers_and_robberies"
        ];
        
        function getRandomItem(list) {
          var randomIndex = Math.floor(Math.random() * list.length);
          return list[randomIndex];
        }
        
        var randomItem = getRandomItem(itemList);
        
        interaction.reply(randomItem);
    },
}

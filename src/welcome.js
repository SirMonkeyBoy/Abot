module.exports = client => {

    require('dotenv').config();
    const { welcomeChannelID, rolesID, welcomeRoleID } = process.env;

    client.on("guildMemberAdd", member => {

        console.log(`${member.username}`)

        const message = `Welcome <@${member.id}> to the Robbery! Do not forget to get your roles from <#${rolesID}>,`
        const message1 = `also remember to invite all your friends. <#${welcomeRoleID}>`

        const channel = member.guild.channels.cache.get(welcomeChannelID);

        channel.send(message);
        channel.send(message1);
    })
}

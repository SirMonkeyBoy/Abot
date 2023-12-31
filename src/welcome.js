module.exports = client => {

    require('dotenv').config();
    const { welcomeID, rolesID } = process.env;

    client.on("guildMemberAdd", member => {

        console.log(`${member.username}`)

        const message = `Welcome <@${member.id}> to the Robbery! Do not forget to get your roles from <#${rolesID}>,`
        const message1 = `also remember to invite all your friends.`

        const channel = member.guild.channels.cache.get(welcomeID);

        channel.send(message);
        channel.send(message1);
    })
}

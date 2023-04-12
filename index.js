const { Client, Intents } = require('discord.js');
const { token, serverID, roleID, interval } = require('./config.json');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

bot.on('ready', () => {
    try {
        const guild = bot.guilds.cache.get(serverID); // Get the guild object for the specified server ID
        if (!guild) throw new Error(`Didn't find any server: ${serverID}`);
        
        const role = guild.roles.cache.find(u => u.id === roleID); // Get the role object for the specified role ID
        if (!role) throw new Error(`Didn't find any role, server name: ${guild.name}`);

        setInterval(() => {
            role.edit({ color: 'RANDOM' }).catch(err => console.error('[ Error ] An error occurred during the role change.', err));  // Set an interval to change the color of the role
        }, interval);

        if (interval < 60000) console.log(`\n[!!!] Enjoy your rainbow roles`);  // If the interval is less than 1 minute, display a warning message
        
        bot.user.setPresence({
            status: 'idle',
            activities: [
                {
                    name: 'Eddkiavetést', // Custom activity name
                    type: 'WATCHING'      // Custom activity type (e.g. "PLAYING", "LISTENING", "WATCHING")
                }
            ]
        });
        
        console.log(`[ Client ] ${bot.user.tag} is now online`); // Display a message indicating that the bot is now online
    } catch (error) {
        console.error(error);
    }
});

bot.login(token);

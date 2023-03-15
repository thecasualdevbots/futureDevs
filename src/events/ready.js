const { Events } = require ('discord.js');

// Code that runs on start 

module.exports = {
	
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(` 🚀 ${client.user.username} has booted up!`);

	},

};
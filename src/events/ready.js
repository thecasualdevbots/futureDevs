const { Events } = require ('discord.js');

// Code that sends the Boot up log

module.exports = {
	
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(` 🚀 ${client.user.username} has booted up!`);

	},

};
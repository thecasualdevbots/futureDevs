const { Events, ActivityType } = require('discord.js')

// Sets the bots status

module.exports = {

	name: Events.ClientReady,
	once: true,
	execute(client) {

		client.user.setActivity(
			
			'Future Devs | /help',
			{ type: ActivityType.Watching }

		);

	},

};


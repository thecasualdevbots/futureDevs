const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong!'),

	async execute(interaction) {

		const pingEmbed = new EmbedBuilder()
			.setColor(0xb48dc4)
			.setDescription(`🏓 Pong! -- **${interaction.client.ws.ping}ms**`)

		await interaction.reply({ embeds: [pingEmbed] });
	},

};
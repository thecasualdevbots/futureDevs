const { SlashCommandBuilder } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('shhh')
		.setDescription('Sends some secret test 🐋'),

	async execute(interaction) {
		await interaction.reply({ content: `Shhh, this is a secert ${interaction.user.username}`, ephemeral: true });
	}

};
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { execute } = require('./shhh');

module.exports = { 

	data: new SlashCommandBuilder()
		.setName('membercount')
		.setDescription('Shows member ')
		.setDMPermission(false),

	async execute(interaction) {

		const memberEmbed = new EmbedBuilder()
			.setColor (0xb48dc4)
			.setDescription(`This server currently has **${interaction.guild.memberCount}** members 🥳`)

		await interaction.reply({ embeds: [memberEmbed] });

	},
};
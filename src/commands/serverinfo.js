const { SlashCommandBuilder, EmbedBuilder } =require('discord.js');

module.exports = {

	data: new SlashCommandBuilder() 
		.setName('serverinfo')
		.setDescription('Get server info')
		.setDMPermission(false),
		
	async execute(interaction) {

		const serverEmbed = new EmbedBuilder()
			.setColor(0xb48dc4)
			.setTitle(`${interaction.guild.name} (${interaction.guild.nameAcronym})`)
			.setThumbnail(`${interaction.guild.iconURL({})}`)
			.addFields(

				{ name: 'Guild ID', value: `${interaction.guild.id}`, inline: true },
				{ name: 'Voice Channels', value: '---', inline: true },
				{ name: 'Text Channels', value: '---', inline: true },

				{ name: 'Bots', value: `err`, inline: true },
				{ name: 'Members', value: `${interaction.guild.memberCount}`, inline: true },
				{ name: 'Ping', value: `${interaction.client.ws.ping}`, inline: true },

			)
			.setTimestamp()
			.setFooter({ text: `This command was run by ${interaction.user.username}`, iconURL: `${interaction.user.avatarURL({})}` });

		await interaction.reply({ embeds: [serverEmbed] });

	},

};
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data : new SlashCommandBuilder()
        .setName('benzema')
        .setDescription("Return a Benzema's GIF"),
    async execute(interaction) {
        await interaction.reply('Benzegoal')
    }
}
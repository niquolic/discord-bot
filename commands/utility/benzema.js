const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data : new SlashCommandBuilder()
        .setName('benzema')
        .setDescription("Return a Benzema's GIF"),
    async execute(interaction) {
        const url = `http://api.giphy.com/v1/gifs/search?q=benzema
        &api_key=${process.env.GIPHY_API_KEY}&limit=100`
        const res = await fetch(url)
        const json = await res.json()
        const randomIndex = Math.floor(Math.random() * json.data.length)
        await interaction.reply(json.data[randomIndex].url);
    }
}
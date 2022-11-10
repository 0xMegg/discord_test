const { SlashCommandBuilder } = require("discord.js");

const mintCommandBuilder = new SlashCommandBuilder()
  .setName("mint")
  .setDescription("mint a point")
  .addIntegerOption((option) =>
    option.setName("amount").setDescription("how much?").setRequired(true)
  );

module.exports = mintCommandBuilder;

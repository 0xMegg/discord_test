const { SlashCommandBuilder, Guild } = require("discord.js");

const giveCommandBuilder = new SlashCommandBuilder()
  .setName("give")
  .setDescription("give a point")
  .addUserOption((option) =>
    option
      .setName("user")
      .setDescription("Choice user to give")
      .setRequired(true)
  )
  .addIntegerOption((option) =>
    option
      .setName("amount")
      .setDescription("how much?")
      .setRequired(true)
      .setMinValue(0)
  );

module.exports = giveCommandBuilder;

const { SlashCommandBuilder, Guild } = require("discord.js");

const showCommandBuilder = new SlashCommandBuilder()
  .setName("show")
  .setDescription("show")
  .addIntegerOption((option) =>
    option
      .setName("member")
      .setDescription("who you want?")
      .addChoices({ name: "1", value: 1 })
  );

module.exports = showCommandBuilder;

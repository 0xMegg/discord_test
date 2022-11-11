const { SlashCommandBuilder } = require("discord.js");

const showCommandBuilder = new SlashCommandBuilder()
  .setName("show")
  .setDescription("show")
  .addUserOption((option) =>
    option.setName("user").setDescription("Choice user to check")
  );

module.exports = showCommandBuilder;

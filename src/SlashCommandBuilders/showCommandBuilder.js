const { SlashCommandBuilder } = require("discord.js");

const showCommandBuilder = new SlashCommandBuilder()
  .setName("show")
  .setDescription("show")
  .addUserOption((option) =>
    option.setName("user").setDescription("Choice user to check")
  );

// const showCommandBuilder = new SlashCommandBuilder()
//   .setName("show")
//   .setDescription("show a point")
//   .addUserOption((option) =>
//     option.setName("user").setDescription("how much?").setRequired(true)
//   );

module.exports = showCommandBuilder;

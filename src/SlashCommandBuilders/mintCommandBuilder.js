const { SlashCommandBuilder, Guild } = require("discord.js");

const mintCommandBuilder = new SlashCommandBuilder()
  .setName("mint")
  .setDescription("mint a point")
  .addIntegerOption((option) =>
    option.setName("amount").setDescription("how much?").setRequired(true)
  );
// .addIntegerOption((option) =>
//   option
//     .setName("amount")
//     .setDescription("how much?")
//     .addChoices({ value: 1 })
// );

module.exports = mintCommandBuilder;

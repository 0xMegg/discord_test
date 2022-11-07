const { SlashCommandBuilder, Guild } = require("discord.js");

const giveCommandBuilder = new SlashCommandBuilder()
  .setName("give")
  .setDescription("give a point")
  .addIntegerOption((option) =>
    option.setName("amount").setDescription("how much?").setRequired(true)
  );
// .addIntegerOption((option) =>
//   option
//     .setName("amount")
//     .setDescription("how much?")
//     .addChoices({ value: 1 })
// );

module.exports = giveCommandBuilder;

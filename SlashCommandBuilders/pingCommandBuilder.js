const { SlashCommandBuilder } = require("discord.js");

const pingCommandBuilder = new SlashCommandBuilder()
  .setName("megg_rsp")
  .setDescription("Rock Scissors Paper!")
  .addIntegerOption((option) =>
    option
      .setName("choice")
      .setDescription("choice your hand")
      .setRequired(true)
      .addChoices(
        { name: "Rock", value: 1 },
        { name: "Scissors", value: 2 },
        { name: "Paper", value: 3 }
      )
  );

module.exports = pingCommandBuilder;

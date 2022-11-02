const { SlashCommandBuilder } = require("discord.js");

const pingCommandBuilder = new SlashCommandBuilder()
  .setName("megg_coinflip")
  .setDescription("Guess a side!")
  .addIntegerOption((option) =>
    option
      .setName("choice")
      .setDescription("choice a side!")
      .setRequired(true)
      .addChoices({ name: "Front", value: 1 }, { name: "Back", value: 2 })
  );

module.exports = pingCommandBuilder;

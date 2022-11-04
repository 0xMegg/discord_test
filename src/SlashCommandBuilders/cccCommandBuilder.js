const { SlashCommandBuilder } = require("discord.js");

const pingCommandBuilder = new SlashCommandBuilder()
  .setName("megg_ccc")
  .setDescription("Charm Charm Charming Megg")
  .addIntegerOption((option) =>
    option
      .setName("choice")
      .setDescription("choice your direction")
      .setRequired(true)
      .addChoices(
        { name: "upper", value: 1 },
        { name: "lower", value: 2 },
        { name: "left", value: 3 },
        { name: "right", value: 4 }
      )
  );

module.exports = pingCommandBuilder;

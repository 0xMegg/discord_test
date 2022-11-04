const mintCommandBuilder = require(`../SlashCommandBuilders/mintCommandBuilder`);
const mintfunction = require(`../functions/mintfunction`);
module.exports = {
  data: mintCommandBuilder,
  async execute(interaction) {
    await mintfunction(interaction);
  },
};

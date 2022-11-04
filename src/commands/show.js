const showCommandBuilder = require(`../SlashCommandBuilders/showCommandBuilder`);
const showfunction = require(`../functions/showfunction`);
module.exports = {
  data: showCommandBuilder,
  async execute(interaction) {
    await showfunction(interaction);
  },
};

const flipCommandBuilder = require(`../SlashCommandBuilders/flipCommandBuilder`);
const flipfunction = require(`../functions/flipfunction`);
module.exports = {
  data: flipCommandBuilder,
  async execute(interaction) {
    await flipfunction(interaction);
  },
};

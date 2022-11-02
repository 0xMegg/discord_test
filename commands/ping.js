const pingCommandBuilder = require(`../SlashCommandBuilders/pingCommandBuilder`);
const pingfunction = require(`../functions/pingfunction`);
module.exports = {
  data: pingCommandBuilder,
  async execute(interaction) {
    await pingfunction(interaction);
  },
};

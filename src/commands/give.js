const giveCommandBuilder = require(`../SlashCommandBuilders/giveCommandBuilder`);
const givefunction = require(`../functions/givefunction`);
module.exports = {
  data: giveCommandBuilder,
  async execute(interaction) {
    await givefunction(interaction);
  },
};

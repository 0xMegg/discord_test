const cccCommandBuilder = require(`../SlashCommandBuilders/cccCommandBuilder`);
const cccfunction = require(`../functions/cccfunction`);
module.exports = {
  data: cccCommandBuilder,
  async execute(interaction) {
    await cccfunction(interaction);
  },
};

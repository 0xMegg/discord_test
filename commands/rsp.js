const rspCommandBuilder = require(`../SlashCommandBuilders/rspCommandBuilder`);
const rspfunction = require(`../functions/rspfunction`);
module.exports = {
  data: rspCommandBuilder,
  async execute(interaction) {
    await rspfunction(interaction);
  },
};

const { guildId } = require("../config");

const MINTER_ROLE_ID = "1021964287452905514";

async function mintfunction(interaction) {
  if (!interaction.isCommand()) return;
  if (interaction.guildId !== guildId) return;

  const mint = interaction.options.getInteger("amount");
  const member = interaction.member;
  const hasRole = member.roles.cache.has(MINTER_ROLE_ID);

  if (!hasRole) {
    await interaction.reply(`only <@&${MINTER_ROLE_ID}> can do it`);
    return;
  }

  try {
    await interaction.reply(`<@${interaction.user.id}> mint ${mint} mimix`);
  } catch (e) {
    console.log(e.message);
    await interaction.reply(e.message);
  }

  await interaction.reply(message);
}

module.exports = mintfunction;

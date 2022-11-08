const { guildId } = require("../config");
const data = require("../../data/point.json");
const fs = require("fs");

// const MINTER_ROLE_ID = "1021964287452905514";

async function mintfunction(interaction) {
  if (!interaction.isCommand()) return;
  if (interaction.guildId !== guildId) return;

  const mint = interaction.options.getInteger("amount");
  // const member = interaction.member;
  // const hasRole = member.roles.cache.has(MINTER_ROLE_ID);

  // if (!hasRole) {
  //   await interaction.reply(`only <@&${MINTER_ROLE_ID}> can do it`);
  //   return;
  // }

  try {
    let mintedpoint;
    data.filter((e) => {
      if (e.user === interaction.user.id) {
        e.point01 += mint;
        mintedpoint = e.point01;
      }
    });
    const mintedData = JSON.stringify(data);
    fs.writeFileSync("data/point.json", mintedData);
    await interaction.reply(
      `<@${interaction.user.id}> mint ${mint} mimix\n<@${interaction.user.id}> have ${mintedpoint} mimix`
    );
  } catch (e) {
    console.log(e.message);
    await interaction.reply(e.message);
  }
}

module.exports = mintfunction;

const { guildId } = require("../config");
const data = require("../../data/point.json");
const fs = require("fs");

async function mintfunction(interaction) {
  if (!interaction.isCommand()) return;
  if (interaction.guildId !== guildId) return;

  const mint = interaction.options.getInteger("amount");

  await interaction.deferReply("Plz wait...!");

  try {
    let mintedpoint;
    let isExist = false;

    data.filter((e) => {
      if (e.user === interaction.user.id) {
        isExist = true;
      }
    });

    if (isExist === false) {
      data.push({
        user: interaction.user.id,
        point01: 0,
        point02: 0,
        serverId: interaction.guildId,
      });
    }

    data.filter((e) => {
      if (e.user === interaction.user.id) {
        e.point01 += mint;
        mintedpoint = e.point01;
      }
    });

    const mintedData = JSON.stringify(data, null, 4);
    fs.writeFileSync("data/point.json", mintedData);
    await interaction.editReply(
      `<@${interaction.user.id}> mint ${mint} mimix\n<@${interaction.user.id}> have ${mintedpoint} mimix`
    );
  } catch (e) {
    console.log(e.message);
    await interaction.editReply(e.message);
  }
}

module.exports = mintfunction;

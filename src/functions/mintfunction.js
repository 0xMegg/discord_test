const { guildId } = require("../config");
const data = require("../../data/point.json");
const fs = require("fs");

async function mintfunction(interaction) {
  if (!interaction.isCommand()) return;
  if (interaction.guildId !== guildId) return;

  const mint = interaction.options.getInteger("amount");

  try {
    let mintedpoint;
    // data.filter((e) => {
    //   console.log('1'+e);
    //   if (e.user !== interaction.user.id) {
    //     data.push({
    //       user: interaction.user.id,
    //       point01: 0,
    //       point02: 0,
    //       serverId: interaction.guildId,
    //     });
    //   }
    // });

    // data.forEach((e) => {
    //   if (e.a !== 5) {
    //     //오브젝트의 a키에 대한 값이 5가 아닐때 코드
    //   } else {
    //     //오브젝트의 a키에 대한 값이 5때 코드
    //   }
    // });

    // data.filter((e) => {
    //   console.log("2" + e);
    //   if (e.user === interaction.user.id) {
    //     e.point01 += mint;
    //     mintedpoint = e.point01;
    //   }
    // });

    let isExist;
    data.filter((e) => {
      isExist = false;
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

const { guildId } = require("../config");
const data = require("../../data/point.json");
const fs = require("fs");

async function givefunction(interaction) {
  if (!interaction.isCommand()) return;
  if (interaction.guildId !== guildId) return;

  const amount = interaction.options.getInteger("amount");
  const giver = interaction.user;
  const taker = interaction.options.getUser("user");

  await interaction.deferReply("Plz wait...!");

  try {
    let point;
    data.filter((e) => {
      if (e.user === giver.id) {
        point = e.point01;
      }
    });

    if (point < amount) {
      await interaction.editReply(
        `Not enough Mimix. You have only ${point}Mimix`
      );
      return;
    }

    let giverCurrent;
    let takerCurrent;

    data.filter((e) => {
      if (e.user === giver.id) {
        e.point01 -= amount;
        giverCurrent = e.point01;
      }
    });
    data.filter((e) => {
      if (e.user === taker.id) {
        e.point01 += amount;
        takerCurrent = e.point01;
      }
    });

    const givedData = JSON.stringify(data, null, 4);
    fs.writeFileSync("data/point.json", givedData);

    await interaction.editReply(
      `${amount} is transfer ${giver} to ${taker}\nNow ${giver} have ${giverCurrent}, ${taker} have ${takerCurrent}`
    );
  } catch (e) {
    console.log(e);
    await interaction.editReply(e.message);
  }
}

module.exports = givefunction;

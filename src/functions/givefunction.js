const { guildId } = require("../config");
const data = require("../../data/point.json");
const fs = require("fs");

async function givefunction(interaction) {
  if (!interaction.isCommand()) return;
  if (interaction.guildId !== guildId) return;

  const amount = interaction.options.getInteger("amount");
  const giver = interaction.user;
  const taker = interaction.option.getUser("user");

  await interaction.deferReply("Plz wait...!");

  try {
    let point;
    data.filter((e) => {
      if (e.user === user.id) {
        point = e.point01;
      }
    });

    if (point < amount) {
      await interaction.editReply(
        `Not enough Mimix. You have only ${point}Mimix`
      );
      return;
    }

    giver.point01 -= amount;
    taker.point01 += amount;

    await interaction.editReply(`${point} is transfer ${giver} to ${taker}`);
  } catch (e) {
    console.log(e);
    await interaction.editReply(e.message);
  }
}

module.exports = givefunction;

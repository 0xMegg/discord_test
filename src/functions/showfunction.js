const data = require("../../data/point.json");
const { guildId } = require("../config");

async function showfunction(interaction) {
  if (!interaction.isCommand()) return;
  if (interaction.guildId !== guildId) return;

  let targetId;
  const userId = interaction.user.id;

  await interaction.deferReply("Plz wait...!");

  try {
    let currentPoint;
    let currentId;
    if (interaction.options.getUser("user")) {
      targetId = interaction.options.getUser("user").id;
      data.filter((e) => {
        if (e.user === targetId) {
          currentPoint = e.point01;
          currentId = e.user;
        }
      });
    } else {
      data.filter((e) => {
        if (e.user === userId) {
          currentPoint = e.point01;
          currentId = e.user;
        }
      });
    }
    await interaction.editReply(`<@${currentId}> has ${currentPoint} mimix!`);
  } catch (error) {
    console.log(error);
    await interaction.editReply(error.message);
  }
}

module.exports = showfunction;

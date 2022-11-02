async function rspfunction(interaction) {
  const choice = interaction.options.getInteger("choice");
  const strongTo = {
    1: 2,
    2: 3,
    3: 1,
  };
  const botChoice = Math.floor(Math.random() * 3) + 1;

  let message = "";
  if (botChoice === strongTo[choice]) {
    message = `<@${interaction.user.id}> win`;
  } else if (botChoice === choice) {
    message = `draw`;
  } else {
    message = `<@${interaction.user.id}> loose`;
  }

  await interaction.reply(message);
}

module.exports = rspfunction;

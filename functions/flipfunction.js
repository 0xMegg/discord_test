async function flipfunction(interaction) {
  const choice = interaction.options.getInteger("choice");
  const botChoice = Math.floor(Math.random() * 2) + 1;

  let message = "";
  if (botChoice === choice) {
    message = `<@${interaction.user.id}> choose right side`;
  } else {
    message = `<@${interaction.user.id}> choose wrong side`;
  }

  await interaction.reply(message);
}

module.exports = flipfunction;

async function cccfunction(interaction) {
  const choice = interaction.options.getInteger("choice");
  
  const botChoice = Math.floor(Math.random() * 4) + 1;

  let message = "";
  if (botChoice === choice) {
    message = `<@${interaction.user.id}> win`;
  } else {
    message = `<@${interaction.user.id}> loose`;
  }

  await interaction.reply(message);
}

module.exports = cccfunction;

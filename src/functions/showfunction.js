async function showfunction(interaction) {
  const choice = interaction.options.getInteger("member");
  console.log(choice);

  let message = "";
  if (choice) {
    message = `<@${interaction.user.id}> win`;
  } else {
    message = `<@${interaction.user.id}> loose`;
  }

  await interaction.reply(message);
}

module.exports = showfunction;

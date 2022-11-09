async function showfunction(interaction) {
  if (!interaction.isCommand()) return;
  if (interaction.guildId !== guildId) return;

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

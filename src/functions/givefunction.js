async function givefunction(interaction) {
  const give = interaction.options.getInteger("amount");
  console.log(give);

  let message = `${give}`;
  // if (choice) {
  //   message = `<@${interaction.user.id}> win`;
  // } else {
  //   message = `<@${interaction.user.id}> loose`;
  // }

  await interaction.reply(message);
}

module.exports = givefunction;

async function mintfunction(interaction) {
  const mint = interaction.options.getInteger("amount");
  console.log(mint);

  let message = `${mint}`;
  // if (choice) {
  //   message = `<@${interaction.user.id}> win`;
  // } else {
  //   message = `<@${interaction.user.id}> loose`;
  // }

  await interaction.reply(message);
}

module.exports = mintfunction;

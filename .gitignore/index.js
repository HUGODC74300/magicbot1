const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'help') {
    msg.reply('tu a besoin d aide ? mp un membre du staff !');
  }
});

client.login('NzE1NDY3MjI0MzgyNzAxNjQx.Xs-PoQ.1WJAzB970itr91koVke20gn038s');

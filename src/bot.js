require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

import Help from '../src/commands/help';

let commands = {
  "!help": new Help()
}

client.on('ready', () => {
  console.log('Dukebot online');
});

client.on('message', message => {
  let command = message.content.split(" ")
  if (command[0] in commands) {
    message.channel.sendMessage(commands[command[0]].send(command));
  }
});

client.login(process.env.DISCORD_API_KEY);

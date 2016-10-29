require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

import HelpCommand from '../src/commands/help';

let commands = {
  "!help": new HelpCommand()
}

client.on('ready', () => {
  console.log('Dukebot online');
});

client.on('message', message => {
  if (message.content in commands) {
    message.channel.sendMessage(commands[message.content].send);
  }
});

client.login(process.env.DISCORD_API_KEY);

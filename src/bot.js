import dotenv from 'dotenv'
dotenv.config()

const Discord = require('discord.js');
const client = new Discord.Client();

import Help from '../src/commands/help';
import Ilevel from '../src/commands/ilevel';
import Deaths from '../src/commands/deaths';
import Region from '../src/commands/region';
import Affixes from '../src/commands/affixes';
import Tsm from '../src/commands/tsm';

let commands = {
  "!help": new Help(),
  "!ilevel": new Ilevel(),
  "!deaths": new Deaths(),
  "!region": new Region(),
  "!affixes": new Affixes(),
  "!tsm": new Tsm()
}

client.on('ready', () => {
  console.log('Dukebot online');
});

client.on('message', message => {
  let command = message.content.split(" ")
  if (command[0] in commands) {
    message.channel.sendMessage(commands[command[0]].send(command, commands["!region"]));
  }
});

client.login(process.env.DISCORD_API_KEY);

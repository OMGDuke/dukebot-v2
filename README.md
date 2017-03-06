# dukebot-v2
> A discord bot which access the Battle.net and TSM APIs. Uses the discord.js framework.

## Installation

Clone this repository, and run:
```sh
$ npm install
```
Create the file `.env` in root.

Add the following lines to it.

```sh
DISCORD_API_KEY = 'yourDiscordApiKey'
WOW_API_KEY = 'yourWowApiKey'
GUILD_SERVER = 'yourGuildsServer'
GUILD_NAME = 'yourGuildsName'
GUILD_REGION = 'yourGuildsRegion'
TSM_API_KEY = 'yourTsmApiKey'
```

To run tests
```sh
$ npm run tests
```

## Usage

```js
$ npm start
```
Invite the bot to your channel.

```
https://discordapp.com/oauth2/authorize?&client_id=YOUR_CLIENTIDHERE&scope=bot
```

Available commands

- `!help` - Return a list of commands
- `!ilevel server characterName` - Return the iLevel of the character
- `!deaths server characterName` - Return the death count of the character
- `!region` - Return the current region (default eu)
- `!region us` - Change the current region
- `!affixes` - Return the current mythic plus affixes
- `!tsm server itemName` - Return the current TSM pricing details of the item


## License

Apache-2.0 © [OMGDuke](http://www.omgduke.com)

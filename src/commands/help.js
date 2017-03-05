class Help {
  constructor() {
     this.message = "__**Available Commands are:**__\n\n**!ilevel** server characterName\n**!deaths** " +
    "server characterName\n**!region**\n**!affixes**\n**!tsm** server itemName";
  }

  send() {
    return this.message
  }
}

export default Help;

class Help {
  constructor() {
     this.message = "__**Available Commands are:**__\n\n**!slap** name\n**!(role)** " +
    "(eg !rank1, !rank5)\n**!ilevel** server characterName\n**!deaths** " +
    "server characterName";
  }

  send() {
    return this.message
  }
}

export default Help;

class Help {
  constructor() {
     this.message = "__**Available Commands are:**__\n\n**!ilevel** server characterName\n**!deaths** " +
    "server characterName\n**!region**";
  }

  send() {
    return this.message
  }
}

export default Help;

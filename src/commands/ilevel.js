class Ilevel {
  constructor() {

  }

  send(commands) {
    this.server = commands[1];
    this.character = commands[2];
  }
}

export default Ilevel;

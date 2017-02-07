class Region {
  constructor() {
     this.currentRegion = 'eu';
  }

  setRegion(newRegion) {
    this.currentRegion = newRegion;
  }

  send(commands) {
    if (commands.length < 2) {return "You must provide a region"};
    if (commands[1] != 'us' || commands[1] != 'eu') {return "Only us and eu are supported"}
    this.currentRegion = commands[1].toLowerCase();
    return "Region changed to " + commands[1];
  }
}

export default Region;

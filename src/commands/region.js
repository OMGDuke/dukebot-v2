class Region {
  constructor() {
     this.currentRegion = 'eu';
  }

  setRegion(newRegion) {
    this.currentRegion = newRegion;
  }

  send(commands) {
    if (commands.length === 1) {return this.currentRegion};
    if (commands[1] != "us" && commands[1] != "eu") {return "Only us and eu are supported"}
    this.currentRegion = commands[1].toLowerCase();
    return "Region changed to " + this.currentRegion.toUpperCase();
  }
}

export default Region;

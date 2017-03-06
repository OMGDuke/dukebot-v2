class Region {
  constructor() {
     this.currentRegion = "eu";
  }

  setRegion(newRegion) {
    this.currentRegion = newRegion;
  }

  send(commands) {
    let newRegion = commands[1];
    if (commands.length === 1) {return "The current region is: " + this.currentRegion.toUpperCase()}
    if (newRegion != "us" && newRegion != "eu") {return "Only us and eu are supported"}
    this.setRegion(newRegion.toLowerCase());
    return "Region changed to " + newRegion.toUpperCase();
  }
}

export default Region;

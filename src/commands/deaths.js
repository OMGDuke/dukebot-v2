import apiRequest from '../apiRequest';
import WowApi from '../wowApi';

let wowApi = new WowApi();

class Deaths {
  constructor() {
    this._json = {};
  }

  send(commands, region) {
    if (commands.length < 3) {return "You must provide a server and character" +
    " name"}
    this.server = commands[1];
    this.character = commands[2];
    this._json = apiRequest(wowApi.buildCharacterUrl(this.server, this.character, "statistics", region.currentRegion));
    return this.sendMessage();
  }

  parseJson() {
    let deathCount = this._json.statistics.subCategories.filter(function(obj) {
      return obj.name === "Deaths";
    });
    return deathCount[0].statistics[0].quantity
  }

  buildResponse(deathCount) {
    return this._json.name + " has died " + deathCount + " time(s)";
  }

  sendMessage() {
    if("statistics" in this._json) {
      return this.buildResponse(this.parseJson());
    } else {
      return this._json.reason;
    }
  }
}

export default Deaths;

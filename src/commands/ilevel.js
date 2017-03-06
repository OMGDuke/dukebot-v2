import apiRequest from '../apiRequest';
import WowApi from '../wowApi';

let wowApi = new WowApi();

class Ilevel {
  constructor() {
    this._json = {};
  }

  send(commands, region) {
    if (commands.length < 3) {return "You must provide a server and character" +
    " name"}
    this.server = commands[1];
    this.character = commands[2];
    this._json = apiRequest(wowApi.buildCharacterUrl(this.server, this.character, "items", region.currentRegion));
    return this.sendMessage();
  }

  parseJson() {
    return JSON.stringify(this._json.items.averageItemLevelEquipped);
  }

  buildResponse(ilevel) {
    return this._json.name + "'s iLevel: " + ilevel;
  }

  sendMessage() {
    if("items" in this._json) {
      return this.buildResponse(this.parseJson());
    } else {
      return this._json.reason;
    }
  }
}

export default Ilevel;

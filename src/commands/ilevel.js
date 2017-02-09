require('dotenv').config();
import apiRequest from '../apiRequest';
import WowApi from '../wowApi';

let wowApi = new WowApi();

class Ilevel {
  constructor() {
    this.json = {};
  }

  send(commands, region) {
    if (commands.length < 3) {return "You must provide a server and character" +
    " name"};
    this.server = commands[1];
    this.character = commands[2];
    this.json = apiRequest(wowApi.buildUrl(this.server, this.character, "items", region.currentRegion));
    return this.sendMessage();
  }

  parseJson() {
    return JSON.stringify(this.json.items.averageItemLevelEquipped);
  }

  buildResponse(ilevel) {
    return this.json.name + "'s iLevel: " + ilevel;
  }

  sendMessage() {
    if("items" in this.json) {
      return this.buildResponse(this.parseJson());
    } else {
      return this.json.reason;
    }
  }
}

export default Ilevel;

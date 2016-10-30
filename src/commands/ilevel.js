require('dotenv').config();
import apiRequest from '../apiRequest';

class Ilevel {
  constructor() {
    this.url = "https://eu.api.battle.net/wow/character/";
    this.urlOptions = "?fields=items&locale=en_GB&apikey="
    this.json = {};
  }

  send(commands) {
    if (commands.length < 3) {return "You must provide a server and character" +
    " name"};
    this.server = commands[1];
    this.character = commands[2];
    this.json = apiRequest(this.buildUrl());
    return this.sendMessage();
  }

  buildUrl() {
    return this.url + this.server + "/" + this.character + this.urlOptions +
    process.env.WOW_API_KEY;
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

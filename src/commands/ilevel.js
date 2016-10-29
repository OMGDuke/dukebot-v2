var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
require('dotenv').config();

class Ilevel {
  constructor() {
    this.url = "https://eu.api.battle.net/wow/character/";
    this.urlOptions = "?fields=items&locale=en_GB&apikey="
  }

  send(commands) {
    if (commands.length < 3) {return "You must provide a server and character name"};
    this.server = commands[1];
    this.character = commands[2];
  }

  apiRequest(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
  }

  buildUrl() {
    return this.url + this.server + "/" + this.character + this.urlOptions +
    process.env.WOW_API_KEY;
  }
}

export default Ilevel;

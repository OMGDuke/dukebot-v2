class WowApi {
  constructor() {
    this.url = "https://eu.api.battle.net/wow/character/";
    this.url2 = "?fields=";
    this.url3 = "&locale=en_GB&apikey=";
  }

  buildUrl(server, character, criteria) {
    return this.url + server + "/" + encodeURI(character) + this.url2 + criteria +
    this.url3 + process.env.WOW_API_KEY;
  }
}

export default WowApi;

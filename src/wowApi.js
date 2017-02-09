class WowApi {
  constructor() {
    this.url0 = "https://"
    this.url1 = ".api.battle.net/wow/character/";
    this.url2 = "?fields=";
    this.url3 = "&locale=en_GB&apikey=";
  }

  buildUrl(server, character, criteria, region) {
    return this.url0 + region + this.url1 + server + "/" + encodeURI(character) + this.url2 + criteria +
    this.url3 + process.env.WOW_API_KEY;
  }
}

export default WowApi;

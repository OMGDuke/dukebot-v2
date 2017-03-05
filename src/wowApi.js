class WowApi {
  constructor() {
    this.url0 = "https://"
    this.url1 = ".api.battle.net/wow/";
    this.url2 = "?fields=";
    this.url3 = "&locale=en_GB&apikey=";
  }

  buildCharacterUrl(server, character, criteria, region) {
    return this.url0 + region + this.url1 + "character/" + server + "/" + encodeURI(character) + this.url2 + criteria +
    this.url3 + process.env.WOW_API_KEY;
  }

  buildGuildUrl(criteria) {
    return this.url0 + process.env.GUILD_REGION + this.url1 + "guild/" + process.env.GUILD_SERVER + "/" + encodeURI(process.env.GUILD_NAME) + this.url2 + criteria +
    this.url3 + process.env.WOW_API_KEY;
  }
}

export default WowApi;

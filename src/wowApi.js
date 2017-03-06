import dotenv from 'dotenv'
dotenv.config();

class WowApi {
  constructor() {
    this._url0 = "https://";
    this._url1 = ".api.battle.net/wow/";
    this._url2 = "?fields=";
    this._url3 = "&locale=en_GB&apikey=";
  }

  buildCharacterUrl(server, character, criteria, region) {
    return this._url0 + region + this._url1 + "character/" + server + "/" + encodeURI(character) + this._url2 + criteria +
    this._url3 + process.env.WOW_API_KEY;
  }

  buildGuildUrl(criteria) {
    return this._url0 + process.env.GUILD_REGION + this._url1 + "guild/" + process.env.GUILD_SERVER + "/" + encodeURI(process.env.GUILD_NAME) + this._url2 + criteria +
    this._url3 + process.env.WOW_API_KEY;
  }
}

export default WowApi;

import dotenv from 'dotenv'
dotenv.config();

class TsmApi {
  constructor() {
    this._url0 = "http://api.tradeskillmaster.com/v1/item/";
    this._url1 = "?format=json&apiKey=";
  }

  buildTsmUrl(server, itemId, region) {
    return this._url0 + region + "/" + server + "/" + itemId + this._url1 + process.env.TSM_API_KEY;
  }
}

export default TsmApi;

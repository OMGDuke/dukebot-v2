import dotenv from 'dotenv'
dotenv.config()

class TsmApi {
  constructor() {
    this.url0 = "http://api.tradeskillmaster.com/v1/item/";
    this.url1 = "?format=json&apiKey=";
  }

  buildTsmUrl(server, itemId, region) {
    return this.url0 + region + "/" + server + "/" + itemId + this.url1 + process.env.TSM_API_KEY;
  }
}

export default TsmApi;

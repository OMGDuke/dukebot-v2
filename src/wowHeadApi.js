

class WowHeadApi {
  constructor() {
    this._url0 = "http://www.wowhead.com/item=";
    this._url1 = "&xml";
  }

  buildItemUrl(item) {
    return this._url0 + encodeURI(item) + this._url1;
  }
}

export default WowHeadApi;

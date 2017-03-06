

class WowHeadApi {
  constructor() {
    this.url0 = "http://www.wowhead.com/item=";
    this.url1 = "&xml";
  }

  buildItemUrl(item) {
    return this.url0 + encodeURI(item) + this.url1;
  }
}

export default WowHeadApi;

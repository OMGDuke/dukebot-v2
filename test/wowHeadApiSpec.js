import { expect } from 'chai';

import WowHeadApi from '../src/wowHeadApi';

let wowHeadApi = new WowHeadApi();
let url0 = "http://www.wowhead.com/item=";
let url1 = "&xml";
let itemUrl = url0 + "starlight%20rose" + url1;

describe("wowHeadApi", () => {
  describe("Initialize", () => {
    it("initializes with url0", () => {
      expect(wowHeadApi.url0).to.equal(url0);
    });

    it("initializes with url1", () => {
      expect(wowHeadApi.url1).to.equal(url1);
    });
  });

  describe("buildItemUrl", () => {
    it("builds a url from the command received", () => {
      expect(wowHeadApi.buildItemUrl("starlight rose")).to.equal(itemUrl);
    });
  });
});

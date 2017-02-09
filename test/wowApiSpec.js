require('dotenv').config();
let expect = require("chai").expect;

import WowApi from '../src/wowApi';

let wowApi = new WowApi();
let url0 = "https://";
let url1 = ".api.battle.net/wow/character/";
let url2 = "?fields=";
let url3 = "&locale=en_GB&apikey=";
let testUrl = url0 + "eu" + url1 + "draenor/omgduke" + url2 + "items" + url3 +
process.env.WOW_API_KEY;


describe("wowApi", function() {
  describe("Initialize", function() {
    it("initializes with url0", function() {
      expect(wowApi.url0).to.equal(url0);
    });

    it("initializes with url1", function() {
      expect(wowApi.url1).to.equal(url1);
    });

    it("initializes with url2", function() {
      expect(wowApi.url2).to.equal(url2);
    });

    it("initializes with url3", function() {
      expect(wowApi.url3).to.equal(url3);
    });
  });

  describe("buildUrl", function() {
    it("builds a url from the command received", function() {
      expect(wowApi.buildUrl("draenor", "omgduke", "items", "eu")).to.equal(testUrl);
    });
  });
});

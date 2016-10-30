require('dotenv').config();
let expect = require("chai").expect;

import WowApi from '../src/wowApi';

let wowApi = new WowApi();
let url = "https://eu.api.battle.net/wow/character/";
let url2 = "?fields=";
let url3 = "&locale=en_GB&apikey=";
let testUrl = url + "draenor/omgduke" + url2 + "items" + url3 +
process.env.WOW_API_KEY;


describe("wowApi", function() {
  describe("Initialize", function() {
    it("initializes with url", function() {
      expect(wowApi.url).to.equal(url);
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
      expect(wowApi.buildUrl("draenor", "omgduke", "items")).to.equal(testUrl);
    });
  });
});

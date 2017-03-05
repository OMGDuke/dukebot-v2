import dotenv from 'dotenv'
dotenv.config()
import { expect } from 'chai';

import WowApi from '../src/wowApi';

let wowApi = new WowApi();
let url0 = "https://";
let url1 = ".api.battle.net/wow/";
let url2 = "?fields=";
let url3 = "&locale=en_GB&apikey=";
let charUrl = url0 + "eu" + url1 + "character/" + "draenor/omgduke" + url2 + "items" + url3 +
process.env.WOW_API_KEY;
let guildUrl = url0 + "eu" + url1 + "guild/" + "draenor/over%20raided" + url2 + "news" + url3 +
process.env.WOW_API_KEY;


describe("wowApi", function() {
  describe("Initialize", function() {
    it("initializes with url0", function() {
      expect(wowApi.url0).to.equal(url0);
    });

    it("initializes with url1a", function() {
      expect(wowApi.url1).to.equal(url1);
    });

    it("initializes with url2", function() {
      expect(wowApi.url2).to.equal(url2);
    });

    it("initializes with url3", function() {
      expect(wowApi.url3).to.equal(url3);
    });
  });

  describe("buildCharacterUrl", function() {
    it("builds a url from the command received", function() {
      expect(wowApi.buildCharacterUrl("draenor", "omgduke", "items", "eu")).to.equal(charUrl);
    });
  });

  describe("buildGuildUrl", function() {
    it("builds a url from the env vars", function() {
      expect(wowApi.buildGuildUrl("news")).to.equal(guildUrl);
    });
  });
});

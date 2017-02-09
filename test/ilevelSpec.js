require('dotenv').config();
let expect = require("chai").expect;

import Ilevel from '../src/commands/ilevel';

let ilevel = new Ilevel();
let commandArray = ["!ilevel", "draenor", "omgduke"];
let url = "https://eu.api.battle.net/wow/character/";
let urlOptions = "?fields=items&locale=en_GB&apikey=";
let testUrl = url + commandArray[1] + "/" + commandArray[2] + urlOptions +
process.env.WOW_API_KEY;
let response = "Omgduke's iLevel: 875";
let json = {
  name: "Omgduke",
  items: {
    averageItemLevelEquipped: 875
  }
};
let regionClass = {
  currentRegion: "us"
};

describe("Ilevel", function() {
  describe("send", function() {
    it("take in an array and stores the server name", function() {
      ilevel.send(commandArray, regionClass)
      expect(ilevel.server).to.equal("draenor");
    });

    it("take in an array and stores the character name", function() {
      ilevel.send(commandArray, regionClass)
      expect(ilevel.character).to.equal("omgduke");
    });

    it("returns an error message if arguements not provided", function() {
      let arguementsError = "You must provide a server and character name"
      expect(ilevel.send([1], regionClass)).to.equal(arguementsError);
    });
  });

  describe("parseJson", function() {
    it("returns the ilevel", function() {
      ilevel.json = json
      expect(ilevel.parseJson()).to.equal('875');
    });
  });

  describe("buildResponse", function() {
    it("builds a string to respond with", function() {
      ilevel.send(commandArray, regionClass);
      ilevel.json = json
      expect(ilevel.buildResponse(875)).to.equal(response);
    })
  })

  describe("sendMessage", function() {
    it("Sends a correct response if data is valid", function() {
      ilevel.send(commandArray, regionClass);
      ilevel.json = json
      expect(ilevel.sendMessage()).to.equal(response);
    });
    it("provides an error message if data is invalid", function() {
      ilevel.send([1, "server", "character"], regionClass);
      expect(ilevel.sendMessage()).to.equal("Realm not found.");
    });
  })
});

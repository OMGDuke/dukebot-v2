require('dotenv').config();
let expect = require("chai").expect;
let sinon = require("sinon")

import Ilevel from '../src/commands/ilevel';

let ilevel = new Ilevel();
let commandArray = ["!ilevel", "draenor", "omgduke"];
let url = "https://eu.api.battle.net/wow/character/";
let urlOptions = "?fields=items&locale=en_GB&apikey=";
let testUrl = url + commandArray[1] + "/" + commandArray[2] + urlOptions +
process.env.WOW_API_KEY;
let response = "Omgduke's iLevel: 870";

describe("Ilevel", function() {
  describe("Initialize", function() {
    it("initializes with a url", function() {
      expect(ilevel.url).to.equal(url);
    });

    it("initializes with urlOptions", function() {
      expect(ilevel.urlOptions).to.equal(urlOptions);
    });
  });

  describe("send", function() {
    it("take in an array and stores the server name", function() {
      ilevel.send(commandArray)
      expect(ilevel.server).to.equal("draenor");
    });

    it("take in an array and stores the character name", function() {
      ilevel.send(commandArray)
      expect(ilevel.character).to.equal("omgduke");
    });

    it("returns an error message if arguements not provided", function() {
      let arguementsError = "You must provide a server and character name"
      expect(ilevel.send([1])).to.equal(arguementsError);
    });
  });

  describe("buildUrl", function() {
    it("builds a url from the command received", function() {
      ilevel.send(commandArray);
      expect(ilevel.buildUrl()).to.equal(testUrl);
    });
  });

  describe("parseJson", function() {
    it("returns the ilevel", function() {
      ilevel.json = {items: {averageItemLevelEquipped: 870}}
      expect(ilevel.parseJson()).to.equal('870');
    });
  });

  describe("buildResponse", function() {
    it("builds a string to respond with", function() {
      ilevel.send(commandArray);
      expect(ilevel.buildResponse(870)).to.equal(response);
    })
  })

  describe("sendMessage", function() {
    it("Sends a correct response if data is valid", function() {
      ilevel.send(commandArray);
      expect(ilevel.sendMessage()).to.equal(response);
    });
    it("provides an error message if data is invalid", function() {
      ilevel.send([1, "server", "character"]);
      expect(ilevel.sendMessage()).to.equal("Realm not found.");
    });
  })
});

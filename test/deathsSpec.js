require('dotenv').config();
let expect = require("chai").expect;

import Deaths from '../src/commands/deaths';

let deaths = new Deaths();
let commandArray = ["!ilevel", "draenor", "omgduke"];
let url = "https://eu.api.battle.net/wow/character/";
let urlOptions = "?fields=statistics&locale=en_GB&apikey=";
let testUrl = url + commandArray[1] + "/" + commandArray[2] + urlOptions +
process.env.WOW_API_KEY;
let json = {
  name: "Omgduke",
  statistics: {
    subCategories: [{
      name: "Deaths",
      statistics: [{
        quantity: "100"
      }]
    }]
  }
}
let response = "Omgduke has died 100 time(s)";

describe("Deaths", function() {
  describe("send", function() {
    it("take in an array and stores the server name", function() {
      deaths.send(commandArray)
      expect(deaths.server).to.equal("draenor");
    });

    it("take in an array and stores the character name", function() {
      deaths.send(commandArray)
      expect(deaths.character).to.equal("omgduke");
    });

    it("returns an error message if arguements not provided", function() {
      let arguementsError = "You must provide a server and character name"
      expect(deaths.send([1])).to.equal(arguementsError);
    });
  });

  describe("parseJson", function() {
    it("returns the death count", function() {
      deaths.json = json
      expect(deaths.parseJson()).to.equal('100');
    });
  });

  describe("buildResponse", function() {
    it("builds a string to respond with", function() {
      deaths.send(commandArray);
      expect(deaths.buildResponse(100)).to.equal(response);
    })
  })

  describe("sendMessage", function() {
    it("Sends a correct response if data is valid", function() {
      deaths.send(commandArray);
      deaths.json = json
      expect(deaths.sendMessage()).to.equal(response);
    });
    it("provides an error message if data is invalid", function() {
      deaths.send([1, "server", "character"]);
      expect(deaths.sendMessage()).to.equal("Realm not found.");
    });
  })
});

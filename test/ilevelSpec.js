require('dotenv').config();

let expect = require("chai").expect;
import Ilevel from '../src/commands/ilevel';

let ilevel = new Ilevel();
let commandArray = ["!ilevel", "Server Name", "Character Name"];
let url = "https://eu.api.battle.net/wow/character/";
let urlOptions = "?fields=items&locale=en_GB&apikey=";


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
      expect(ilevel.server).to.equal("Server Name");
    });

    it("take in an array and stores the character name", function() {
      ilevel.send(commandArray)
      expect(ilevel.character).to.equal("Character Name");
    });

    it("returns an error message if arguements not provided", function() {
      let arguementsError = "You must provide a server and character name"
      expect(ilevel.send([1])).to.equal(arguementsError);
    });
  });

  describe("buildUrl", function() {
    it("builds a url from the command received", function() {
      let testUrl = url + commandArray[1] + "/" + commandArray[2] + urlOptions +
      process.env.WOW_API_KEY;
      ilevel.send(commandArray);
      expect(ilevel.buildUrl()).to.equal(testUrl);
    })
  });
});

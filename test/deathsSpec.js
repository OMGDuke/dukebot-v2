import { expect } from 'chai';

import Deaths from '../src/commands/deaths';

let deaths = new Deaths();
let commandArray = ["!ilevel", "draenor", "omgduke"];
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
let regionClass = {
  currentRegion: "eu"
};

describe("Deaths", () => {
  describe("send", () => {
    it("take in an array and stores the server name", () => {
      deaths.send(commandArray, regionClass)
      expect(deaths.server).to.equal("draenor");
    });

    it("take in an array and stores the character name", () => {
      deaths.send(commandArray, regionClass)
      expect(deaths.character).to.equal("omgduke");
    });

    it("returns an error message if arguements not provided", () => {
      let arguementsError = "You must provide a server and character name"
      expect(deaths.send([1])).to.equal(arguementsError);
    });
  });

  describe("parseJson", () => {
    it("returns the death count", () => {
      deaths.json = json
      expect(deaths.parseJson()).to.equal('100');
    });
  });

  describe("buildResponse", () => {
    it("builds a string to respond with", () => {
      deaths.send(commandArray, regionClass);
      expect(deaths.buildResponse(100)).to.equal(response);
    })
  })

  describe("sendMessage", () => {
    it("Sends a correct response if data is valid", () => {
      deaths.send(commandArray, regionClass);
      deaths.json = json
      expect(deaths.sendMessage()).to.equal(response);
    });
    it("provides an error message if data is invalid", () => {
      deaths.send([1, "server", "character"], regionClass);
      expect(deaths.sendMessage()).to.equal("Realm not found.");
    });
  })
});

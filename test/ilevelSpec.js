let expect = require("chai").expect;
import Ilevel from '../src/commands/ilevel';

let ilevel = new Ilevel();
let commandArray = ["!ilevel", "Server Name", "Character Name"]

describe("Ilevel", function() {
  xit("returns the ilevel of the character you requested", function() {
    expect(ilevel.send()).to.equal("850");
  });

  describe("send", function() {
    it("take in an array and stores the server name", function() {
      ilevel.send(commandArray)
      expect(ilevel.server).to.equal("Server Name");
    })
    it("take in an array and stores the character name", function() {
      ilevel.send(commandArray)
      expect(ilevel.character).to.equal("Character Name");
    })
  })
});

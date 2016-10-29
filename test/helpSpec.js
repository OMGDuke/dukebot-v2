let expect = require("chai").expect;
import Help from '../src/commands/help';

const helpMessage = "__**Available Commands are:**__\n\n**!slap** name\n" +
"**!(role)** (eg !rank1, !rank5)\n**!ilevel** server characterName\n" +
"**!deaths** server characterName";

let help = new Help();

describe("Help", function() {
  it ("starts with a list of commands stored", function() {
      expect(help.message).to.equal(helpMessage);
  });

  describe("send", function() {
    it("returns a list of commands", function() {
      expect(help.send()).to.equal(helpMessage);
    });
  });
});

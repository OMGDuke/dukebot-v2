let expect = require("chai").expect;
import HelpCommand from '../src/commands/help';

const helpMessage = "Available Commands are:\n!slap name\n!(role) (eg !rank1, !rank5)\n" +
"!ilevel server characterName\n!deaths server characterName";

let helpCommand = new HelpCommand();

describe("Help", function() {
  it("returns a list of commands", function() {
    expect(helpCommand.help).to.equal(helpMessage);
  });
});

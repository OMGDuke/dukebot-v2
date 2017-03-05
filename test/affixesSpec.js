import { expect } from 'chai';

import Affixes from '../src/commands/affixes';

let affixes = new Affixes();
let commandArray = ["!affixes"];

before: () => {

}

describe("Affixes", () => {
  describe("affixCollection", () => {
    it("stores a collection of affix sets", () => {
      expect(affixes.affixCollection.week1).to.equal("Raging, Necrotic, Fortified");
    });
  });

  describe("findCurrentSet", () => {
    it("returns a set based on the current week and region", () => {
      expect(affixes.findCurrentSet()).to.be.a("string")
    });
  });

  describe("getCurrentWeek", () => {
    it("returns the current week as a number", () => {
      expect(affixes.getCurrentWeek()).to.be.a('number')
    });
  });
});

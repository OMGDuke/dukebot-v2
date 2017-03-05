import { expect } from 'chai';

import Tsm from '../src/commands/tsm';

let tsm = new Tsm();
let commandArray = ["!tsm", "draenor", "starlight", "rose"];
let regionClass = {
  currentRegion: "eu"
};

describe("Tsm", () => {
  describe("send", () => {
    it("take in an array and stores the item name", () => {
      tsm.send(commandArray, regionClass)
      expect(tsm.itemName).to.equal("starlight rose");
    });

    it("take in an array and stores the server name", () => {
      tsm.send(commandArray, regionClass)
      expect(tsm.server).to.equal("draenor");
    });

    it("take in an array and stores the current region", () => {
      tsm.send(commandArray, regionClass)
      expect(tsm.region).to.equal("eu");
    });
  });

  describe("findItemId", () => {
    it("makes a request to find out the itemId", () => {
      tsm.findItemId();
      expect(tsm.itemId).to.equal("124105")
    })
  })

  describe("findTsmData", () => {
    it("makes a request to find out the TSM data", () => {
      tsm.itemId = "124105"
      tsm.findTsmData();
      expect(tsm.tsmData).to.equal("Hello data")
    })
  })
});

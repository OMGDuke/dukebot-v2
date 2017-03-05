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

      expect(tsm.findItemId()).to.equal("124105")
    })
  })

  describe("findTsmData", () => {
    it("makes a request to find out the TSM data", () => {
      tsm.itemId = "124105"
      expect(tsm.findTsmData().Name).to.equal("Starlight Rose")
    })
  })

  describe("buildResponse", () => {
    it("returns a string response", () => {
      tsm.itemData = {
        "Id": 124105,
        "Name": "Starlight Rose",
        "Level": 101,
        "Class": "Trade Goods",
        "SubClass": "Herb",
        "VendorBuy": 0,
        "VendorSell": 1750,
        "MarketValue": 793492,
        "MinBuyout": 687999,
        "Quantity": 35854,
        "NumAuctions": 753,
        "HistoricalPrice": 912986,
        "RegionMarketAvg": 918285,
        "RegionMinBuyoutAvg": 828728,
        "RegionQuantity": 9817,
        "RegionHistoricalPrice": 994625,
        "RegionSaleAvg": 652873,
        "RegionAvgDailySold": 5506.2,
        "RegionSaleRate": 0.76
      }
      expect(tsm.buildResponse()).to.contain("Starlight Rose - Draenor EU:\nMin Buyout: ")
    })
  })

  describe("returnGoldBreakdown", () => {
    it("returns the value in g s and c", () => {
      expect(tsm.returnGoldBreakdown(687999)).to.equal("68g 79s 99c");
    })
  })
});

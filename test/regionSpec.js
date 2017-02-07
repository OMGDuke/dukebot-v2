let expect = require("chai").expect;
import Region from '../src/commands/region';

let region = new Region();
let commandArray = ["!region", "us"];
let noRegion = ["!region"];
let invalidRegion = ["!region", "kr"];

describe("Region", function() {
  it ("stores eu as the default region", function() {
    expect(region.currentRegion).to.equal('eu');
  });

  describe("setRegion", function() {
    it("changes the current region", function() {
      region.setRegion('us')
      expect(region.currentRegion).to.equal('us');
    });
  });

  describe("send", function() {
    it("take in an array and stores the name", function() {
      region.send(commandArray);
      expect(region.currentRegion).to.equal("us");
    });

    it("returns an error if you do not provide a region", function() {
      let arguementsError = "You must provide a region"
      expect(region.send(noRegion)).to.equal(arguementsError);
    });

    it("returns an error if you do not provide a supported region", function() {
      let arguementsError = "Only us and eu are supported"
      expect(region.send(invalidRegion)).to.equal(arguementsError);
    });
  });
});

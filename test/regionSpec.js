import { expect } from 'chai';
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
    it("returns the current region if you do not provide a region", function() {
      expect(region.send(noRegion)).to.equal("The current region is: US");
    });

    it("returns an error if you do not provide a supported region", function() {
      let arguementsError = "Only us and eu are supported"
      expect(region.send(invalidRegion)).to.equal(arguementsError);
    });

    it("take in an array and stores the name", function() {
      region.send(commandArray);
      expect(region.currentRegion).to.equal("us");
    });

    it("returns a message to let the user know the region has been changed", function() {
      console.log(commandArray[1]);
      expect(region.send(commandArray)).to.equal("Region changed to US");
    })
  });
});

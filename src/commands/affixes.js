import dotenv from 'dotenv'
dotenv.config()

class Affixes {
  constructor() {
    this.affixCollection = {
      week1: "Raging, Necrotic, Fortified",
      week2: "Bolstering, Overflowing, Tyrannical",
      week3: "Sanguine, Volcanic, Fortified",
      week4: "Teeming, Necrotic, Tyrannical",
      week5: "Raging, Volcanic, Tyrannical",
      week6: "Bolstering, Skittish, Fortified",
      week7: "Sanguine, Overflowing, Tyrannical",
      week8: "Teeming, Skittish, Fortified"
    }
    this.region = "eu";
  }

  send(commands, region) {
    this.region = region;
    return "**This weeks affixes (" + region.currentRegion.toUpperCase() + "):** " + this.findCurrentSet()
  }

  findCurrentSet() {
    let week = "week" + this.getCurrentWeek()
    return this.affixCollection[week]
  }

  getCurrentWeek() {
    let weeks = this.calculateWeeks()
    return (this.region.currentRegion === "eu") ? weeks : weeks - 2;
  }

  calculateWeeks() {
    let start  = new Date("2017-01-18");
    var today = new Date();
    let weeks =  Math.round((today-start)/ 604800000);
    return (weeks > 8) ? Math.floor((weeks / 8)) : weeks;
  }
}

export default Affixes;

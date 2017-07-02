class Affixes {
  constructor() {
    this.affixCollection = {
      week1: 'Raging, Volcanic, Tyrannical',
      week2: 'Teeming, Explosive, Fortified',
      week3: 'Bolstering, Grievous, Tyrannical',
      week4: 'Sanguine, Volcanic, Fortified',
      week5: 'Bursting, Skittish, Tyrannical',
      week6: 'Teeming, Quaking, Fortified',
      week7: 'Raging, Necrotic, Tyrannical',
      week8: 'Bolstering, Skittish, Fortified',
      week9: 'Teeming, Necrotic, Tyrannical',
      week10: 'Sanguine, Grievous, Fortified',
      week11: 'Bolstering, Explosive, Tyrannical',
      week12: 'Bursting, Quaking, Fortified'
    };
    this._region = "eu";
  }

  send(commands, region) {
    this._region = region;
    return "**This weeks affixes (" + region.currentRegion.toUpperCase() + "):** " + this.findCurrentSet();
  }

  findCurrentSet() {
    let week = "week" + this.calculateWeeks();
    return this.affixCollection[week]
  }

  calculateWeeks() {
    const oneDay = 24*60*60*1000;
    let usDate = new Date(Date.UTC(2017, 2, 28, 15, 0, 0));
    let euDate = new Date(Date.UTC(2017, 2, 29, 7, 0, 0));
    let start  = this._region.currentRegion ==="eu" ? euDate : usDate;
    let today = new Date();
    let daysBetween = Math.round(Math.abs((start.getTime() - today.getTime())/(oneDay)));
    let weeks =  Math.floor(daysBetween/7);
    return (weeks%12) + 1;
  }
}

export default Affixes;

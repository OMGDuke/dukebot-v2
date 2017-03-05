import apiRequest from '../apiRequest';
import WowHeadApi from '../WowHeadApi';
import TsmApi from '../tsmApi'

let wowHeadApi = new WowHeadApi();
let tsmApi = new TsmApi();


class Tsm {
  constructor() {
    this.json = {};
  }

  send(commands, region) {
    if (commands.length < 3) {return "You must provide a server and item name"};
    this.server = commands[1];
    this.itemName = commands.slice(2).join(" ");
    this.region = region.currentRegion;
    this.itemId = this.findItemId();
    this.tsmData = this.findTsmData();
    return this.buildResponse()
  }

  findItemId() {
    return apiRequest(wowHeadApi.buildItemUrl(this.itemName))
  }

  findTsmData() {
    return apiRequest(tsmApi.buildTsmUrl(this.server, this.itemId, this.region))
  }

  buildResponse() {
    let line1 = "**" + this.tsmData.Name + "** - " + this.server.charAt(0).toUpperCase() + this.server.slice(1).toLowerCase() + " " + this.region.toUpperCase() + ":\n\n";
    let line2 = "*Min Buyout:* " + this.returnGoldBreakdown(this.tsmData.MinBuyout) + ":\n";
    let line3 = "*Market Value:* " + this.returnGoldBreakdown(this.tsmData.MarketValue) + ":\n";
    let line4 = "*Historical Price:* " + this.returnGoldBreakdown(this.tsmData.HistoricalPrice) + ":\n";
    let line5 = "*Current Quantity:* " + this.tsmData.Quantity;
    return line1 + line2 + line3 + line4 + line5;
  }

  returnGoldBreakdown(amount) {
    let copper = amount.toString().split("").slice(-2).join("")
    let silver = amount.toString().split("").slice(-4, -2).join("")
    let gold = amount.toString().split("").slice(0, -4).join("")
    return gold + "g " + silver + "s " + copper + "c";
  }
}

export default Tsm;

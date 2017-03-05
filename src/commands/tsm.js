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
    this.findItemId();
    this.findTsmData();
    return this.tsmData.name
  }

  findItemId() {
    this.itemId = apiRequest(wowHeadApi.buildItemUrl(this.itemName))
  }

  findTsmData() {
    this.tsmData = apiRequest(tsmApi.buildTsmUrl(this.server, this.itemId, this.region))
    console.log(JSON.stringify(this.tsmData));
  }
}

export default Tsm;

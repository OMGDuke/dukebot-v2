import dotenv from 'dotenv'
dotenv.config();
import { expect } from 'chai';

import TsmApi from '../src/tsmApi';

let tsmApi = new TsmApi();
let url0 = "http://api.tradeskillmaster.com/v1/item/";
let url1 = "?format=json&apiKey=";
let itemUrl = url0 + "eu/draenor/124105" + url1 + process.env.TSM_API_KEY;

describe("tsmApi", () => {
  describe("Initialize", () => {
    it("initializes with url0", () => {
      expect(tsmApi._url0).to.equal(url0);
    });

    it("initializes with url1a", () => {
      expect(tsmApi._url1).to.equal(url1);
    });
  });

  describe("buildTsmUrl", () => {
    it("builds a url from the command received", () => {
      expect(tsmApi.buildTsmUrl("draenor", "124105", "eu")).to.equal(itemUrl);
    });
  });
});

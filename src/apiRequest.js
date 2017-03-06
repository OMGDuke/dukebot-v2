import {XMLHttpRequest} from "xmlhttprequest";
let parseString = require('xml2js').parseString;

function apiRequest(url) {
  let itemId;
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false ); // false for synchronous request
  xmlHttp.send( null );
  try {
    return JSON.parse(xmlHttp.responseText);
  } catch(error) {
    parseString(xmlHttp.responseText, function (err, result) {
      if (result.wowhead.error) {
        itemId = result.wowhead
      } else {
        itemId = result.wowhead.item[0].$.id;  
      }
    });
    return itemId;
  }
}

export default apiRequest;

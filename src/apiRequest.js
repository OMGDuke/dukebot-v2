var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function apiRequest(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false ); // false for synchronous request
  xmlHttp.send( null );
  return JSON.parse(xmlHttp.responseText);
}

export default apiRequest;

const app = angular.module('CampusMap', []);

let getParams = function() {
  let params = {};
  let url = window.location + '';
  let queryString = url.split('?');

  if (queryString.length == 1) {
    console.log("no queries given");
    return null;
  }
  paramString = queryString[1].split('&');
  let param;
  for (let i = 0; i < paramString.length; i++) {
    param = paramString[i].split('=');
    params[param[0]] = param[1];
  }
  console.log(params);
  return params;
}

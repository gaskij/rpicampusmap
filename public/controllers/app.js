const app = angular.module('CampusMap', []);

let getParams = function() {
  let params = {};
  let url = window.location + '';
  let queryString = url.split('?');

  if (queryString.length == 1) {
    console.log("no queries given");
    return null;
  }

  for (let i = 1; i < queryString.length; i++) {
    let param = queryString[i].split('=');
    params[param[0]] = param[1];
  }

  return params;
}

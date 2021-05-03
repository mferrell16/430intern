
require("isomorphic-fetch");


function getProfile(username,zip) {
	console.log("hello");  
  return fetch(`http://localhost:8080/api?q=${username}&z=${zip}`).then(function(resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}


module.exports = {
  getInfo2: function(user, zip) {
    return getProfile(user, zip).catch(handleError);
  }

};

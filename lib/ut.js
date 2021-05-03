
require("isomorphic-fetch");


function getProfile(username, pass, zip) {
	console.log("hello");  
  return fetch(`http://localhost:8080/api/create?username=${username}&password=${pass}&zipcode=${zip}`).then(function(resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}


module.exports = {
  getAccount: function(user, pass, zip) {
    return getProfile(user, pass, zip).catch(handleError);
  }

};
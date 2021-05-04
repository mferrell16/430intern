
require("isomorphic-fetch");


function getProfile(username, pass) {
	console.log("hello");  
  return fetch(`http://localhost:8080/create?username=${username}&password=${pass}`).then(function(resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}


module.exports = {
  getAccount: function(user, pass) {
    return getProfile(user, pass).catch(handleError);
  }

};
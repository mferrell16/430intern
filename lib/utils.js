
require("isomorphic-fetch");


function getProfile(user) {
	console.log("hello");  
  return fetch(`http://localhost:8080/api?q=${user}`).then(function(resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}


module.exports = {
  getInfo: function(user) {
    return getProfile(user).catch(handleError);
  }

};


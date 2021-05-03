
require("isomorphic-fetch");


function getProfile() {
  return fetch(`http://localhost:8080/reviews`).then(function(resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}


module.exports = {
  getButton: function() {
    return getProfile().catch(handleError);
  }

};



require("isomorphic-fetch");

function getLog(username, password) {
  console.log("hello");  
  return fetch(`http://localhost:8080/api/login?username=${username}&password=${password}`).then(function(resp) {
    return resp.json();
  });
}
function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  getLogin: function(user, pass) {
    return getLog(user, pass).catch(handleError);
  }
};


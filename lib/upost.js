
require("isomorphic-fetch");


function getProfile(Company, postitle, ptype, location, desc, email, name) {
	console.log("hello");  
  return fetch(`http://localhost:8080/addpost?title=${postitle}&company=${Company}&location=${location}&description=${desc}&email=${email}&ptype=${ptype}&name=${name}`).then(function(resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}


module.exports = {
  subPost: function(Company, postitle, ptype, location, desc, email, name) {
    return getProfile(Company, postitle, ptype, location, desc, email, name).catch(handleError);
  }

};
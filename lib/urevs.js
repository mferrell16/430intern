
require("isomorphic-fetch");


function getProfile(Company, postitle, pdate, rating, review, email, name) {
	console.log("hello");  
  return fetch(`http://localhost:8080/addreview?position=${postitle}&company=${Company}&rating=${rating}&review=${review}&email=${email}&pdate=${pdate}&name=${name}`).then(function(resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}


module.exports = {
  subReview: function(Company, postitle, pdate, rating, review, email, name) {
    return getProfile(Company, postitle, pdate, rating, review, email, name).catch(handleError);
  }

};
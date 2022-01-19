const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const search = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(search, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
  
    const data = JSON.parse(body);
  
    if (data[0] === undefined) {
      callback(null, 'Breed not found. Please enter a valid breed.');
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = fetchBreedDescription;
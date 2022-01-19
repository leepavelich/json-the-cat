const request = require ('request');

const breed = process.argv.slice(2);

if (breed.length !== 1) {
  console.log('Please enter only one breed')
  return;
}

const search = `https://api.thecatapi.com/v1/breeds/search?q=${breeDd}`;

request(search, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  const data = JSON.parse(body);
  console.log(data[0].description)
});
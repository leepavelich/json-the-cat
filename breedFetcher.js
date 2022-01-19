const request = require ('request');

let breed = process.argv.slice(2);

if (breed.length !== 1 && breed.length !== 2) {
  console.log('Please enter only one breed.')
  return;
}

if (breed.length === 2) {
  breed = breed.join(' ');
}

const search = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(search, (error, response, body) => {
  if (error) {
    console.log('Error', error)
    return;
  }

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    console.log('Breed not found. Please enter a valid breed.');
    return;
  }

  console.log(data[0].description)
});
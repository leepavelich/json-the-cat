const fetchBreedDescription = require('./breedFetcher')

let breed = process.argv.slice(2);

if (breed.length === 0) {
  console.log('Please enter a breed.')
  return;
}

if (breed.length !== 1 && breed.length !== 2) {
  console.log('Please enter only one breed.');
  return;
}

if (breed.length === 2) {
  breed = breed.join(' ');
}

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
    return;
  }
  console.log(desc);
});
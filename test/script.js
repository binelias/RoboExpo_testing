const googleDB = [
  'cats.com',
  'souprecipe.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavoritecats.com'
];

const googleSearch = (searcInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searcInput);
  })
  return matches.length>3 ? matches.slice(0,3) : matches;
}

// console.log(googleSearch('cats', googleDB));

module.exports = googleSearch;
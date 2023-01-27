const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp').then(() => {
  console.log("CONNECTION OPEN!!!")
})
.catch(err => {
  console.log("OH NO ERROR")
  console.log(err)
})


const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

const amadeus = new Movie({
  title: 'Amadeus',
  year: 1986,
  score: 9.2,
  rating: 'R'
})

// amadeus.save()


// Movie.insertMany([
//   { title: 'Amelie', year: 2001, score: 8.2, rating: 'R' },
//   { title: 'Alien', year: 1979, score: 8.5, rating: 'R' },
//   { title: 'The Godfather', year: 1971, score: 9.7, rating: 'PG' },
//   { title: 'Cars', year: 2006, score: 9.2, rating: 'PG-13' },
//   { title: 'The Little Mermaid', year: 1989, score: 7.6, rating: 'G' }
// ]);



const mongoose = require("mongoose");

// const movieSchema = new mongoose.Schema({
//   adult: { type: Boolean },
//   backdrop_path: { type: String },
//   genre_ids: { type: Array },
//   id: { type: Number },
//   original_language: { type: String },
//   original_title: { type: String },
//   overview: { type: String },
//   popularity: { type: Number },
//   poster_path: { type: String },
//   release_date: { type: String },
//   title: { type: String },
//   video: { type: Boolean },
//   vote_average: { type: Number },
//   vote_count: { type: Number },
// });

const movieSchema = new mongoose.Schema({
  upcoming: { type: Array },
  top_rated: { type: Array },
  now_playing: { type: Array },
  popular: { type: Array },
});

const movieListModel = mongoose.model("movies", movieSchema);

module.exports = { movieListModel };

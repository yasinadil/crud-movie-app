import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  rating: Number,
  views: Number,
});

// const User = models.User || mongoose.model("User", userSchema);
const Movie = mongoose.models.movies || mongoose.model("movies", movieSchema);

export { Movie };

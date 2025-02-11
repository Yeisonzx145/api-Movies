const Movie = require("../../models/Movie")

const serviceGetMovies = async ()=> {
    const movies = await Movie.find();
    return movies
}

module.exports = serviceGetMovies;
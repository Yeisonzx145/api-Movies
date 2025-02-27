const Movie = require("../../models/Movie")

module.exports = {

    GetMovies : async ()=> {
        const movies = await Movie.find().populate('genre', 'typeGenre');
        return movies
    },

    createMovie : async (movie)=>{
        const newMovie = await Movie.create(movie)
        return newMovie 
    },

    byId : async (id)=>{
        const movie = await Movie.findById(id);

        return movie;
    }
}
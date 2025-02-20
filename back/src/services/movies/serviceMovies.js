const Movie = require("../../models/Movie")

module.exports = {

    GetMovies : async ()=> {
        const movies = await Movie.find();
        return movies
    },

    createMovie : async (movie)=>{
        return movie    
    }
}
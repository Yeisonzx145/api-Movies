const Movie = require("../../models/Movie")

module.exports = {

    GetMovies : async ()=> {
        const movies = await Movie.find().populate('genre', 'typeGenre');
        return movies
    },

    createMovie : async (movie)=>{
        const validateMovie = await Movie.findOne({title:movie.title})

        if(validateMovie){
            throw({message:"La pelicula ya existe", statusCode: 400})
        }
        const newMovie = await Movie.create(movie)
        return newMovie 
    },

    byId : async (id)=>{
        const movie = await Movie.findById(id).populate('genre', 'typeGenre');
        return movie;
    }
}
const Genre = require("../../models/Genre");
const Movie = require("../../models/Movie");

module.exports = {
    serviceGetGenre : async () => {
        const genres = await Genre.find({}, '-__v').populate('movie', '_id title')
        return genres;
    },

    createGenre : async (typeGenre) => {
        const newGenre = await Genre.create(typeGenre)
        return newGenre
    },

    byNameGenre : async (name) =>{
        const byName = await Genre.findOne({typeGenre:name});

        return byName;
    },

    putGenre : async (idMovie, idGenre)=>{
        const genre = await Genre.findById(idGenre);
        const movie = await Movie.findById(idMovie);

        genre.movie = idMovie;
        movie.genre = idGenre;

        await genre.save();
        await movie.save();
        
        return genre;
    }
}
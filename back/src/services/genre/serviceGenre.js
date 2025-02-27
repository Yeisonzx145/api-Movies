const Genre = require("../../models/Genre");
const Movie = require("../../models/Movie");

module.exports = {
    serviceGetGenre : async () => {
        const genres = await Genre.find({}, '-__v').populate('movie', '_id title')
        return genres;
    },

    createGenre : async ({typeGenre}) => {
        
        if(await Genre.findOne({typeGenre})){
            throw({message:"El genero ya se encuentra registrado", statusCode: 400})
            
        }
        const newGenre = await Genre.create({typeGenre})
        return newGenre
    },

    byNameGenre : async (name) =>{
        const byName = await Genre.findOne({typeGenre:name}).populate('movie', '_id title');

        if (!byName) throw({message:`${name} no se encontro`, statusCode: 400})

        return byName;
    },

    putGenre : async (idMovie, idGenre)=>{
        const genre = await Genre.findById(idGenre);
        const movie = await Movie.findById(idMovie);

        if(!genre || !movie) throw({message:"No se encontro alguno de los datos", statusCode:400});
        
        genre.movie.forEach((id)=>{
            console.log(id);
            if(id == idMovie)throw({message:"ya se encuentra registrado", statusCode:400});   
        })
        
        genre.movie.push(idMovie);
        movie.genre.push(idGenre);

        await genre.save();
        await movie.save();
        
        return genre;
    }
}
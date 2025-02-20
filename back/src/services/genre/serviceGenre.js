const Genre = require("../../models/Genre")

module.exports = {
    serviceGetGenre : async () => {
        const genres = await Genre.find()
        return genres;
    },

    createGenre : async (typeGenre) => {
        const newGenre = await Genre.create(typeGenre)
        return newGenre
    },

    byNameGenre : async (name) =>{
        const byName = await Genre.findOne({typeGenre:name});

        return byName;
    }
}
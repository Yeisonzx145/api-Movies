const Genre = require("../../models/Genre")

module.exports = {
    serviceGetGenre : async () => {
        const genres = await Genre.find()
        return genres;
    }
}
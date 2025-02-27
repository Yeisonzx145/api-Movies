const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
    typeGenre:String,
    movie:[{type:mongoose.Schema.Types.ObjectId, ref:"Movie"}]
})

const Genre = mongoose.model("Genre",genreSchema);

module.exports = Genre;
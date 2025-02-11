const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
    type:String
})

const Genre = mongoose.model("Genre",genreSchema);

module.exports = Genre;
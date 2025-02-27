const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    director:String,
    duration:String,
    rate:Number,
    poster:String,
    genre:[{type:mongoose.Schema.Types.ObjectId, ref:"Genre"}]
})

const Movie = mongoose.model("Movie",movieSchema) 

module.exports = Movie;
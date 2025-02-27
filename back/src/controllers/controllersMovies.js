const serviceMovies = require("../services/movies/serviceMovies")
const catchAsync = require('../utils/catchAsync')

const getMovie = async (req,res)=>{
    const respnse = await serviceMovies.GetMovies()
    res.status(200).json(respnse)
}

const postMovie = async (req, res) =>{
    const {title, year, director, duration,rate, poster} = req.body
    const response = await serviceMovies.createMovie({title, year, director, duration, rate, poster})
    res.status(201).json(response)
}

const getById = async (req,res)=>{
    const {id} = req.params
    const response = await serviceMovies.byId(id)
    res.status(200).json(response)
}

module.exports = {
    getMovie:catchAsync(getMovie),
    postMovie:catchAsync(postMovie),
    getById:catchAsync(getById)
}
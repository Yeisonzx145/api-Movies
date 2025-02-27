const serviceGenre = require("../services/genre/serviceGenre")
const catchAsync = require("../utils/catchAsync");

const getGenre = async (req,res)=>{
    const response = await serviceGenre.serviceGetGenre()
    res.status(200).json(response)
}

const postGenre = async ( req, res ) => {
    const {typeGenre} = req.body
    const response = await serviceGenre.createGenre({typeGenre})
    res.status(201).json(response)
}

const getByName = async (req, res)=>{
    const {name} = req.params 
    const response = await serviceGenre.byNameGenre(name);
    res.status(200).json(response)
}

const putMovieToGenre = async (req,res)=>{
    const {idMovie, idGenre} = req.body
    const response = await serviceGenre.putGenre(idMovie,idGenre);
    res.status(200).json(response)
}

module.exports= {
    getGenre:catchAsync(getGenre),
    postGenre:catchAsync(postGenre),
    getByName:catchAsync(getByName),
    putMovieToGenre:catchAsync(putMovieToGenre)
}
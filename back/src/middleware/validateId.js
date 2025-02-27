const mongoose = require("mongoose");

const validateIdOne = (req,res,next)=>{
    const {id} = req.params
    if(mongoose.Types.ObjectId.isValid(id)){
        next()
    }else{
        next({message: "id invalide", statusCode:400})
    }
}

const validationIds = (req,res,next)=>{
    const {idMovie, idGenre} = req.body
    if(mongoose.Types.ObjectId.isValid(idMovie) && mongoose.Types.ObjectId.isValid(idGenre)){
        next()
    }else{
        next({message: "id invalide", statusCode:400})
    }
}

module.exports = {
    validateIdOne, 
    validationIds
};
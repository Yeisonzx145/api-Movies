const serviceGetMovies = require("../services/movies/serviceGetMovies")

module.exports = {
    getMovie :(req,res)=>{
        try {
            const respnse = serviceGetMovies()
            res.status(200).json(respnse)
        } catch (error) {
            
        }
    }
}
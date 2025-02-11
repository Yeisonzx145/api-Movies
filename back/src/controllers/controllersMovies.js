const serviceGetMovies = require("../services/movies/serviceGetMovies")

module.exports = {
    getMovie : async (req,res)=>{
        try {
            const respnse = await serviceGetMovies()
            res.status(200).json(respnse)
        } catch (error) {
            res.status(500).json(
                {
                    error: error.messege
                }
            )
        }
    }
}
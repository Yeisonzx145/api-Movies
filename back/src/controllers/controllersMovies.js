const serviceMovies = require("../services/movies/serviceMovies")

module.exports = {
    getMovie : async (req,res)=>{
        try {
            const respnse = await serviceMovies.GetMovies()
            res.status(200).json(respnse)
        } catch (error) {
            res.status(500).json(
                {
                    error: error.messege
                }
            )
        }
    },

    postMovie : async (req, res) =>{
        try {
            const {title, year, director, duration,rate, poster} = req.body
            const response = await serviceMovies.createMovie({title, year, director, duration, rate, poster})
            res.status(201).json(response)
        } catch (error) {
            res.status(500).json({error: error.messege})
        }
    },

    getById : async (req,res)=>{
        try {
            const {id} = req.params

            const response = await serviceMovies.byId(id)

            res.status(200).json(response)

        } catch (error) {
            res.status(500).json({error:error.messege})            
        }
    }
}
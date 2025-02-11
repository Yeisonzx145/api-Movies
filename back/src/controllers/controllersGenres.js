const serviceGenre = require("../services/genre/serviceGenre")
module.exports= {
    getGenre : async (req,res)=>{
        try {
            const response = await serviceGenre.serviceGetGenre()
            res.status(200).json(response)
        } catch (error) {
            
        }
    }
}
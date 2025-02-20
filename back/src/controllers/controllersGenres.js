const serviceGenre = require("../services/genre/serviceGenre")
module.exports= {
    getGenre : async (req,res)=>{
        try {
            const response = await serviceGenre.serviceGetGenre()
            res.status(200).json(response)
        } catch (error) {
            
        }
    },
    postGenre : async ( req, res ) => {
        try {
            const {typeGenre} = req.body

            const response = await serviceGenre.createGenre({typeGenre})

            res.status(201).json(response)

        } catch (error) {
            res.status(500).json({error: error.messege})
        }
    },
    getByName : async (req, res)=>{
        try {
            const {name} = req.params
            console.log(name);
            
            const response = await serviceGenre.byNameGenre(name);

            res.status(200).json(response)

        } catch (error) {
            res.status(500).json({errror:error.messege})
        }
    }
}
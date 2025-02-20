const {Router} = require("express")
const controllersMovies = require("../controllers/controllersMovies")
const validationMovie = require("../middleware/validacionMovie")

const moviesRouters = Router();

moviesRouters.get("/",controllersMovies.getMovie)
moviesRouters.post("/", validationMovie, controllersMovies.postMovie)


module.exports = moviesRouters;
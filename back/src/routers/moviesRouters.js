const {Router} = require("express")
const validationMovie = require("../middleware/validacionMovie")
const validateId = require("../middleware/validateId")
const controllersMovies = require("../controllers/controllersMovies")

const moviesRouters = Router();

moviesRouters.get("/",controllersMovies.getMovie)
moviesRouters.post("/", validationMovie, controllersMovies.postMovie)
moviesRouters.get("/:id", validateId, controllersMovies.getById)

module.exports = moviesRouters;
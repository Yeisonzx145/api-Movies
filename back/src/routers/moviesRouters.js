const {Router} = require("express")
const controllersMovies = require("../controllers/controllersMovies")
const moviesRouters = Router();

moviesRouters.get("/",controllersMovies.getMovie)


module.exports = moviesRouters;
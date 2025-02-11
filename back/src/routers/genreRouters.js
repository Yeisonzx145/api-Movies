const {Router} = require("express");
const controllersGenres = require("../controllers/controllersGenres");

const genreRouters = Router();

genreRouters.get("/",controllersGenres.getGenre)

module.exports = genreRouters;
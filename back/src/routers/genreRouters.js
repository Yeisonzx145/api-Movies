const {Router} = require("express");
const controllersGenres = require("../controllers/controllersGenres");

const genreRouters = Router();

genreRouters.get("/", controllersGenres.getGenre)
genreRouters.post("/", controllersGenres.postGenre)
genreRouters.get("/:name", controllersGenres.getByName)


module.exports = genreRouters;
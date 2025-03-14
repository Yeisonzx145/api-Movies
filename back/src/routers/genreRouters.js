const {Router} = require("express");
const controllersGenres = require("../controllers/controllersGenres");
const { validationIds } = require("../middleware/validateId");

const genreRouters = Router();

genreRouters.get("/", controllersGenres.getGenre)
genreRouters.post("/", controllersGenres.postGenre)
genreRouters.put("/putMovie", validationIds, controllersGenres.putMovieToGenre)
genreRouters.get("/:name", controllersGenres.getByName)


module.exports = genreRouters;
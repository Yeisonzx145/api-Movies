const {Router} = require("express")
const moviesRouters = require("./moviesRouters")
const genreRouters = require("./genreRouters")

const router = Router();

router.use("/movies",moviesRouters)
router.use("/genre",genreRouters)

module.exports = router;
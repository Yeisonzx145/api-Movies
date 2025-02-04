const {Router} = require("express")
const moviesRouters = require("./moviesRouters")

const router = Router();

router.use("/movies",moviesRouters)

module.exports = router;
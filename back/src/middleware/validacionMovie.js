const validationMovie = (req, res, next) => {
    const {title, year, director, duration, poster} = req.body

    if(!title || !year || !director || !duration || !poster){
        return res.status(400).json({
            error: "Faltan datos"
        })
    };
    
    if(year < 1895){
        return res.status(400).json({
            error: "El años es menor al requerido"
        })
    }


    next();
        
    
}

module.exports = validationMovie;
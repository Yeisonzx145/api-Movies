const validationMovie = (req, res, next) => {
    const {title, year, director, duration,rate, poster} = req.body

    if(!title || !year || !director || !duration || !rate || !poster){
        return res.status(400).json({
            error: "Faltan datos"
        })
    };
    
    if(rate < 1){
        return res.status(400).json({
            error: "El rate debe ser mayor a 1 "
        })
    }

    if(rate > 10){
        return res.status(400).json({
            error: "El rate debe ser menor o igual a 10"
        })
    }


    if(year < 1895){
        return res.status(400).json({
            error: "El años es menor al requerido"
        })
    }


    next();
        
    
}

module.exports = validationMovie;
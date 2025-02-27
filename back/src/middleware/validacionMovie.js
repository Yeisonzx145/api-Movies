const validationMovie = (req, res, next) => {
    const {title, year, director, duration,rate, poster} = req.body

    if(!title || !year || !director || !duration || !rate || !poster){

        next({message:"Faltan datos", statusCode: 400})
    };
    
    if(rate < 1){
        next({message:"El rate debe ser mayor a 1", statusCode: 400})
    }

    if(rate > 10){
        next({message:"El rate debe ser menor o igual a 10", statusCode: 400})
    }


    if(year < 1895){
        next({message:"El años es menor al requerido", statusCode: 400})
    }

    next();    
}

module.exports = validationMovie;
const mongoose = require("mongoose");

const URL = "mongodb+srv://gonzjson:PxaswqkSsw4Eajsw@prueba1.dc3q9.mongodb.net/moviesApi?retryWrites=true&w=majority&appName=Prueba1";

const dbCon = async ()=>{
    await mongoose.connect(URL)
}

module.exports = dbCon;
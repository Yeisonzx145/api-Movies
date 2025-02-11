const mongoose = require("mongoose");

const dbCon = async ()=>{
    await mongoose.connect("mongodb+srv://gonzjson:PxaswqkSsw4Eajsw@prueba1.dc3q9.mongodb.net/moviesApi?retryWrites=true&w=majority&appName=Prueba1")
}

module.exports = dbCon;
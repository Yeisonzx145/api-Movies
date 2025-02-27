const express = require("express");
const router = require("../src/routers/")
const cors = require("cors");
const morgan = require("morgan")

const server = express();

server.use(morgan('dev'));
server.use(cors());
server.use(express.json())

server.use(router)

server.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).json({error: err.message})
})

module.exports = server;
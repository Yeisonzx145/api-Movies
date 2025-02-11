const express = require("express");
const router = require("../src/routers/")
const cors = require("cors");
const morgan = require("morgan")

const server = express();

server.use(morgan('dev'));
server.use(cors());
server.use(express.json())

server.use(router)

module.exports = server;
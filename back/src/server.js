const express = require("express");
const router = require("../src/routers/")

const server = express();

server.use(router)

module.exports = server;
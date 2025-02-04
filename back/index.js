const server = require("./src/server")

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`El servidor escuchando en el puerto ${PORT}`);
    
});
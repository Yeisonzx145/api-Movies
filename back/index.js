const dbCon = require("./src/config/dbCon");
const server = require("./src/server")

const PORT = 3000;

dbCon().then((res)=>{
    
    server.listen(PORT,()=>{
        console.log(`El servidor escuchando en el puerto ${PORT}`);
        
    });

})

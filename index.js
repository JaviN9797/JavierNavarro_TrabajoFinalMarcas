//INICIALIZACIÓN DEL SERVIDOR

const express= require("express");
const app= express(); 
const port= 9550; //puerto a elección donde se alojará

app.use(express.json());

app.listen(port, ()=>{
    console.log("Servidor abierto")
}
)

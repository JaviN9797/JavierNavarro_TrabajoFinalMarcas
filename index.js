//INICIALIZACIÓN DEL SERVIDOR

const express= require("express");
const app= express(); 
const port= 8080; //puerto a elección donde se alojará

app.use(express.json());
app.listen(port, ()=>{
    console.log("Servidor abierto")
}
)



let videojuegos = [
  {
    id: 1,
    nombre: "The Binding of Isaac: Rebirth",
    genero: "Roguelike",
    empresa: "Nicalis",
    compositor: "Danny Baranowsky",
    precio: 14.99,
    tieneGoty: false,
    esIndie: true,
  },
]
app.get("/videojuegos", (req, res) => {
    res.status(200).json(videojuegos)
})


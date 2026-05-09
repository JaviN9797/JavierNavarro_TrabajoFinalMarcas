//INICIALIZACIÓN DEL SERVIDOR

const express= require("express");
const app= express(); 
const port= 8080; //puerto a elección donde se alojará

app.use(express.json());
app.listen(port, ()=>{  //forma de conectar la api con el puerto correspondiente
    console.log("Servidor abierto")
}
)


//integración de los 10 videojuegos con sus respectivos atributos.
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

  {
    id: 2,
    nombre: "The Last of Us",
    genero: "Survival horror",
    empresa: "Naughty Dog",
    compositor: "Gustavo Santaolalla",
    precio: 59.99,
    tieneGoty: true,
    esIndie: false,
  },

    {
    id: 3,
    nombre: "The Legend of Zelda: Tears of the Kingdom",
    genero: "Acción-Aventura",
    empresa: "Nintendo",
    compositor: "Manaka Kataoka",
    precio: 69.99,
    tieneGoty: false,
    esIndie: false,
  },

  {
    id: 4,
    nombre: "Clair Obscur: Expedition 33",
    genero: "RPG por turnos",
    empresa: "Sandfall Interactive",
    compositor: "Lorien Testard",
    precio: 49.99,
    tieneGoty: true,
    esIndie: true,
  },

    {
    id: 5,
    nombre: "Cocoon",
    genero: "Puzzle",
    empresa: "Geometric Interactive",
    compositor: "Jakob Schmid",
    precio: 24.99,
    tieneGoty: false,
    esIndie: true,
  },

  {
 id: 6,
    nombre: "Sekiro: Shadows Die Twice",
    genero: "Acción",
    empresa: "FromSoftware",
    compositor: "Yuka Kitamura",
    precio: 59.99,
    tieneGoty: true,
    esIndie: false,

  },

  {
    id: 7,
    nombre: "Hollow Knight",
    genero: "Metroidvania",
    empresa: "Team Cherry",
    compositor: "Christopher Larkin",
    precio: 14.99,
    tieneGoty: false,
    esIndie: true,
  },

   {
    id: 8,
    nombre: "Baldur's Gate 3",
    genero: "RPG",
    empresa: "Larian Studios",
    compositor: "Borislav Slavov",
    precio: 59.99,
    tieneGoty: true,
    esIndie: false,
  },

   {
    id: 9,
    nombre: "DOOM Eternal",
    genero: "Shooter",
    empresa: "id Software",
    compositor: "Mick Gordon",
    precio: 39.99,
    tieneGoty: false,
    esIndie: false,
  },

 {
    id: 10,
    nombre: "Super Mario Odyssey",
    genero: "Plataformas",
    empresa: "Nintendo",
    compositor: "Naoto Kubo",
    precio: 59.99,
    tieneGoty: false,
    esIndie: false,
  },

]

//añadido el endopoint de videojuegos para mostrar toda la información disponible
app.get("/videojuegos", (req, res) => {
    res.status(200).json(videojuegos)
})


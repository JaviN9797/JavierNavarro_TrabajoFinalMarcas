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

//recurso secundario para incluir las plataformas en las que están disponibles cada videojuego
//vincula cada videojuego con la plataforma mediante videojuego_id
let plataformas = [

  // isaac
  { id: 1, nombre: "PC", videojuego_id: 1 },
  { id: 2, nombre: "PlayStation 4", videojuego_id: 1 },
  { id: 3, nombre: "Playstation 5", videojuego_id: 1 },
  { id: 4, nombre: "Nintendo Switch", videojuego_id: 1 },
  { id: 5, nombre: "Xbox One", videojuego_id: 1 },
  { id: 6, nombre: "Xbox Series X/S", videojuego_id: 1 },
 
  // the last of us
  { id: 7, nombre: "PlayStation 3", videojuego_id: 2 },
  { id: 8, nombre: "PlayStation 4", videojuego_id: 2 },
  { id: 9, nombre: "PlayStation 5", videojuego_id: 2 },
  { id: 10, nombre: "PC", videojuego_id: 2 },
 
  // tears of the kingdom
  { id: 11, nombre: "Nintendo Switch", videojuego_id: 3 },
  { id: 12, nombre: "Nintendo Switch 2", videojuego_id: 3 },
 
  // expedition 33
  { id: 13, nombre: "PC", videojuego_id: 4 },
  { id: 14, nombre: "PlayStation 5", videojuego_id: 4 },
  { id: 15, nombre: "Xbox Series X/S", videojuego_id: 4 },
 
  // cocoon
  { id: 16, nombre: "PC", videojuego_id: 5 },
  { id: 17, nombre: "Nintendo Switch", videojuego_id: 5 },
  { id: 18, nombre: "PlayStation 4", videojuego_id: 5 },
  { id: 19, nombre: "Xbox One", videojuego_id: 5 },
 
  // sekiro 
  { id: 20, nombre: "PC", videojuego_id: 6 },
  { id: 21, nombre: "PlayStation 4", videojuego_id: 6 },
  { id: 22, nombre: "Xbox One", videojuego_id: 6 },
 
  // hollow knight
  { id: 23, nombre: "PC", videojuego_id: 7 },
  { id: 24, nombre: "Nintendo Switch", videojuego_id: 7 },
  { id: 25, nombre: "PlayStation 4", videojuego_id: 7 },
  { id: 26, nombre: "Xbox One", videojuego_id: 7 },
 
  // baldurs
  { id: 27, nombre: "PC", videojuego_id: 8 },
  { id: 28, nombre: "PlayStation 5", videojuego_id: 8 },
  { id: 29, nombre: "Xbox Series X/S", videojuego_id: 8 },
 
  // doom
  { id: 30, nombre: "PC", videojuego_id: 9 },
  { id: 31, nombre: "PlayStation 4", videojuego_id: 9 },
  { id: 32, nombre: "Xbox One", videojuego_id: 9 },
  { id: 33, nombre: "Nintendo Switch", videojuego_id: 9 },
 
  // super mario 
  { id: 34, nombre: "Nintendo Switch", videojuego_id: 10 },
];

//añadido el endopoint de videojuegos para mostrar toda la información disponible
app.get("/videojuegos", (req, res) => {
    res.status(200).json(videojuegos)
})



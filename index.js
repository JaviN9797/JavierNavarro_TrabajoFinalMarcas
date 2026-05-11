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


//**ENDPOINTS recurso principal**/

//añadido el endpoint principal para mostrar toda la información disponible
app.get("/", (req,res) => {
    return res.json(videojuegos)
})


//GET para obtener un juego por su id
app.get("/id/:id", (req, res) => {
    let id = parseInt(req.params.id) //para transformar el string en un int
    let juego = videojuegos.find((v) => v.id === id) //busca en el array de videojuegos el que coincida en el id
 
    if (!juego) { //salta el error si ponemos un valor fuera del 1 al 10 en este caso
        return res.status(404).json({ error: "No hay ningún videojuego con ese id" })
    }
 
    return res.json(juego) 
})

//GET para obtener un videojuego por su nombre
app.get("/nombre/:nombre", (req, res) => {
    let nombre = req.params.nombre
    let juego = videojuegos.find((v) => v.nombre.toLowerCase() === nombre.toLowerCase()) //para buscar en el array transformando todo a minusculas

    if (!juego) {
        return res.status(404).json({ error: "No hay ningún videojuego con ese nombre"})
    }

    return res.json(juego)
})

//POST para crear un nuevo videojuego

app.post("/videojuegos", (req, res) => {
    let { nombre, genero, empresa, compositor, precio, tieneGoty, esIndie } = req.body //campos esperados
 
    if (!nombre || !genero || !empresa || !compositor || precio === undefined || tieneGoty === undefined ||esIndie=== undefined) {
        return res.status(400).json({ error: "Falta alguno de los campos"})
    } //en caso de que falte alguno de los campos, saltará error
 
    if (typeof precio !== "number" || precio < 0) {
        return res.status(400).json({ error: "El precio tiene que ser un número positivo" }) //precio positivo
    }
 
    if (typeof tieneGoty !== "boolean" || typeof esIndie !== "boolean") { //valor de los booleanos(true o false)
        return res.status(400).json({ error: "tieneGoty o esIndie tiene que ser true o false" })
    }
 
    let nuevoVideojuego = { //crea el objeto nuevo 
        id: videojuegos[videojuegos.length - 1].id + 1,
        nombre: nombre,
        genero: genero,
        empresa: empresa,
        compositor: compositor,
        precio: precio,
        tieneGoty: tieneGoty,
        esIndie: esIndie
    }
 
    videojuegos.push(nuevoVideojuego) //haciendo push se añade al final del array original (los 10 que ya teníamos)
    return res.status(201).json(nuevoVideojuego) //el 201 significa que se crea correctamente
})


// PUT para modificar un videojuego ya creado

app.put("/videojuegos/:id", (req, res) => {
    let id = parseInt(req.params.id)
    let index = videojuegos.findIndex((v) => v.id === id) //busca en el array la posicion del videojuego por el id 

    if (index === -1) { //si el findindex devuelve -1 saltará el error
        return res.status(404).json({ error: "No se ha encontrado ningún videojuego con ese id" })
    }
    //por cada campo se comprueba si viene en el body, si viene lo actualiza
    if (req.body.nombre) videojuegos[index].nombre = req.body.nombre
    if (req.body.genero) videojuegos[index].genero = req.body.genero
    if (req.body.empresa) videojuegos[index].empresa = req.body.empresa
    if (req.body.compositor) videojuegos[index].compositor = req.body.compositor
    if (req.body.precio) videojuegos[index].precio = req.body.precio
    if (req.body.tieneGoty !== undefined) videojuegos[index].tieneGoty = req.body.tieneGoty
    if (req.body.esIndie !== undefined) videojuegos[index].esIndie = req.body.esIndie

    return res.json(videojuegos[index])
})




// DELETE para eliminar un videojuego

app.delete("/videojuegos/:id", (req, res) => {
    let id = parseInt(req.params.id)
    let index = videojuegos.findIndex((v) => v.id === id) //busca en el array la posicion del videojuego por el id 

    if (index === -1) {
        return res.status(404).json({ error: "No se ha encontrado ningún videojuego con ese id"})
    }

    videojuegos.splice(index, 1) //borra el elemento que coincida con el id. El 1 significa que borra solo un videojuego.
    return res.json({ mensaje: "Videojuego eliminado correctamente" })
})


//**ENDPOINTS recursos secundarios**

//GET para obtener todas las plataformas

app.get("/plataformas", (req, res) => {
    return res.json(plataformas)
})


// GET para obtener las plataformas de un videojuego especifico

app.get("/:id/plataformas", (req, res) => {
    let id = parseInt(req.params.id)
    let juego = videojuegos.find((v) => v.id === id) //busca juego por id
 
    if (!juego) {
        return res.status(404).json({ error: "No se encontró ningún videojuego con ese " +id })
    }
 
    let plataformasDelJuego = plataformas.filter((p) => p.videojuego_id === id) //busca donde existe el videojuego_id
    return res.json(plataformasDelJuego)
})
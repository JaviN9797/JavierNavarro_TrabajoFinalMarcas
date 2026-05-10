# JavierNavarro_TrabajoFinalMarcas
Trabajo final de la asignatura de lenguajes de marcas, que se crea una API

La api se centrará en una serie de títulos de videojuegos, que bajo mi punto de vista son de los mejores de la última década.

La información básica de cada uno está compuesta por atributos como nombre, género, empresa, precio, etc. Y se compone de un recurso secundario de en que plataforma se encuentra vinculado a su id.

Lo he establecido en el puerto 8080 por lo que se inicializa de forma local con localhost:8080

Como he establecido el array de videojuegos para ir añadiendo los títulos con sus respectivos atributos. 


## Para acceder a los datos principales y de forma completa.
**localhost:8080**

## Para acceder a un juego por su id 
Se buscaria con por su id (en el id ponemos el número que quieras buscar del 1 al 10)  
**localhost:8080/id/5**


## Para acceder a un juego por su nombre
Para buscar por el nombre de un videojuego en concreto, no distingue entre minuscula y mayuscula por lo que se puede escribir como quieras  
**localhost:8080/nombre/Cocoon**

## Para crear un nuevo objeto (videojuego)
Para crearlo deberemos insertar todos los campos disponibles (nombre, genero, empresa, compositor, precio, tieneGoty y esIndie)  
Se crea mediante POST desde la app de Bruno  

En la url pondremos: http://localhost:8080/videojuegos  
Ejemplo práctico de nuevo POST:  
{
    "nombre": "Elden Ring",
    "genero": "RPG",
    "empresa": "FromSoftware",
    "compositor": "Yuka Kitamura",
    "precio": 59.99,
    "tieneGoty": true,
    "esIndie": false
}

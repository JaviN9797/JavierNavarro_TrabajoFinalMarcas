# JavierNavarro_TrabajoFinalMarcas
Trabajo final de la asignatura de lenguajes de marcas, que se crea una API

La api se centrará en una serie de títulos de videojuegos, que bajo mi punto de vista son de los mejores de la última década.

La información básica de cada uno está compuesta por atributos como nombre, género, empresa, precio, etc. Y se compone de un recurso secundario de en que plataforma se encuentra vinculado a su id.

Lo he establecido en el puerto 8080 por lo que se inicializa de forma local con localhost:8080

Como he establecido el array de videojuegos para ir añadiendo los títulos con sus respectivos atributos. 


## Para acceder a los datos principales y de forma completa.
GET **http://localhost:8080**

## Para acceder a un juego por su id 
Se buscaria con por su id (en el id ponemos el número que quieras buscar del 1 al 10)  
GET **http://localhost:8080/id/5**


## Para acceder a un juego por su nombre
Para buscar por el nombre de un videojuego en concreto, no distingue entre minuscula y mayuscula por lo que se puede escribir como quieras  
GET **http://localhost:8080/nombre/Cocoon**

## Para crear un nuevo objeto (videojuego)
Para crearlo deberemos insertar todos los campos disponibles (nombre, genero, empresa, compositor, precio, tieneGoty y esIndie)  
Se crea mediante POST desde la app de Bruno  

En la url pondremos: POST **http://localhost:8080/videojuegos**  
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

## Para modificar algún dato del videojuego
Para modificarlo podremos poner cualquier campo que queramos y se sustituirá. El campo mas modificable es el del precio o si tieneGoty.  
Para crearlo lo haremos mediante PUT en la app de Bruno.  

En la url pondremos: PUT **http://localhost:8080/videojuegos/6** (para modificar el videojuego con el id=6)  
Y como ejemplo simplemente pondremos el valor del campo precio:  

{
    "precio": 34.95
}

## Para borrar un videojuego al completo

Se borrará completamente el videojuego con todos sus atributos simplemente pondremos en la url:  
DEL **http://localhost:8080/videojuegos/10**  
Esto eliminará el videojuego con el id: 10

## Para obtener todas las plataformas

Obtendremos toda la información de las plataformas disponibles de toda nuestra colección de videojuegos  
GET **http://localhost:8080/plataformas**

## Para obtener la plataforma por id

Tendremos la información de las plataformas disponibles de un videojuego en concreto, lo buscaremos por su id.  
GET **http://localhost:8080/8/plataformas**

## Para postear una nueva plataforma a un videojuego existente

Añadiremos una plataforma nueva a un videojuego ya creado posteriormente  
POST **http://localhost:8080/plataformas**

Ejemplo práctico:  
{
    "nombre": "Nintendo Switch 2",
    "videojuego_id": 1
}  
Añadiría la plataforma de switch 2 al isaac.

## Para eliminar una plataforma de un videojuego existente

Eliminaremos una plataforma en concreta filtrando por el id de la propia plataforma.  
Por ejemplo para eliminar la plataforma de playstation 5 del the last of us, se haría de la siguiente forma:  
DELETE **http://localhost:8080/plataformas/9**

## Para filtrar por nombres de forma parcial

Buscaremos escribiendo parte que contenga el nombre del videojuego que queramos buscar  
POST **http://localhost:8080/buscarNombre?q=zelda**
Después de ?q= escribiremos el texto que queramos buscar  

## Para filtrar por rango de precios  

Estableceremos el precio minimo y el precio máximo para buscar el rango de precio que queramos  
Por ejemplo si queremos buscar un precio entre 0 y 20€ se pondría de la siguiente forma:  
**http://localhost:8080/buscarPrecio?min=0&max=20**
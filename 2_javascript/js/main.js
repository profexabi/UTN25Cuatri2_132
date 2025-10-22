/*=====================
    JSON
=======================

JSON (JavaScript Object Notation) es un formato ligero de interacambio de datos que es el standard para la comunicacion entre aplicaciones en la web

Es basicamente un string, texto plano, pero con una forma de estructurar esa informacion igual a los objetos de JavaScript. Pero aunque su sintaxis proviene de JavaScript, es independiente del lenguaje.

JSON es un formato de texto que representa datos estructurados basados en 2 estructuras fundamentales

    1. Coleccion de pares nombre/valor: Equivalente a un objeto en JS
    2. Lista ordenada de valores: Equivalente a un array en JavaScript

- Es textual y facil de leer por humanos
- Es ligerisimo (ocupa poco espacio)
- Es facil de parsear y generar -> JSON.parse() y JSON.stringify()
- Es independiente del lenguaje aunque su sintaxis se base en los objetos de JS


Reglas de sintaxis:

    - Los datos estan en pares nombre:valor ("clave" : "valor")
    - Los datos estan separados por comas
    - Las llaves {} representan objetos
    - Los corchetes [] representa arrays
    - Las comillas dobles son obligatorias para nombres de propiedades y strings

Tipos de datos en JSON

    - Strings: "texto"
    - Numeros: 42 o 3.14
    - Booleanos: true o false
    - Objects: { "clave" : "valor" }
    - Arrays: ["valor1", "valor2"]


Usos comunes de JSON:

1. Comunicacion cliente servidor:
- JSON es el formato estandar para APIs Rest (ver explicacion en el README)*/

// Ejemplo 1: Envio de datos (POST) al servidor
fetch("localhost:3000/api/usuarios", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nombre: "Miguel",
        ocupacion: "Docente y programador web"
    })
});

// Ejemplo 2: Recibir datos del servidor
fetch("localhost:3000/api/usuarios")
    .then(response => response.json) // Convertimos el texto plano JSON en objetos JS
    .then(data => console.log(data));


// Ejemplo 3: Almacenamiento local
let usuario = {
    nombre: "Emiliano",
    edad: 29
};

// Guardar en sesion
sessionStorage.setItem("usuario", JSON.stringify(usuario));

// Leer 
let usuarioGuardado = JSON.parse(sessionStorage.getItem("usuario"));



// Ejemplo 4: Configuraciones, muchas herramientas usan JSON para configuraciones como package.json en Node.js



/*==================================================
    Herramientas de JavaScript para asincronia
====================================================

1. Callbacks: Funciones que se pasan como argumento para ejecutarse despues de completar una operacion

    - Ventajas: Flexibilidad
    - Desventajas: Callback Hell


2. Promises: Objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. Sus estados son:

    - pendiente (pending)
    - completada (fuilfilled)
    - rechazada (rejected)

Recordemos, fetch() no es una promesa, es una API Web que devuelve una promesa (objeto Promise)
Una Promise es un objeto que representa el resultado FUTURO de una operacion asincrona




=====================
    fetch()
=====================

fetch() es una API Web, es decir, una funcion incorporada en los navegadores mdoernos que permite realizar peticiones HTTP y HTTPS de forma asincrona utilizando promesas

Forma parte de las WEB APIs proporcionadas por el navegador, no del lenguaje JavaScript en si y reemplaza al viejo y complejo XMLHttpRequest

Caracteristicas:

    - fetch() devuelve un objeto Promise que se resuelve con un objeto Reponse
    - Usa el estandar HTTP con metods como GET, POST, PUT, DELETE, etc
    - Funciona muy bien con asnyc/await
    - Es mas limpia y moderna que XMLHttpRequest
    - Soporta CORS, headers, envio de JSON y mas


Sintaxis basica:

    fetch(url, options)
        .then(response => {
            //respuesta cruda del servidor
        })
        .catch(error => {
            // error de red o fallo total    
        })

    Parametros:
        - url: string, la URL a la que queremos hacer la solicitud HTTP
        - options: (opcional), objeto que especifica configuracion adicional como metodo, cabeceras, cuerpo, etc


    // Ejemplo 1: Envio de datos (POST) al servidor
    fetch("localhost:3000/api/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: "Miguel",
            ocupacion: "Docente y programador web"
        })
    });



============================
    El objeto Response
============================

La promesa (objeto Promise) que devuelve fetch() se resuelve con un objeto Response que tiene:

    - .ok -> booleano (true si el status esta entre 200 y 299)
    - .status -> Codigo HTTP (200, 404, 500)
    - .statusText -> Texto del estado ("OK", "Not Found")
    - .headers -> Cabeceras de la respuesta
    - .json(), .text() para leer el contenido de la respuesta


Ojo con el manejo de errores!
    - fetch solo rechaza la promesa en errores de red reales (no hay internet o el servidor esta caido)

    - no rechaza en codigos de error HTTP (404 o 500), por eso debemos a mayores, revisar el response.ok
*/

// TO DO, continuar desde async/await
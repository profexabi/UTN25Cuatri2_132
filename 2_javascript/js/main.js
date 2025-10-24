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
/*
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
*/

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




============================
    async / await
============================

async / await es basicamente azucar sintactico o "syntactic sugar", es decir, una forma mas sencilla, legible y entendible de trabajar con promesas.

Nos permite escribir codigo asincrono con una sintaxis similar al codigo sincrono. El objetivo es hacer de la asincronia, mas legible, estructurada y facil de depurar

Ventajas de asnyc/await vs Promesas con .then()

    - Mas legible y secuencial
    - Mejor manejo de errores con try/catch
    - Ideal para flujos largos y complejos de asincronia


La palabra clave async se usa para declarar una funcion asincrona, la cual siempre devuelve una Promesa, aunque el valor retornado no lo sea
*/

async function saludar() {
    return `Holis`;
}

saludar().then(console.log); // Holis

/* Aunque saludar devuelve un string, con async devuelve una Promise que se resuelve con este valor

    - await va a esperar que fetch() devuelve una Promesa resuelta antes de continuar

    - El codigo despues de await no se ejecuta hasta que la Promesa sea resuelta (fulfilled) o rechazada (rejected)
*/

// Declaramos la funcion como async para poder usar await
async function obtenerDatos() {

    // Con await esperamos a que esto termine
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    // Esperamos a que se produzca la conversion
    const datos = await respuesta.json();

    // Finalmente, con los datos traidos de la url y la conversion, lo mostramos por consola
    console.log(datos); 
}

/*
// Ejecutamos promesas en paralelo
async function cargarTodo() {
    const [usuarios, posts, albums, comentarios, fotos, todos] = await Promise.all([
        obtenerUsuarios(),
        obtenerPosts(),
        obtenerAlbums(),
        obtenerComentarios(),
        obtenerFotos(),
        obtenerTodos()
    ]);
    console.log(usuarios, posts, albums, comentarios, fotos, todos);
}

// TO DO. Ejercicio sugerido, intenten encadenar todas estas promesas que nos proporciona https://jsonplaceholder.typicode.com/
*/



/*======================
    try...catch
========================

try...catch es una estructura de control utilizada para capturar y manejar errores que ocurren durante la ejecucion de bloques de codigo. Esta tecnica forma parte del manejo de excepciones en JavaScript

Su objetivo es evitar que errores inesperados detengan la ejecucion del programa y en su lugar permitir manejar dichos errores de forma controlada

Sintaxis:
    try {
        // Bloque de codigo que puede lanzar errores

    } catch (error) {
        // Manejo del error

    } finally {
        // Opcional, codigo que se ejecuta siempre (con o sin error) 
    }


Que errores puede capturar try...catch?
try...catch captura errores en tiempo de ejecucion (runtime)

    - Acceso a variables no definidas
    - Llamadas a funciones inexistentes
    - Errores lanzados con throw
    - Problemas en funciones JSON.parse(), etc
    - No captura errores de sintaxis porque estos impiden que el codigo siquiera se ejecute


Como funciona internamente?

1. El bloque try se ejecuta normalmente

2. Si ocurre un error dentro del try, se detiene inmediatamente la ejecucion y pasa al bloque catch

3. El objeto de error (por convencion: error, err, e) contiene informacion como:
    - .name: tipo de error(TypeError, ReferenceError, etc)
    - .message: Mensaje descriptivo
    - .stack: Pila de llamadas (stack trace)

4. El bloque finally, si existe, siempre se ejecuta, exista un error o no


Por que no usar try...catch en exceso?

    - Puede ocultar errores reales si no se maneja correctamente
    - Tiene costo de rendimiento, especialmente en bucles
    - Es mejor usarlo en secciones del codigo donde hay riesgo real de error (I/O, parsing, red, etc)


Buenas practicas

- No atrapemos errores que no podemos manejar
- Usemos try...catch donde esperamos errores (parseo de datos, llamadas a APIs)
- finally para cerrar recursos, limpiar o terminar tareas (conexiones, indicadores de carga, ble)
- Siempre proporcionemos informacion util en el error con (e.message)


Resumen
- try:      Ejecuta codigo que puede lanzar errores
- catch:    Captura y maneja el error
- finally:  Codigo que se ejecuta siempre con o sin error
- throw:    Lanza errores manualmente
- error:    Objeto con informacion del error
- uso ideal:   I/P, llamadas a red, parsing, validacion, async/await


Errores vs Excepciones en JavaScript

    - Ambos son manejados de forma similar con bloques try...catch
    
    - El termino "excepcion" se usa para referirse a errores que se pueden capturar y manejar, 
    
    -"error" puede implicar una situacion mas grave, donde el motor de JS genera un objeto Error que ocurre durante el tiempo de ejecucion, que puede ser capturado con try...catch. Este objeto contienen propiedades como message y stack que proporcionan detalles sobre el problema

    - Un error generalmente indica una infraccion de las especificaciones del lenguaje, como un TypeError o un ReferenceError, lo que significa que el codigo no sigue las reglas del lenguaje

    - Una excepcion se lanza en situaciones donde el codigo esta sintacticamente correcto, pero ocurre un problema inesperado durante la ejecucion, como intentar acceder a una respuesta de fetch() antes de que este completa
*/

try {
    const resultado = 10 / 0; 
    console.log(resultado); // Infinity

    throw new Error("Error personalizado! No podes dividir entre 0");

} catch (err) {
    console.log("Ocurrio un error: ", err.message);

} finally {
    console.log("Esto se ejecuta siempre");
}


// Ejemplo de error en JavaScript
// Un error es un problema que ocurre durante la ejecucion de un programa y hace que algo falle
// const a = 5;
// a = 10; // Uncaught TypeError: Assignment to constant variable.

// Este tipo de error detiene la ejecucion normal del programa si no se maneja. JS lanza un objeto de tipo Error automaticamente


// Ejemplo de excepcion en JavaScript
// Una excepcion es el evento que ocurre cuando se lanza un error (o se lanza manualmente)
// Un error genera una excepcion y esta SI puede ser capturada y manejada con try..catch

try {
    const a = 5;
    a = 10; // Esto lanza una excepcion

} catch (error) {
    console.error("Ocurrio una excepcion:", error.message);
}

// El error fue que intentamos reasignar una constante
// La excepcion fue el "evento" que permitio capturar ese error y evitar que la app colapsara

/*======================================================
    Tipos comunes de errores que generan excepciones
========================================================

- ReferenceError:   Variable no definida                console.log(x) sin definir la x
- TypeError:        Operar con tipos incorrecto         null.toString()
- SyntaxError:      Error de sintaxis (no atrapable en runtime normalmente) if({
- RangeError:       Valor fuera del rango permitido     new Array(-1)
- EvalError:        Problema con eval()                 
- URIError          Problema con funciones URI               



No siempre las excepciones vienen de errores del motor de JavaScript. Nosotros tambien podemos lanzar excepciones intencionalmente con throw
*/

function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero!");
    }
    return a / b;
}

try {
    console.log(dividir(10, 0));

} catch (error) {
    console.error("Excepcion atrapada!:", error.message);
}

// console.log(dividir(5, 0));


try {
    // Codigo que podria fallar
    JSON.parse("esto no es JSON");

} catch (error) {
    // Se ejecuta si hay una expcecion
    console.error("Excepcion capturada: ", error.message);

} finally {
    // Este bloque se ejecuta siempre haya o no haya error
    console.log("Finalizando operacion");
}

// finally nos interesa para cerar conexiones, liberar recursos, detener timers, etc


/*===========================
    Resumen de diferencias
============================

Error:      
    - Fallo que ocurre en tiempo de ejecucion
    - Lo genera el motor de JavaScript
    - No se puede manejar directamente
    - Si no se captura, el programa se detiene
    - ReferenceError: x is not defined


Excepcion:  
    - Un evento que se lanza cuando hay un error (o manualmente)
    - Tanto el motor como nosotros con throw
    - Si, con try..catch
    - Tambien se detiene si no se captura
    - throw new Error("Este es mi error personalizado")
*/
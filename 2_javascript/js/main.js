/*=========================
    Callbacks
===========================

Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan despues de que ocurra algun evento o se complete alguna operacion*/


// Ejemplo 1
function saludar(nombre, callback) {
    console.log(`Hola ${nombre}`);
    // Podemos realizar otras cosas

    callback(); // Aca invocamos la funcion que pasamos como argumento
}

function despedirse() {
    console.log("Chau, nos vemos");
}

saludar("Emiliano", despedirse); 
// Hola Emiliano
// Chau, nos vemos


// Ejemplo 2
function procesarDatos(datos, callback) {
    console.log("Procesando datos...");

    let resultado = datos.toUpperCase();

    callback(resultado); // Le pasamos a la funcion los datos en mayuscula como argumento
}

procesarDatos("hola mundo", (resultado) => {
    console.log("Resultado: ", resultado);
});


// Ejemplo 3 con un temporizador
setTimeout(() => {
    console.log("Esto se ejecuta despues de 1 segundo");
}, 1000);


/* Caracteristicas principales

1. Funciones de primera clase

En JavaScript, las funciones son tratadas como ciudadanos de primera clase "first class citizens", lo que significa que pueden ser:

    - Asignadas a variables
    - Pasadas como argumentos
    - Retornadas desde otras funciones
*/

// Asignar funcion a variable
let miCallback = function() {
    console.log("Callback ejecutado");
}

// Pasamos como argumento
function ejecutarCallback(callback) {
    callback(); // Invocamos la funcion que consologuea "Callback ejecutado"
}

ejecutarCallback(miCallback); // Callback ejecutado


// Callback sincrono -> Traba el hilo de ejecucion principal hasta que terminen las 50.000 vueltas de bucle

function procesoPesado(callback) {
    console.log("Iniciando proceso...");

    // Simulamos un procesamiento pesado
    for (let i = 0; i < 50000; i++) {
        //console.log(`Iteracion`)
    }

    callback(); // Aca se imprime "Proceso asincrono completado"
}


procesoPesado(function() {
    console.log("Proceso asincrono completado");
});


console.log("Esto se ejecuta despues del callback sincrono"); // Despues de 50.000 iteraciones, se imprime esto




// Callback asincrono -> No detiene el hilo de ejecucion principal
function procesoAsincrono(callback) {
    console.log("Iniciando proceso asincrono...");

    setTimeout(function() {
        callback()
    }, 2000);
}


procesoAsincrono(function() {
    console.log("Proceso asincrono de 2segs completado");
});

console.log("Esto se ejecuta inmediatamente");


/*========================================
    Casos de usos comunes de callbacks
=========================================*/

// 1. Temporizadores o timers
// setTimeout (se ejecuta una sola vez)
setTimeout(() => {
    console.log("Esto se ejecuta despues de 3 segundos");
}, 3000);


// setInterval (se ejecuta repetidamente)
let contador = 0;
let intervalo = setInterval(function() {
    contador++;

    console.log(`Contador: ${contador}`);
    
    if(contador === 5) {
        clearInterval(intervalo);
    }
}, 500);



// 2. Eventos del DOM
let botonCoso = document.getElementById("holis");

botonCoso.addEventListener("click", function(event) {
    console.log("Boton clickeado", event.target);
});



// 3. Operaciones con arrays
let numeros = [1, 2, 3, 4, 5];

// forEach
numeros.forEach(function(numero, indice) {
    console.log(`Indice: ${indice}, valor: ${numero}`);
});

// map
let duplicados = numeros.map(function(numero) {
    return numero * 2;
});

console.log(duplicados);


// filter
let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(pares);


// 4. Peticiones HTTP -> Ver abajo los ejemplos con la api fetch()


// 5. Lectura de archivos con Node.js -> Ver despues de JavaScript VIII


/* Una de los problemas que vamos a tener con los callbacks son:

- Callback hell: Un anidamiento excesivo que dificulta la lectura

- Flujo de control: Dificil de seguir con operaciones complejas

- Manejo de errores: Complicado con callbacks anidados



/////////////////////////
    Callback Hell
/////////////////////////

Ocurre cuando tenemos muchas funciones anidadas dentro de otras, especialmente al hacer tareas asincronicas. JavaScript maneja opreaciones asincronicas con callbacks: funciones que se ejecutan despues de que otra funcion termina

El codigo se vuelve dificil de leer, dificil de mantener y facil de romper.

Si no lo manejamos bien, terminamos con una esctructura asi:

Ejemplo de Hadouken de Ryu o Pyramid of Doom
https://blog.da2k.com.br/uploads/2015/03/hadouken.jpg
*/

// Cada setTimeout depende del anterior. El codigo funciona pero es feo y poco manejable
setTimeout(() => {
    console.log("Paso 1");

    setTimeout(() => {
        console.log("Paso 2");

        setTimeout(() => {
            console.log("Paso 3");
            
            setTimeout(() => {
                console.log("Paso 4");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);


/*Como solucionamos el callback hell y ordenamos el codigo asincrono?
Vamos a hacer que una cosa se ejecute ordenadamente despues de otra usando alternativas modernas a los callbacks:
    - Promises
    - async/await (Promises modernas)

    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/


// Vamos a consumir una API Rest con Promises, encadenando ordenadamente la operacion asincronica

// 1. Primero, traigo los datos JSON de esta URL
fetch("https://jsonplaceholder.typicode.com/users")

    // 2. Una vez obtenidos estos datos en crud, los transformamos a objetos JS
    .then(response => response.json())

    // 3. Ahora con estos datos ya convertidos, los imprimo por consola
    .then(data => console.table(data))

    // 4. En caso de saltar algun error en alguno de estos pasos previos, lo capturamos y lo mostramos aca
    .catch(error => console.error(error));


// Vamos a consumir otra API Rest con async/await, una sintaxis mas moderna para trabajar con promesas
async function obtenerDatos() {
    try {

        
        // 1. Traigo el choclo en texto plano JSON y DETENGO la ejecucion del codigo hasta que esto se resuelva o de error

        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        // Aca imprimimos la promesa
        // let response = await (fetch("https://jsonplaceholder.typicode.com/posts")).json();
        console.log(response);
        
        // 2. Obtenido el choclo JSON, lo transformo a objetos JavaScript
        let data = await response.json();
        
        // 3. Ya con el JSON parseado a Objectos JS, lo puedo manipular 
        console.table(data);
        
        
        // 4. En caso de haber error, salta y se captura acá, para mostrarse por consola
    } catch(error) {
        console.error(error);
    }
}


// obtenerDatos();



// TO DO: Ejercicio sugerido, rehacer el parcial, en lugar de usar un array de objetos simulado "mockeado" vamos a consumir los datos de un API Rest



/*=======================
    Destructuring
=========================

El destructuring (desestructuracion) es una sintaxis que permite extraer valores de arrays o propiedades de objetos y asignarlos a varaibles de forma concisa

Es una forma de descomponer estructuras de datos como arrays y objetos en variables individuales sin necesidad de acceder manualmente a cada elemento o propiedades


    - Mejora la legibilidad del codigo
    - Facilita el acceso rapido a datos de estructuras complejas
    - Reduce la verbosidad (menos lineas para obtener lo mismo)
    - Destructuring nos permite escribri codigo mas limpio, mas corto y mas claro
*/

// Sin destructuring
let nums = [1, 2, 3];
let uno = nums[0];
let dos = nums[1];

// Con destructuring
let [primero, segundo] = nums;
console.log(primero, segundo);


// Destructuring en parametros de funcion
function saludame({nombre, edad}) {
    console.log(`Holis ${nombre}, tenes ${edad}`);
}

let persona = { nombre: "Mirtha", edad: 98 };

// En la consola del navegador, si no desplegamos es copia, y desplegando es referencia
console.log(persona);

persona.edad = 105;
persona.ciudad = "CABA";


persona = {...persona, mundiales: 22 };
console.log(persona);
saludame(persona);

console.log({...persona});


// Destructuring de arrays con valores omitidos
let [prim, ,terc] = [10, 20, 30];
console.log(prim, terc);


// Rest operator con destructuring en arrays
let [a, ...resto] = [1, 2, 3, 4];
console.log(a);
console.log(resto);


// Rest operator con destructuring en objectos
let { nom, ...otros } = { nom: "Emiliano", edad: 29, pais: "Argentina" };
console.log(nom);
console.log(otros);


/*=====================
    Spread Operator
=======================

El Spread Operator o operador de propagacion -> ...
es una sintaxis introducida en ES6 que permite descomponer elementos iterables como arrays, strings y objetos en elementos individuales

Su principal funcion es copiar, combinar o expandir estructuras de datos de manera eficiente
*/

// (Shallow Copy) Copia superficial de arrays. 
// Cambios en copia no afectan al original. Pero en objetos anidados, estos si se referencian
let original = [1, 2, 3];
let copia = [...original];

console.log(copia);


// Concatenacion de arrays. Mas eficiente que concat
let arr1 = [1, 2];
let arr2 = [3, 4];

let combinado = [...arr1, ...arr2];
console.log(combinado);


// Convierte strings en arrays sin usar split('')
let string = "Holis";
let caracteres = [...string];
console.log(caracteres);


// Combinacion de objetos
let defaults = { tema: "oscuro", fontSize: 14 };
let userSettings = { fontSize: 18 };
let finalConfig = {...defaults, ...userSettings};
console.log(finalConfig);



/*=========================
    Funciones anidadas
===========================

Una funcion anidada es simplemente una funcion definida detro de otra funcion.
Es decir, una funcion interna que vive en el ambito lexico (scope) de una funcion externa

Una funcion anidada es una funcion que:
    - Se declara dentro de otra funcion
    - Tiene acceso a todas las varaibles y parametros de su funcion externa
    - Puede ser utilizada para organizar mejor el codigo, modularizar la logica o crear clouse


Las funciones anidadas heredan el entorno lexico (lexical scope) de la funcion que las contiene. Esto significa que pueden accesder a las varaibles de la funcion externa, pero no al reves.*/

function saluditos(nombre) {
    function construirMensaje() { // construirMensaje esta anidada dentro de saludar()
        return `Hola holita, ${nombre}`; // Tiene acceso a nombre aunque la variable no esta definida atroden
    }

    return construirMensaje();
}

console.log(saluditos("Francisco"));


function externa() {
    let mensaje = "Holis desde fuera";

    function interna() {
        console.log(mensaje);
    }

    interna();
}

externa();

/*
Usos comunes de funciones anidadas:

1. Organizacion del codigo: En lugar de escribir una gran funcion, se pueden definir sub-funciones internas para modularizar la logica*/
function procesarTexto(texto) {

    function limpiar(t) {
        return t.trim().toLowerCase();
    }

    function contarPalabras(t) {
        return t.split(/\s+/).length;
    }

    let limpio = limpiar(texto);

    return (contarPalabras(limpio));
}

console.log(procesarTexto("    Hola    holita vecinito         como va?    "));



// 2. Funciones "helper" privadas. Las funciones internas no son accesibles desde fuera, por lo que simulamos privacidad

function crearUsuario(nombre) {
    
    function validarNombre(n) {
        return typeof n === "string" && n.length > 2;
    }

    if(!validarNombre) {
        throw new Error("Nombre no valido");
    }

    return nombre;
}


// 3. Generacion de closures: Las funciones anidadas pueden cerrar sobre variables de la funcion externa creando closures

function contadorr() { 
    let cuenta = 0;

    return function() { // contadorr retorna una funcion interna anonima
        cuenta++;
        return cuenta; // Esta funcion recuerda la variable cuenta aunque contadorr ya termino su ejecucion
    }
}

let incrementar = contadorr();
// Cada vez que llamamos a contadorr, estamos invocando la misma closure que mantiene su propio estado interno
console.log(incrementar()); 
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());


/* En resumen

- Las funciones anidadas son funciones declaradas dentro de las otras fucniones
- Acceden a variables de su funcion externa (scope lexico)
- Las funciones internas son privadas al bloque donde se definenn
- Usos comunes: Modularizacion, privacidad, closures, logica auxiliar interna (sub-funciones)



=======================
    Closures
=======================

Una closure es una funcion que recuerda el entorno (scope) en el que fue creada, incluso despues de que ese entorno haya finalizado su ejecucion.

Por tanto, una funcion interna puede acceder a variables de su funcion externa incluso despues de que esta haya terminado de ejecutarse

Cuando creamos una funcion dentro de otra funcion, se crea una closure. La funcion interna captura las variables de su entorno externo y mantiene una referencia a ellas.


Que nos permiten las closures?

    - Recordar valores sin usar variables globales
    - Crear funciones privadas
    - Hacer el codigo mas limpio y modular


JavaScript Closures

Los closures en JavaScript tienen múltiples usos prácticos y son fundamentales en el desarrollo de aplicaciones. Uno de sus usos más comunes es la creación de contadores y acumuladores privados, donde una función interna puede mantener y modificar un estado entre llamadas, como en el caso de un contador que incrementa una variable local incluso después de que la función externa haya finalizado su ejecución  Este patrón permite encapsular datos y funciones en un ámbito privado, lo que es esencial para implementar el patrón de diseño módulo en JavaScript 

En resumen, los closures permiten mantener estado entre llamadas, encapsular datos, crear funciones personalizadas y facilitar el manejo de contextos en operaciones asíncronas y eventos, lo que los convierte en una herramienta poderosa y ampliamente utilizada en JavaScript 
*/


// TO DO: Mencionar web APIs y HOF
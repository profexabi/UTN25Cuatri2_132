/* ====================================
    Objetos Globales en JavaScript
=======================================

El entorno de ejecucion es el lugar donde podemos correr JavaScript. Podemos correrlo en el navegador y en Node.js

El navegador es el Entorno de Ejecucion de JavaScript. Es decir, es donde ejecutamos JavaScript y nos proporciona un motor para interpretar codigo JavaScript, tambien nos proporciona herramientas y facilidades para introducir codigo, depurar, etc

El entorno de ejecucion de JavaScript que veremos despues de frontend. Va a ser Node.js, Express.js sera el framework que trabaja sobre este nuevo entorno de ejecucion.


Los entornos de ejecucion, sea el navegador o sea Node.js, nos proporcionan Objetos Globales.
Estos son objetos que estan disponibles en todo el entorno de ejecucion sin necesidad de importarlos o declararlos explicitamente. Varian depende del entorno de ejecucion.
Pero la idea central de los objetos globales es facilitarnos el acceso a ciertas funciones o valores predeterminados



============================================
    Objetos globales en el navegador
============================================

En el entorno del navegador, los objetos globales incluyen todos los objetos estandar de JavaScript (como Array, String, Object, etc), asi como todo un conjunto de objetos especificos para la interaccion con la pagina web y su entorno


El objeto global principal en el entorno del navegador es window.
Este objeto representa toda la ventana del navegador y actua como el contenedor global para todas las variables, funciones definidos en el ambito global y estna automaticamente disponibles como propiedaes del objeto window.


Objetos y metodos importantes del objeto window

- document: Representa el DOM de la pagina web actual, permitiendo el acceso y la manipulacion de elementos HTML. El DOM es la representacion en memoria de una pagina HTML y gracias al DOM, podremos manipular la pagina web con JavaScript


- alert(), prompt(), confirm(): Metodos que permiten mostrar dialogos al usuario y recoger input


- setTimeout() y setInterval(): Metodos para programar la ejecucion de codigo despues de un tiempo (setTimeout) o en intervalos regulares (setInterval)

- location: Proporciona informacion sobre la URL actual de la pagina y permite redireccionar a otras URL

- navigator: Proporciona informacion sobre el navegador, com la version, el agente de usuario y la geolocalizacion

- console: Proporciona acceso a la consola del navegador para mostrar mensajes de depuracion

- history: Proporciona acceso al historia de navegacion del navegador


===================================
    Objetos globales en Node.js
===================================

En Node.js, el entorno de ejecucion no tiene un objeto window como en los navegadores. En su lugar existen otros objetos globales diseñados para trabajar con servidores, archivos y otros aspectos del Sistema Operativo

- process: Proporciona información y control sobre el proceso de ejecución de Node.js

- __dirname y __filename: Variables globales que contienen la ruta al directorio actual y al archivo actual, respectivamente.

- setTimeout y setInterval: Igual que en los navegadores, estos métodos permiten programar la ejecución de funciones de manera
asincrónica.

- console: Igual que en el navegador, proporciona acceso a la consola para depuracion y mensajes
*/


// Probando setTimeout y setInterval
// setTimeout(() => console.log("Holi despues de 1 segundo"), 1000);
// setInterval(() => console.log("Holi despues de 1 segundo"), 1000);


// location: Proporciona informacion sobre la URL actual de la pagina y permite redireccionar a otras URL
console.log(window.location.href);


// navigator: Proporciona informacion sobre el navegador, com la version, el agente de usuario y la geolocalizacion
console.log(navigator.userAgent);
console.log(navigator);


// console: Proporciona acceso a la consola del navegador para mostrar mensajes de depuracion
console.log(console);


// history: Proporciona acceso al historia de navegacion del navegador
console.log(history);



/* ===================================
    Almacenamiento de datos en JS
======================================

JavaScript proporciona varios tipos de estructuras para almacenar datos

- Variables simples:    valores unicos como numeros, strings
- Objetos:              para representar datos complejos con propiedades
- Arrays:               Para almacenar una serie de elementos, idealmente del mismo tipo
- Arrays de objetos:    Para manejar listas de elementos complejos que contienen multiples propiedades


Cuando usar arrays?
    - Para listas ordenadas de elementos individuales (lista nombres)


Cuando usar objetos?
    - Cuando deseamos representar una entidad unica con multiples atributos
    - Cuando sabemos que no habra multiples instancias o copias de estos datos en la aplicacion
    - Cuando necesitamos acceder a propiedades especificas mediante sus nombre


Cuando usar arrays de objetos?
    - Cuando necesitamos almacenar multiples instancias de una entidad o estructura de datos
    - Cuando planeamos realizar operaciones sobre una lista de elementos, como iteraciones, filtrados o agrupaciones
    - Si necesitamos aplicar metodos de arrays como map, filter, reduce, find, etc
    - Ejs: listado de usuarios, inventario de productos, historial de registros, etc



========================================================
    Iteracion en arrays, objetos y arrays de objetos
========================================================

Iteracion de arrays: Arrays como una lista ordenada de elementos accesibles por indice

Bucle for clasico

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    - Maximo control, podemos usar break y continue. Muy eficiente
    - Como desventajas, mas verboso (mas difil de leer)


forEach()

    array.forEach((elemento, índice, arrayOriginal) => {
        console.log(elemento, índice);
    });

    - Sintaxis limpia, no necesita contador
    - Como desventajas, es mas lento y no se puede romper el bucle (break, continue)


map()
    const nuevosValores = array.map(elemento => elemento * 2);

    - Transforma cada elemento
    - Retorna un nuevo array con los resultados


filter()
    const filtrados = array.filter(elemento => elemento > 10);

    - Selecciona los elementos que cumplan una condicion
    - Retorna un nuevo array con los elementos filtrados


reduce()
    const suma = array.reduce((total, elemento) => total + elemento, 0);

    - Reduce el array a un unico valor
    - Retorna el valor acumulado


find() y findIndex()
    const encontrado = array.find(elemento => elemento.id === 123);
    const indice = array.findIndex(elemento => elemento.id === 123);

    - Buscan el primer elemento que cumpla una condicion
    - Retorna el elemento -> find o indice -> findIndex (o devuelve undefined o -1 si no lo encuentra)



for...of

    for (const elemento of array) {
        console.log(elemento);
        if (elemento === "stop") {
            break;
        }
    }

    - Proporciona una sintaxis limpia, permite break y continue
    - No provee indice automatico



some() y every() 
    const algunoCumple = array.some(elemento => elemento > 0);
    const todosCumplen = array.every(elemento => elemento > 0);

    - Verifica si alguno o todos cumplen una condicion
    - Retorna un booleano
*/

////////////////////////
// Bucle for clasico //

// Sumando elementos
let numeros = [1, 2, 3, 4, 5];
let suma = 0;

for(let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
console.log(suma);

// Buscar elemento
const frutas = ["manzana", "banana", "naranja"];

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].startsWith("ban")) {
        console.log(frutas[i]);
        break;
    }
}


// Filtrando objetos
// Lista ordenada de elementos del mismo tipo
const productos = [
    { id: 1, nombre: "laptop", precio: 1000, cantidad: 1, completada: true },
    { id: 2, nombre: "mouse", precio: 20, cantidad: 2, completada: false },
    { id: 3, nombre: "teclado", precio: 50, cantidad: 3, completada: true },
    { id: 4, nombre: "tarjeta grafica", precio: 200, cantidad: 2, completada: true },
    { id: 5, nombre: "monitor", precio: 100, cantidad: 4, completada: false },
    { id: 6, nombre: "pendrive", precio: 10, cantidad: 2, completada: false }
];

console.log(productos.length); // 6
console.log(productos[2]); // {id: 3, nombre: 'teclado', precio: 50}
console.log(productos[1].precio); // 20

let productosCaros = [];

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > 100) {
        productosCaros.push(productos[i]);
    }
}

console.log(productosCaros);


////////////////////
// Bucle forEach //

// Imprimos elementos
let colores = ["rojo", "verde", "azul"];

colores.forEach(color => console.log(color));


// Modificar array externo
// let numeros = [1, 2, 3, 4, 5];
let numerosDobles = [];

numeros.forEach(num => numerosDobles.push(num * 2));
console.log(numerosDobles);


// Actualizar propiedades
let estudiantes = [
    { nombre: "Gricel", nota: 10},
    { nombre: "Francisco", nota: 9},
    { nombre: "Mirko", nota: 8},
    { nombre: "Xabi", nota: 2},
    { nombre: "Leon", nota: 7},
    { nombre: "Miguel", nota: 3}
];

console.log(estudiantes);

/* Recordemos como se agregaban y eliminaban propiedades en un objeto

persona.preferencias = "Backend"; // Agregamos la propiedad preferencias y un valor

delete persona.ciudad; // Eliminamos la propiedad ciudad
*/

// Crearemos la propiedad aprobado para todos los alumnos que superen el 4
estudiantes.forEach(estud => {

    estud.aprobado = estud.nota >= 4;

    /* Otra manera de resolver la instruccion de arriba

    if (estud.nota >= 4) {
        estud.aprobado = true;
    } else {
        estud.aprobado = false;
    }
    */
});


//////////
// map //

// Crear un array de cuadrados
// let numeros = [1, 2, 3, 4, 5];

let cuadrados = numeros.map(num => num * num);
console.log(cuadrados);


// Convertimos a string
let edades = [23, 20, 33, 30, 25];
let edadesStr = edades.map(edad => `Tengo ${edad} años`); // "tengo " + edad + " años"
console.log(edadesStr);


/* Extraer propiedades

    let estudiantes = [
        { nombre: "Gricel", nota: 10},
        { nombre: "Francisco", nota: 9},
        { nombre: "Mirko", nota: 8},
        { nombre: "Xabi", nota: 2},
        { nombre: "Leon", nota: 7},
        { nombre: "Miguel", nota: 3}
    ];*/

let estudNombre = estudiantes.map(estud => estud.nombre);
console.log(estudNombre);


/* No usemos para nombres de variables caracteres especiales del idioma

    - let año -> Nada recomendable
    - let anio -> La mejor opcion

    - Idealmente usaremos nombres en ingles 
*/



/////////////
// filter //

// Documentacion de filter de mdn para chusmear https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// Filtrar numeros pares
let masNumeros = [1, 2, 3, 4, 5, 6, 7, 8];

let numerosPares = masNumeros.filter(num => num % 2 === 0);
console.log(numerosPares);


// Filtrar palabras largas
let palabras = ["hola", "holiiita", "veciniiiiito", "chau"];

let palabrasLargas = palabras.filter(palabra => palabra.length > 4);
console.log(palabrasLargas);


/* Filtrar por notas
    let estudiantes = [
        { nombre: "Gricel", nota: 10},
        { nombre: "Francisco", nota: 9},
        { nombre: "Mirko", nota: 8},
        { nombre: "Xabi", nota: 2},
        { nombre: "Leon", nota: 7},
        { nombre: "Miguel", nota: 3}
*/

// const predicate = 2 > 1; 
// Recordemos que en las funciones flecha con un solo parametro, los parentesis son opcionales
let altosEstudiantes = estudiantes.filter((estudiante) => estudiante.nota > 7);
console.log(altosEstudiantes);


/* Filtrar multiples condiciones

const productos = [
    { id: 1, nombre: "laptop", precio: 1000, cantidad: 1, completada: true },
    { id: 2, nombre: "mouse", precio: 20, cantidad: 2, completada: false },
    { id: 3, nombre: "teclado", precio: 50, cantidad: 3, completada: true },
    { id: 4, nombre: "tarjeta grafica", precio: 200, cantidad: 2, completada: true },
    { id: 5, nombre: "monitor", precio: 100, cantidad: 4, completada: false },
    { id: 6, nombre: "pendrive", precio: 10, cantidad: 2, completada: false }
];
*/
// Filtramos aquellos productos que esten completados y que tengan > 1 cantidad en stock
let checkProductos = productos.filter(prod => prod.completada && prod.cantidad > 1);
console.log(checkProductos);



/////////////
// reduce //

/* Muy similar a la primer operacion del for clasico (total viene a reemplazar a suma)

    let numeros = [1, 2, 3, 4, 5];
    let suma = 0;

    for(let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    console.log(suma);*/

// Sumar elementos
const decenas = [10, 20, 30, 40, 50];

const sumaDecenas = decenas.reduce((total, num) => total + num, 0);
console.log(sumaDecenas);


// Sumar propiedades con reduce
const ventasRopa = [
    { producto: "Remera", cantidad: 3, precio: 25},
    { producto: "Pantalon", cantidad: 2, precio: 40},
    { producto: "Zapatos", cantidad: 1, precio: 80}
];

// cantidad x precio
let precioTotal = ventasRopa.reduce((total, item) => total + (item.cantidad * item.precio), '0');
console.log(precioTotal);


///////////
// find //

// Buscamos numero mayor a 10
const numerosRandom = [5, 12, 8, 130, 44];

// con find encontramos el primer elemento del array mayor a 10
let mayorADiez = numerosRandom.find(num => num > 10);
console.log(mayorADiez); // 12

// con findIndex buscamos el indice del primer numero mayor a 100
let mayorACien = numerosRandom.findIndex(num => num > 100);
console.log(mayorACien); // Devuelve 3 porque 130 esta en el indice 3 del array


// Buscamos objeto por propiedad
const usuariosWeb = [
    {id: 1, nombre: "Gricel", activo: true, rol: "user"},
    {id: 2, nombre: "Francisco", activo: false, rol: "admin"},
    {id: 3, nombre: "Leon", activo: true, rol: "user"}
];

// Buscamos el primer usuario activo
let usuarioActivo = usuariosWeb.find(user => user.activo);
console.log(usuarioActivo);



///////////////
// for...of //

// Iteramos simbolos con posibilidad de break
const simbolos = ['€', '$', '¥', '£'];

for (let simbolo of simbolos) {
    if (simbolo === "¥") {
        break;
    }
    console.log(simbolo);
}


// Iteramos objetos
const empleados = [
    { nombre: "Jonathan", salario: 3000 },
    { nombre: "Mirko", salario: 3500 },
    { nombre: "Emiliano", salario: 4000 }
];

// Filtramos el empleado que gane mas de 3500
for (let empleado of empleados) {
    if (empleado.salario > 3500) {
        console.log(`${empleado.nombre} gana altos morlacos`);
        break;
    }
}



///////////////////
// some y every //

const listaNums = [1, 3, 5, 7, 8];

// Verificamos si hay numeros pares
let hayPar = listaNums.some(num => num % 2 === 0);
console.log(hayPar);


// Verificamos si son todos positivos
let todosPositivos = listaNums.every(num => num > 0);
console.log(todosPositivos);

/* Preguntamos si hay algun usuario admin

const usuariosWeb = [
    {id: 1, nombre: "Gricel", activo: true, rol: "user"},
    {id: 2, nombre: "Francisco", activo: false, rol: "admin"},
    {id: 3, nombre: "Leon", activo: true, rol: "user"}
];
*/

let hayAdmin = usuariosWeb.some(usuario => usuario.rol === "admin");
console.log(hayAdmin);


/*===========================
    Iteracion en objetos
=============================

- Objetos como una coleccion de pares clave-valor
- Acceso a propiedades y modificacion de vaores

    - for...in
    - Object.keys(), Object.values(), Object.entries() */


const estudiante = { nombre: "Adrian", edad: 21, curso: "Progra III"};

// Usamos for...in para iterar claves
for (let propiedad in estudiante) {
    console.log(`${propiedad}: ${estudiante[propiedad]}`);
    
}


// Usamos Object.keys() para obtener claves
const claves = Object.keys(estudiante);
console.log(claves);
claves.forEach(clave => console.log(clave));


// Usamos Object.values() para obtener valores
const valores = Object.values(estudiante);
console.log(valores);


// Object.entries() para obtener pares clave-valor
for (const [clave, valor] of Object.entries(estudiante)) {
    console.log(`${clave} : ${valor}`);
}




/*================================
    Comparacion de rendimiento
==================================

1. Bucles clasicos: (for, while, etc) son los mas rapidos para iteraciones simples

2. Metodos funcionales: (map, filter, etc) son mas lentos pero mas expresivos

3. for...of ofrece un buen equilibrio entre rendimiento y legibilidad


Recomendaciones de uso:

- Transformar un array:     map()
- Filtrar elementos:        filter()
- Reducir a un valor:       reduce()
- Buscar un elemento:       find() o findIndex()
- Necesitamos romper bucle: for y for...of
- Verificar condiciones:    some() y every()
*/


/* Ejercicio opcional de refuerzo: 
// Contar cuántas veces aparece una letra específica dentro de un array de caracteres.
const letras = ["a", "b", "c", "a", "d", "e", "a", "f", "b", "c", "g", "h", "a", "b"];
*/
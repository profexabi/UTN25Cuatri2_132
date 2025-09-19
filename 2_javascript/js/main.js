/* =======================
    Arrays y objetos
==========================
En JS los arrays y objetos son estructuras de datos fundamentales.
Los arrays se utilizan para almacenar una lista ORDENADA de elementos.
Los objetos son ideales para almacenar datos con propiedades clave-valor.


Un array es una lista ordenada de elementos, donde cada uno tiene una posicion o indice.
Los arrays pueden conteneer cualquier tipo de datos (numeros, strings, booleanos, otros arrays, objetos, funciones, etc)


Un objeto es una coleccion de pares clave-valor.
Las claves son cadenas que identifican cada valor, lo cual permite un acceso rapido y estructurado a los datos
Los objetos son utiles cuando deseamos representar una entidad con multiples propiedades.

Podemos acceder a un objeto a traves de 
    - notacion de punto:    objeto.propiedad
    - notacion de corchete: objeto["propiedad"]

Los objetos pueden tener metodos, que son funciones almacenadas en una propiedad


==================
    Comparacion
==================

Uso principal
    - Array: Lista ordenada de elementos
    - Objeto: Coleccion pares clave-valor


Acceso a datos:
    - Array: Por indice -> array[0]
    - Objeto: Por clave -> objeto.clave / objeto["clave"]

Metodos:
    - Array: push(), pop(), forEach()
    - Objetos: Metodos personalizados y funciones

Iteracion
    - Arrays: forEach(), map(), etc
    - Objetos: for...in, Object.key(), Object.values(), Object.entries()
*/

// Array en JavaScript
let frutas = ["pera", "banana", "pomelo"];
console.log(frutas[0]); // Accedemos a la primera posicion, notacion 0
console.log(frutas[2]); // Accedemos a la tercer posicion


// Creacion de un objeto literales
let persona = {
    nombre: "Miguel",
    edad: 23,
    ciudad: "Buenos Aires",
    presentacion: function() {
        // this hace referencia al objeto desde el cual se esta invocando el metodo
        console.log(`Hola! me llamo ${this.nombre} y soy de ${this.ciudad}`);
    }
};

console.log(persona);
console.table(persona);


console.log(persona.nombre); // Miguel
console.log(persona["ciudad"]); // Buenos Aires
persona.presentacion();

// Agregamos y eliminamos propiedades
persona.preferencias = "Backend";
delete persona.ciudad;



/* ======================================
    Metodos de strings en JavaScript
=======================================*/

// length: devuelve la longitud del string
console.log("Holis".length);

let agite = "Aguante JavaScript vieja!";
for (let i = 0; i < agite.length; i++) {
    // console.log(agite[i]);
}

// charAt: Devuelve el caracter en la posicion especificada
console.log("Holis".charAt(3));


// concat: Concatena strings
let agiteFinal = "No me importa nada";
console.log(agite.concat(" ", agiteFinal));


// includes: Devuelve true si el substring esta dentro del string
console.log("JavaScript".includes("Script")); // Ojo porque es case sensitive


// startsWith: Comprueba si el string comienza con el substring
console.log("Hola mundo".startsWith("hola")); // false, es case sensitive tambien


// endsWith: Comprueba si el string termina con el substring
console.log("Hola mundo".endsWith("mundo"));


// indexOf: Devuelve el indice de la PRIMERA aparicion en el substring
console.log("banana".indexOf("a"));


// lastIndexOf: Devuelve el indice de la ULTIMA aparicion del substring
console.log("banana".lastIndexOf("a"));


// replace: Reemplaza una parte del string
console.log(agite.replace("JavaScript", "Megadeth"));


// replaceAll: Reemplazar TODAS las apariciones
console.log("1, 2, 3". replaceAll(", ",";"));


// toLowerCase: Convierte a minusculas
console.log("AGUANTE JAVASCRIPT".toLowerCase());


// toUpperCase: Convierte a mayusculas
console.log("holu! uwu".toUpperCase());


// trim: Elimina espacios en blanco al principio y al final
console.log("            holu            ".trim());


// trimStart: Elimina espacios en blanco al principio
console.log("            holu            ".trimStart());


// trim: Elimina espacios en blanco al final
console.log("            holu            ".trimEnd());


// slice: Extrae parte del string
console.log("JavaScript".slice(0, 4));
console.log("JavaScript".slice(-3)); // slice tambien acepta negativo para los ultimos caracteres


// substring: Similar a slice, pero no acepta negativos
console.log("JavaScript".slice(4, 10));


// substr -> Deprecado


// split: Divide el string en un array
console.log("hola".split(""));
console.log("rojo, verde, azul".split(", "));


// repeat: repite el string
console.log("ji".repeat(3));


// match: devuelve coincidencias con una expresion regular (REGEX)
console.log("abc123".match(/[^0-9]/g)); // extrae los caracteres
console.log("abc123".match(/\d/g)); // extrae los numeros



/* ======================================
    Metodos de arrays en JavaScript
========================================*/

let caracteres = ["a", "b", "c", "d"];

// length: Devuelve la longitud del array
console.log(caracteres.length); // 4

for(let i = 0; i < caracteres.length; i++) {
    console.log(caracteres[i]);   
}


// push: Agrega un elemento al FINAL del array
let arr = [1, 2];
console.log(arr);
arr.push(3);


// pop: Elimina el ultimo elemento y lo devuelve
console.log(arr.pop());


// unshift: Agrega un elemento al inicio del array
arr.unshift(0);


// shift: Elimina el primer elemento y lo devuelve
console.log(arr.shift());


// concat: Concatena arrays
console.log(arr.concat([3, 4])); // No altera el array original
let arr2 = [3, 4];
let nuevoArr = arr.concat(arr2);
console.log(nuevoArr);


// join: Une los elementos en un string
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// https://www.w3schools.com/jsref/jsref_join.asp
let nuevoStr = [1, 2, 3].join("-");
console.log(nuevoStr);


// slice: Extrae una copia parcial del array
console.log(nuevoArr.slice(1, 3));


// splice: Modifica el array in situ, permite borrar y agregar
/* 
Guia referencia W3 Schools: https://www.w3schools.com/jsref/jsref_splice.asp

cincoNums.splice(1, 2, "dos"); 

- Primer parametro es la posicion en el array

- Segundo parametro (opcional) es el numero de elementos a ser eliminados en esa posicion 

    - podemos no eliminar nada, pondremos 0
    - podemos eliminar el elemento en esa posicion, pondremos 1
    - podemos eliminar dos elementos desde esa posicion, pondremos 2

- Tercer parametro (opcional), el nuevo elemento a ser añadido en esa posicion
*/
const cincoNums = [1, 2, 3, 4, 5];
console.log(cincoNums);
cincoNums.splice(1, 2, "dos"); 

// Ojo a la hora de realizar ciertas operaciones adentro de un console.log! -> splice y concat


// indexOf: Devuelve la PRIMERA posicion del elemento
console.log([1, 2, 3].indexOf(2)); // Devuelve 1, porque preguntamos por la posicion del elemento 2 en el array
// Nos indica, que el numero 2, esta en la posicion 1


// lastIndexOf: Devuelve la ULTIMA posicion del elemento
console.log([1, 2, 3, 2].lastIndexOf(2)); // 3, el ultimo numero 2 esta en la posicion 3
// En caso de no encontrar nada, devuelve -1

# UTN25Cuatri2_132 :rooster:

# JavaScript :notebook:

## Recursos clase
1. [CV Online](https://onlinegdb.com/VWixF9kY2)
    1. Colocar el contenido del documento
    2. Maquetar con flex
    3. Corregimos o eliminamos los espacios del box model

2. [Portfolio fullstack](https://www.onlinegdb.com/5MEjTtIRL)


---


## JavaScript V / Objetos, clases y objetos globales. Almacenamiento persistente, iteracion en arrays, iteracion en objetos e iteracion en arrays de objetos

```js

```

---


## JavaScript IV / Introduccion a arrays. Metodos de strings y arrays
```js
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

```

---


## JavaScript III / Scope y ambito, funciones, tipos de funciones, parametros y argumentos, funciones flecha
```js
/////////////////////////
// Variables globales //
let globalLet = "Hola";
const globalConst = "Mundo";
var globalVar = "!";


/* ======================
    Scope o Ambito
=========================

El scope o ambito se refiere al contexto en el cual las variables y funciones son accesibles y pueden ser referenciadas.


1. Global Scope (Ambito global)
- Las variables definidas FUERA de cualquier funcion o bloque tienen alcance global y son accesibles desde cualquier parte del codigo
- En un navegador, las variables global se adjuntan al objeto window


2. Local Scope o Function Scope (Ambito local o de funcion)
- Las variables declaradas DENTRO de una funcion solo son accesibles dentro de esa funcion. Estas variables tienen ambito local


3. Block Scope (Ambito de bloque)
- A partir de ES6, las variables declaradas con let y const tienen alcance de bloque, lo que significa que solo son accesibles dentro del bloque en que se declararon -> { } (dentro de un if, for, etc)
*/


// Global Scope
var soyVarGlobal = "Soy global";

function mostrarGlobal() {
    console.log(soyVarGlobal);
}

mostrarGlobal();

console.log(soyVarGlobal);



// Local Scope
function mostrarLocal() {
    var localVar = "Soy local";
    console.log(localVar);
}

mostrarLocal();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined



// Block Scope
if(true) {
    let bloqueLet = "Soy de bloque";
    console.log(bloqueLet);
}

// console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined



// Scope Chain o Cadena de Ambito
var varGlobal = "Soy global";

function externa() {
    var varExterna = "Soy externa";

    function interna() {
        var varInterna = "Soy interna";
        console.log(varGlobal);
        console.log(varExterna);
        console.log(varInterna);
    }

    interna();
    // console.log(varInterna); // Uncaught ReferenceError: varInterna is not defined
}

externa();


/* ==================================
    Function Scope vs Block Scope
=====================================

- Function Scope: Las variables declaradas con var tienen ambito de funcion. Por lo que si se declaran dentro de una funcion, no son accesibles fuera de esa funcion, pero NO estan limitadas por bloque

- Block Scope Las variables declaradas con let y const estan limitadas por el bloque en el que se declaran { }
*/

function scopeFunction() {
    if (true) {
        var funcionVar = "Soy var de funcion";
    }
    console.log(funcionVar);
}

scopeFunction();


function scopeBlock() {
    if (true) {
        let bloqueLet = "Soy de bloque";
        const bloqueConst = "Soy de bloque";
    }
    // console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined
    // console.log(bloqueConst); // Uncaught ReferenceError: bloqueConst is not defined
}

scopeBlock();



/*==========================
    Hoisting o Elevacion
============================

- Las declaraciones de variables y funciones en JavaScript se "mueven hacia arriba" de su contexto de ejecucion. Solo las declaraciones son elevadas, no las inicializaciones

- var:          Se elevan y se inicializacion con undefined

- let y const:  Se elevan pero NO se inicializacion, lo que lleva a un error si se accede antes de la declaracion
*/

console.log(elevadaVar);
var elevadaVar = "Soy una var elevada";
console.log(elevadaVar);


// console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy una let elevada";
console.log(elevadaLet);



/*===================================
    Diferencias var, let y const
=====================================

- var: Tiene ambito de funcion, por lo que si se declara dentro de la funcion actual, está disponible a lo largo de toda la funcion. Permite la redeclaracion y la reasignacion.

    - De ambito de funcion
    - Puede ser redeclarado y reasignado
    - Tiene elevacion a nivel de funcion, por lo que puede utilizarse antes de la declaracion

- let: Tiene ambito de bloque, por lo que si se declara dentro de un bloque como if, loop o function, solo esta disponible dentro de ese bloque -> {}. No permite la redeclaracion pero si la reasignacion

    - De ambito de bloque, es decir, limitado por sus { }
    - Se puede volver a reasignar el valor, pero no se puede volver a declarar
    - Tiene elevacion a nivel de bloque, por lo que no es accesible antes de la declaracion

- const:  Tiene ambito de bloque, pero a diferencia de let, prohibe la reasignacion y la redeclaracion

    - De ambito de bloque, es decir, limitado por sus { }
    - No puede volver a reasignar el valor ni tampoco volver a declarar
    - Tiene elevacion a nivel de bloque, por lo que no es accesible antes de la declaracion


- let y const se introdujeron en ES6 para mejorar el ambito de las variables y reducir la probabilidad de anulaciones accidentales de variables.

- Tanto let como const NO permiten la elevacion, mientras que var si

- const asegura que el valor de la variable permanece inmutable, mientras que let permite la reasignacion


Usaremos const para variables de solo lectura, como constantes u objetos inmutables
Usaremos let para variables que puedan cambiar su valor con el tiempo
No usaremos var, por su ambito de funcion y su elevacion, lo que puede dar lugar a conflictos y bugs
*/

const pi = 3.1416

let contador = 0;
contador++;
console.log(contador);


/////////////////
// Funciones //

function sumarDosYTres() {
    let resultado = 2 + 3;
    console.log(`El resultado es: ${resultado}`);
}

sumarDosYTres();


// Funcion con parametros
// Los parametros son los nombres de las variables que definimos en la declaracion de la funcion
function sumar(a, b) { 
    let resultado = a + b;
    console.log(`El resultado es: ${resultado}`);
}

sumar(5, 7); // Los argumentos son los valores que pasamos a la funcion cuando la llamamos



// Funciones que devuelven un valor
function multiplicar(a, b) {
    return a * b; // Las funciones pueden devolver un valor utilizando la palabra clave return
    
    let coso = "sarasa"; // nada se ejecuta despues de la instruccion return, termina la ejecucion del codigo
}

console.log(multiplicar(5, 5));


// Valores predeterminados para los parametros
function saludar(nombre = "maestro") {
    console.log("Hola " + nombre);
}

saludar();


// Pasando multiples argumentos
function sumarTres(a, b, c) {
    return a + b + c;
}

console.log(sumarTres(1, 2, 3)); //Pasaremos los argumentos en el mismo orden



/*=================================
    Tipos de functiones en JS
===================================

1. Funcion declarada / Named function o Basic function____________________
    
    Es la declaracion basica de JavaScript, usa la keyword function

    Se recomienda para funciones con nombre o cuando se necesite hoisting.
    Estas funcones se pueden elevar a la parte superior de su ambito. Por lo que podemos llamar a la funcion antes de ser declarada

    saluda();

    function saluda() {
        console.log("Hola mundo!");
    }



2. Funcion expresada / Function expression____________________

    Es la funcion que esta dentro de una variable

    Son utiles para controlar donde va a estar disponible la funcion o para cuando va a ser usada como argumento para otra funcion

    const saludame = function() {
        console.log("Que onda!");
    }

    saludame();



3. Funcion anonima / Anonymous function____________________

    No tiene nombre y se usan como callbacks generalmente

    setTimeout(function() {
        console.log("Soy una funcion anonima y asincronica!");
    }, 1000);


4. Funcion de metodos / Method function____________________
    
    Son las funciones definidas dentro de un objeto o clase

    const persona = {
        nombre: "Miguel",
        
        saludar() {
            console.log(`Hola! me llamo ${this.nombre}`);
        }
    }

    persona.saludar();


5. Expresion de funcion ejecutada inmediatamente/ IIFE - Immediately Invoked Function Expressions____________________

    (function() {
        console.log("Soy una funcion IIFE");
    }())



6. Funcion de flecha / Arrow function____________________

    Especialmente utiles para escribir funciones de una linea.

    const sumarFlecha = (a, b) => a + b;
    console.log(sumarFlecha(2, 3));


*/

// 1. Funcion declarada
saluda();

function saluda() {
    console.log("Hola mundo!");
}



// 2. Funcion expresada
const saludame = function() {
    console.log("Que onda!");
}

saludame();



// 3. Funcion anonima
setTimeout(function() {
    console.log("Soy una funcion anonima y asincronica!");
}, 1000);


// 4. Funcion de metodos
const persona = {
    nombre: "Miguel",
    
    saludar() {
        console.log(`Hola! me llamo ${this.nombre}`);
    }
}

persona.saludar();



// 5. IIFE
(function() {
    console.log("Soy una funcion IIFE");
}())



// 6. Funciones flecha

// 6.1 Funciones flecha sin parametros
const saludito = () => console.log("Hola holita vecinito");
saludito();


// 6.2 Funciones de flecha con un solo parametro, parentesis opcionales
const cuadrado = x => x * x;
console.log(cuadrado(5));


// 6.3 Funciones de flecha con varios parametros
const sumarFlecha = (a, b) => a + b;
console.log(sumarFlecha(2, 3));


// 6.4 Funciones de flecha con mas de una instruccion
// Si el cuerpo de la funcion tiene mas de una instruccion, necesitamos {} y la palabra return para devolver un valor
const saludarPersona = nombre => {
    const saludo = `Como le va, ${nombre}`;
    return saludo;
}

console.log(saludarPersona("Teo"));
```

---

## JavaScript II / Control de flujo, estructuras de control, condicionales y bucles I
```js
/* ======================
    Control de flujo
=========================
El control de flujo en JavaScript determina como se ejecutan las instrucciones de un programa.
Establecemos que partes del codigo se ejecutan y bajo que condiciones.
Entre los tipos de estructuras de control de flujo en JavaScript

Condicionales:      if, else if, else
Operadores logicos: &&, ||, !
Bucles:             for, while, do...while
Control de flujo:   break, continue
*/

/* ===================
    Condicionales
======================

if: Ejecutar un bloque de codigo si una condicion es verdadera

if(condicion) {
}
*/

let numero = 0;
if (numero > 0) {
    console.log("El numero es positivo");
    
} else if (numero < 0) {
    console.log("El numero es negativo");

} else {
    console.log("El numero es cero");
}



let edad = 20;
if (edad >= 18) {
    console.log("Sos mayor de edad");
    
} else if (edad < 18 && edad > 0) {
    console.log("Sos menor de edad");

} else {
    console.log("Edad invalida");
}



let hora = 14;
// Verificar si es mañana, tarde o noche
if (hora < 12) {
    console.log("Es de mañana");
    
} else {
    if (hora >= 12 && hora < 18) {
        console.log("Es de tarde");
        
    } else {
        console.log("Es de noche");
    }
}


/* ======================
    Operadores logicos
=========================

- AND &&:   Ambas condiciones deben ser verdaderas
- OR ||:    Al menos una condicion debe ser verdadera
- NOT !:    Niega el valor de una condicion. Es el operador de negacion logica
*/

let edad2 = 25;
let tieneLicencia = true;

if (edad2 >= 18 && tieneLicencia) {
    console.log("Podes manejar");
}

if (edad < 18 || !tieneLicencia) {
 console.log("No podes manejar");
}


/* ===========================
    Negacion logica basica
==============================

El valor ! invierte el valor booleano de una expresion. Si la expresion es true, se convierte en false y viceversa

El operador NOT !, nos permite verificar si una variable es falsy
En JavaScript, los valores "falsy" son aquellos que, cuando se evaluan en un CONTEXTO BOOLEANO, resultan en false.

Algunos ejemplos de falsy son: false, 0, "", null, undefined y NaN

Algunos ejemplos de truthy son: 
    - Los números distintos de cero (como -42, 3,14, infinito)
    - las cadenas no vacías (como «0», «false», «hello»)
    - los objetos (incluidos los objetos vacíos {}), los arrays (incluidas los arrays vacíos []
    - las funciones y las fechas
*/

let esVerdadero = true;
console.log(!esVerdadero);

let esFalso = false;
console.log(!esFalso);


let valor1 = 0;
let valor2 = "Hola";
let valor3 = [];

console.log(!valor1); // true (0 es falsy, asi que se convierte en true)
console.log(!valor2); // false 
console.log(!valor3); // false


// Ejemplo de toggle
let estado = true;

function alternarEstado() {
    estado = !estado;
    console.log("Nuevo estado: ", estado);
}

alternarEstado();
alternarEstado();
alternarEstado();


/* ===========================
    Operador ternario
==============================
Es una forma mas compacta de escribir una condicion if...else
*/

let edad3 = 20;

let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad";
console.log(mensaje);


let temperatura = 25;
let mensaje2;

mensaje2 = (temperatura > 25) ? "Hace calor" : "Hace frio";
console.log(mensaje2);



/* ===========================
    Bucles
==============================

// Bucle for, se usa cuando se conoce de antemano el numero de iteraciones

for (inicializacion; condicion; incremento) {
    // Codigo a ejecutar en cada iteracion
}


// Bucle while: ejecuta el bloque de codigo mientras la condicion sea verdadera

while (condicion) {
    //...
}


// Bucle do...while: similar a while, pero la condicion se evalua despues de ejecutar el bloque de codigo, garantizando que el codigo se ejecutara el menos una vez

do {
    //...
} while (condicion)
*/

// Bucle for simple
for (let i = 0; i < 5; i++) {

    console.log(`Iteracion: ${i}`);

}

// Bucles for anidados
for(let i = 0; i < 3; i++) {

    for(let j = 0; j < 3; j++) {
        
        console.log(`${i} - ${j}`);
    }

}


// Para practicar: ejercicio sugerido: Generen una tabla de multiplicar del 1 al 3


// Bucle while
let i = 0;

while (i < 5) {
    console.log(`Iteracion: ${i}`);
    i++;
}


// Bucle do...while
let j = 0;
do {
    console.log("Iteracion: " + j);
    j++;

} while ( j < 5);



/* ==============================
    Control de flujo avanzado
=================================

- break:    Se usa para salir inmediatamente de un bucle o una estructura de control

- continue: Se usa para saltar a la SIGUIENTE ITERACION, omitiendo el codigo restante dentro del bucle para esa iteracion
*/

for(let i = 0; i < 10; i++) {

    if (i === 5) {
        break; // Salimos del bucle cuando i es 5
    }

    console.log(`Iteracion con break: ${i}`);
}


for(let i = 0; i < 10; i++) {

    if (i % 2 === 0) {
        continue; // Salta las iteraciones en las que i es par
    }

    console.log(`Numero: ${i}`);
}



/* =================================
    Estructura de control Switch
====================================

Switch es otra estructura de control que permite evaluar una expresion y ejecutar el bloque de codigo correspondiente al caso que coincide

https://www.w3schools.com/js/js_switch.asp

switch (expresion) {

    case valor1:
        // Codigo a ejecutar si la expresion es igual a valor1
        break;

    case valor2:
        // Codigo a ejecutar si la expresion es igual a valor2
        break;


    case valor3:
        // Codigo a ejecutar si la expresion es igual a valor3
        break;

    default:
        // Codigo que se ejecuta si ninguno de los casos coincide
}
*/

/*
let preguntaUser = prompt("Escribi dia de la semana");
console.log(typeof preguntaUser);
*/

let teGustaJS = confirm("Te gusta JavaScript?");
console.log(teGustaJS);


let diaSemana = parseInt(prompt("Escribi dia de la semana"));


switch (diaSemana) {
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miercoles");
        break;


    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    default:
        console.log("Fin de semana");
}


// Ejercicio sugerido para practicar switch. Hacer una calculadora que reciba dos numeros y que pida que tipo de operacion quieren realizar
```

---

## JavaScript I / Conceptos elementales, sintaxis básica, variables, tipos de datos y operadores
JavaScript es un lenguaje de programación que utilizamos para crear páginas web interactivas. JavaScript puede hacer que las páginas respondan a las acciones del usuario y a cambios que ocurren en el documento, realizar cálculos, alterar elementos de forma dinámica, realizar operaciones personalizadas, etc.

```js
// Comentario de una sola linea

/* Comentario de
multiples
lineas
*/

/* La consola de JS es una herramienta de depuracion en el navegador web.
Permite ejecutar comandos en JavaScript, ver mensajes de registro y errores,  y hacer pruebas interactivas de codigo

La abrimos con F12 o boton derecho + Inspeccionar (pestaña consola)
*/

console.log("Hola mundo desde JavaScript");


/*======================= 
Variables en JavaScript
=========================

Almacenan datos que pueden ser reutilizados y modificados

- var: Declaracion historica pero con limitaciones como el hoisting. No recomendada

- let: Introducido en ES6 (ECMAScript 2015). Permite declarar variables que pueden cambiar y tien un alcance de bloque, lo que mejora el control sobre donde y cuando se puede acceder a la variable

- const: Introducido en ES6. Permite declarar variables que no se deben reasignar. El valor en un const puede ser modificado en caso de ser un objeto o un array, pero la referencia no puede cambiar 


===========================
Tipos de datos primitivos
===========================

- Numeros:      Valores numericos
- Cadenas:      Texto encerrado entre comillas simples '' y comillas dobles ""
- Booleanos:    true o false
- null:         Representa un valor intencionalmente vacio
- undefined:    Una variable que fue declarada pero no tiene valor
*/

let numero = 42;
let texto = "Hola";
let verdadero = true;
let vacio = null;
let indefinido;

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(vacio);
console.log(indefinido);



/* ========================
Operadores en JavaScript

https://www.w3schools.com/js/js_operators.asp
==========================*/

// Operadores aritmeticos
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


// Operadores de asignacion
let x = 10;
console.log(x);

x += 5; // x = x + 5
console.log(x);

x -= 2; // x = x - 2
console.log(x);


// Operadores de comparacion
let y = 5;
let z = "5";

console.log(y == z);
console.log(y === z);


// Operadores logicos
let c = true;
let d = false;

console.log(c && d);    // false, ambos deben ser true
console.log(c || d);    // true, al menos uno es true
console.log(!c);        // false, invierte el valor de c


// Operadores de tipo
// Permiten verificar el tipo de un valor o su relacion con clases/constructores
console.log(typeof 42);     // number
console.log(typeof "42");   // string
console.log([] instanceof Array); // true


// Operadores de incremento y decremento
let e = 10;
console.log(e);

e++;
console.log(e);

e--;
console.log(e);

++e;
console.log(e);
```

---

# Guia JavaScript

## JavaScript VIII / JSON, asincronia, promesas, fetch, async/await y try/catch

---

## JavaScript VII / High order functions, destructuring, spread operator, closures, funciones anidadas, callbacks, web apis

---

## JavaScript VI / Manipulacion del DOM en JavaScript y Eventos

---


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
# UTN25Cuatri2_132 :rooster:

# JavaScript :rooster:

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

## JavaScript V / Objetos, clases y objetos globales. Almacenamiento persistente, iteracion en arrays, iteracion en objetos e iteracion en arrays de objetos

---

## JavaScript IV / Introduccion a arrays. Metodos de strings y arrays

---

## JavaScript III / Scope y ambito, funciones, tipos de funciones, parametros y argumentos, funciones flecha

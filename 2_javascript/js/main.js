/*=========================
    Callbacks
===========================

Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan despues de que ocurra algun evento o se complete alguna operacion
*/
let botonCoso;

/* Ejemplo de callback que veiamos en JavaScript VI
botonCoso.addEventListener("keyup", function(event) {
    console.log(event.key);
});
*/

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
/*
function procesoPesado(callback) {
    console.log("Iniciando proceso...");

    // Simulamos un procesamiento pesado
    for (let i = 0; i < 50000; i++) {
        console.log(`Iteracion: ${i}`)
    }

    callback(); // Aca se imprime "Proceso asincrono completado"
}


procesoPesado(function() {
    console.log("Proceso asincrono completado");
});


console.log("Esto se ejecuta despues del callback sincrono"); // Despues de 50.000 iteraciones, se imprime esto
*/



// Callback asincrono -> No detiene el hilo de ejecucion princpal
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
==========================================


*/
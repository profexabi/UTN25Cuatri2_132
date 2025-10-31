/*==========================================
    Creando un servidor con Node.js
==========================================*/

// Gracias al modulo nativo http podemos crear un servidor web sin tener que instalar nada adicional
const http = require("http");

// Creamos el servidor
const servidor = http.createServer((req, res) => {

    res.statusCode = 200; // Codigo 200 = peticion exitosa

    res.setHeader("Content-Type", "text/plain"); // Indicamos que responderemos con texto

    res.end("Hola mundo desde Node.js"); // Mensaje que enviamos al cliente
});


// Definimos el puerto
const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`Servidor corriendo en http:/localhost:${puerto}`);
});

/*================================
     Explicacion del codigo
==================================

    1. Importamos el modulo http: Para acceder a todas las funcionalidades necesarias para crear un servidor

    2. Crear un servidor: Utilizamos el metodo http.createServer para definir un servidor que escuche las solicitudes de los clientes y les responda

    3. Respuesta del servidor: El servidor siempre respondera con el mensaje "Hola mundo desde Node.js"

    4. Escuchar en un puerto: El servidor se ejecuta en el puerto 3000 (puede ser cualquier puerto libre) y muestra un mensaje en la consola cuando esta listo
*/
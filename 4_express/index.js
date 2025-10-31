// Despues de instalar express con el comando npm i express, importamos Express
import express from "express"; // Ahora importamos asi gracias a type module, que indica que usamos la sintaxis ESM

// Ahora en app se guarda una instancia de la aplicacion de express
const app = express(); 

const PORT = 3100;

app.get("/", (req, res) => {
    res.send("Hola mundo desde Express.js");
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

/*================================
     Explicacion del codigo
==================================

    1. Instalamos Express con npm i express y lo importamos

    2. Creamos una aplicacion: Llamamos a la funcion express() que devuielve una instancia de aplicacion

    3. Definimos una ruta: Usamos app.get() para definir que hacemos cuando alguien visita la raiz / de nuestro servidor

    4. Respondemos con un mensaje "Hola mundo desde Express.js"

    5. Escuchamos desde un puerto: Nuestro servidor estra escuchando en el puerto 3100 y listo para aceptar conexiones
*/
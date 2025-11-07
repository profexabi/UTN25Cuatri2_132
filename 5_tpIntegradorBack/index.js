/*===================
    Importaciones
===================*/
import express from "express";
const app = express();

import environments from "./src/api/config/environments.js";
const PORT = environments.port;

import connection from "./src/api/database/db.js";
import cors from "cors"; // Importamos cors para poder usar sus metodos y permitir solicitudes de otras aplicaciones

/*===================
    Middlewares
===================*/
app.use(cors()); // Middleware basico que permite todas las solicitudes

/* Que es CORS?
CORS, o Intercambio de Recursos de Origen Cruzado, es un mecanismo de seguridad implementado por los navegadores web que permite a una página web 
solicitar recursos desde un dominio diferente al del origen actual  Este mecanismo se activa cuando una solicitud HTTP se realiza a un recurso 
en un dominio distinto al de la página que la originó, y su propósito principal es proteger a los usuarios de ataques 
como el secuestro de sesión o el acceso no autorizado a datos sensibles  CORS funciona mediante la verificación de encabezados HTTP específicos, 
como `Access-Control-Allow-Origin`, que el servidor debe incluir en su respuesta para indicar si está autorizado el acceso desde un origen determinado  
Sin este permiso explícito, el navegador bloquea la solicitud para mantener la seguridad de la política del mismo origen*/


/*===================
    Endpoints
===================*/
app.get("/", (req, res) => {
    res.send("TP Integrador Div 132");
});


// Get all products -> Traer todos los productos
app.get("/products", async (req, res) => {
    try {
        const sql = "SELECT * FROM products";

        // la conexion devuelve dos campos, rows con el resultado de la consulta, fields la informacion de la tabla products
        const [rows, fields] = await connection.query(sql);

        res.status(200).json({
            payload: rows,
            message: "Productos encontrados"
        });

        /* El término "payload" en el contexto de bases de datos se refiere 
        a la parte de los datos transmitidos que constituye el mensaje real 
        o la información útil, excluyendo los encabezados, metadatos o información de control necesaria para la entrega del mensaje*/

    } catch(error) {
        console.error("Error obteniendo productos", error.message);

        res.status(500).json({
            message: "Error interno al obtener productos"
        });
    }
});


// Get product by id -> Consultar producto por id
app.get("/products/:id", async (req, res) => {
    try {
        // Extraemos el valor id de la url
        // let id = req.params.id; // extraemos el 2 de /products/2
        let { id } = req.params;

        // ? son placeholders
        let sql = "SELECT * FROM products WHERE products.id = ?";

        const [rows] = await connection.query(sql, [id]);

        console.log(rows);

        res.status(200).json({
            payload: rows
        });


    } catch (error) {
        console.log("Error obteniendo producto por id: ", error);

        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message
        })
    }
})



app.listen(PORT, () => {
    console.log(`Servidor corriendo desde el puerto ${PORT}`)
});

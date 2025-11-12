/*===================
    Importaciones
===================*/
import express from "express";
const app = express();

import environments from "./src/api/config/environments.js"; // Traemos las variables de entorno para extraer el puerto
const PORT = environments.port;

import connection from "./src/api/database/db.js"; // Traemos la conexion a la BBDD
import cors from "cors"; // Importamos cors para poder usar sus metodos y permitir solicitudes de otras aplicaciones

/*===================
    Middlewares
===================*/
/* Los middlewares son simplemente funciones que se ejecutan entre la peticion (request -> req) y la respuesta (response -> res)

Middleware de aplicacion: Es una funcion que se ejecuta en todas las rutas

Middleware de ruta: Es una funcion que se ejecuta en alguna rutas
*/

app.use(cors()); // Middleware basico que permite todas las solicitudes

// Middleware logger
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});

/* Que es CORS?
CORS, o Intercambio de Recursos de Origen Cruzado, es un mecanismo de seguridad implementado por los navegadores web que permite a una página web 
solicitar recursos desde un dominio diferente al del origen actual  Este mecanismo se activa cuando una solicitud HTTP se realiza a un recurso 
en un dominio distinto al de la página que la originó, y su propósito principal es proteger a los usuarios de ataques 
como el secuestro de sesión o el acceso no autorizado a datos sensibles  CORS funciona mediante la verificación de encabezados HTTP específicos, 
como `Access-Control-Allow-Origin`, que el servidor debe incluir en su respuesta para indicar si está autorizado el acceso desde un origen determinado  
Sin este permiso explícito, el navegador bloquea la solicitud para mantener la seguridad de la política del mismo origen*/

/* Middleware para parsear la informacion de JSON a objetos JS en las peticiones POST

El cuerpo de la solicitud, disponible en `req.body`, se utiliza comúnmente para recibir datos enviados en peticiones POST o PUT, aunque requiere middleware como `express.json()` para ser procesado correctamente
*/
app.use(express.json()); // Middleware que convierte los datos "application/json" que nos proporciona la cabecera (header) de las solicitudes POST y PUT, los pasa de json a objetos JS


/*===================
    Endpoints
===================*/

app.get("/", (req, res) => {
    // Tipo de respuesta texto plano
    res.send("TP Integrador Div 132");
});


/* Devolveremos vistas
app.get("/dashboard", (req, res) => {
    res.render("index");
});
*/


// GET all products -> Traer todos los productos
app.get("/api/products", async (req, res) => {
    try {
        const sql = "SELECT * FROM products";

        // la conexion devuelve dos campos, rows con el resultado de la consulta, fields la informacion de la tabla products
        const [rows, fields] = await connection.query(sql);

        // Tipo de respuesta en JSON
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


// GET product by id -> Consultar producto por id
app.get("/api/products/:id", async (req, res) => { 
    // en el parametro tenemos los objetos Request (req) y Response (res)
    try {
        // Extraemos el valor id de la url
        // let id = req.params.id; // extraemos el 2 de /products/2
        let { id } = req.params;

        // ? son placeholders
        let sql = "SELECT * FROM products WHERE products.id = ?";

        const [rows] = await connection.query(sql, [id]);

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
});


// POST -> Crear nuevo producto
app.post("/api/products", async (req, res) => {
    try {
        // Extraemos e imprimimos los datos del body para ver si llegan correctamente
        let { name, image, category, price } = req.body;
        console.log(req.body);
        console.log(`Nombre producto: ${name}`);

        let sql = "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)";

        let [rows] = await connection.query(sql, [name, image, category, price]);
        console.log(rows);

        // Devolvemos una repuesta con codigo 201 Created
        res.status(201).json({
            message: "Producto creado con exito!",
        });

    } catch (error) {
        console.log("Error al crear producto: ", error);

        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message
        })
    }
});



// PUT-> Actualizar producto
app.put("/api/products", async (req, res) => {
    try {
        /*{
            "id": "2",
            "name": "hamburguesa salmon",
            "image": "https://burgernj.com/wp-content/uploads/2021/05/Salmon-Burger_.jpg",
            "category": "food",
            "price": "2500.00",
            "active": "1"
        }*/

        // Gracias al middleware express.json() convertimos el JSON previo en un objeto JS al que podemos hacer destructuring y almacenar en variables sus valores
        let { id, name, image, category, price, active } = req.body;

        let sql = `
            UPDATE products
            SET name = ?, image = ?, category = ?, price = ?, active = ?
            WHERE id = ?
        `;

        let [result] = await connection.query(sql, [name, image, category, price, active, id]); // Estos valores en orden reemplazan a los placeholders -> ?

        console.log(result);

        res.status(200).json({
            message: `Producto con id: ${id} actualizado correctamente`
        });

    } catch(error) {
        // Vemos el error en la consola del servidor
        console.error("Error al actualizar producto: ", error);

        // Le respondemos al cliente con un codigo 500 y un mensaje de error
        res.status(500).json({
            message: `Error interno del servidor: ${error}`
        });
    }
});



// DELETE-> Eliminar producto
app.delete("/api/products/:id", async (req, res) => {
    try {
        let { id } = req.params;

        // Opcion 1: Hacer el borrado normal
        let sql = `DELETE FROM products WHERE id = ?`;

        // Opcion 2: Baja logica
        let sql2 = `UPDATE products set active = 0 WHERE id = ?`;

        let [result] = await connection.query(sql, [id]);
        console.log(result);

        return res.status(200).json({
            message: `Producto con id ${id} eliminado correctamente`
        });

    } catch (error) {
        console.error("Error al eliminar un producto por su id: ", error);

        res.status(500).json({
            message: `Error al eliminar producto con id: ${id}`,
            error: error.message
        });
    }
});




app.listen(PORT, () => {
    console.log(`Servidor corriendo desde el puerto ${PORT}`)
});

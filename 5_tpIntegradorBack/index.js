/*===================
    Importaciones
===================*/
import express from "express";
const app = express();

import environments from "./src/api/config/environments.js"; // Traemos las variables de entorno para extraer el puerto
const PORT = environments.port;

import connection from "./src/api/database/db.js"; // Traemos la conexion a la BBDD
import cors from "cors"; // Importamos cors para poder usar sus metodos y permitir solicitudes de otras aplicaciones

// Importamos los middlewares
import { loggerUrl, validateId } from "./src/api/middlewares/middlewares.js";

/*===================
    Middlewares
===================*/


app.use(cors()); // Middleware basico que permite todas las solicitudes

// Middleware logger
app.use(loggerUrl);

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
        /* Optimizacion 1: 
        - Seleccionemos solamente los campos necesarios, evitar SELECT *
        - Devolver solo las columnas que necesita el front
        - < datos transferidos, < carga de red, > seguridad
        */
        const sql = "SELECT * FROM products";

        // la conexion devuelve dos campos, rows con el resultado de la consulta, fields la informacion de la tabla products
        const [rows, fields] = await connection.query(sql);

        // Tipo de respuesta en JSON
        res.status(200).json({
            payload: rows,
            message: rows.length === 0 ? "No se encontraron productos" : "Productos encontrados"
        });
        // Optimizacion 2: Devolver un mensaje haya o no haya productos

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
app.get("/api/products/:id", validateId ,async (req, res) => { 
    // en el parametro tenemos los objetos Request (req) y Response (res)
    try {
        // Optimizacion 1: Validar el datos de id (ya se hace en el middleware)

        // Extraemos el valor id de la url
        // let id = req.params.id; // extraemos el 2 de /products/2
        let { id } = req.params;
        

        // Optimizacion 2: Limitar los resultados de la consulta: Evita el escaneo completo de la tabla
        //let sql = "SELECT * FROM products WHERE products.id = ? LIMIT 1";
        let sql = "SELECT * FROM products WHERE products.id = ?"; // ? son placeholders

        const [rows] = await connection.query(sql, [id]);
        // console.log(rows);

        // Optimizacion 3: Comprobamos que exista el producto con ese id
        if(rows.length === 0) {
            // Este console se muestra en la consola de nuestro servidor
            console.log(`Error!! No existe producto con el id ${id}`);

            // return es CLAVE, porque aca, se termina la ejecucion del codigo
            return res.status(404).json({
                message: `No se encontro producto con id ${id}`
            });
        }

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


        // Optimizacion 1: Validamos de datos de entrada
        if(!category || !image || !name || !price) {
            return res.status(400).json({
                message: "Datos invalidos, asegurate de enviar todos los campos"
            });
        }


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


        // Optimizacion 1: Validacion basica de todos los campos recibidos en el body
        if(!id || !name || !image || !category || !price || !active) {
            return res.status(400).json({
                message: "Faltan campos requeridos"
            });
        }


        let sql = `
            UPDATE products
            SET name = ?, image = ?, category = ?, price = ?, active = ?
            WHERE id = ?
        `;

        let [result] = await connection.query(sql, [name, image, category, price, active, id]); // Estos valores en orden reemplazan a los placeholders -> ?

        console.log(result);


        // Optimizacion 2: Comprobamos que haya filas afectas -> testeamos que se actualizara
        if (result.affectedRows === 0) { // Si no se actualizo nada
            return res.status(400).json({
                message: "No se actualizo el producto"
            })
        }


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
app.delete("/api/products/:id", validateId, async (req, res) => {
    try {
        let { id } = req.params;

        // Opcion 1: Hacer el borrado normal
        let sql = `DELETE FROM products WHERE id = ?`;

        // Opcion 2: Baja logica
        let sql2 = `UPDATE products set active = 0 WHERE id = ?`;

        let [result] = await connection.query(sql, [id]);
        console.log(result);

        // Comprobamos si realmente se elimino un producto
        if(result.affectedRows === 0) {
            return res.status(400).json({
                message: `No se elimino el producto con id: ${id}`
            });
        }

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

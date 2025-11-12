import { Router } from "express"; // Importamos el middleware Router
const router = Router(); // Lo mismo que hacemos en express con const app = express()

import { validateId } from "../middlewares/middlewares.js"; // Importamos validateId
import connection from "../database/db.js"; // Traemos la conexion a la BBDD


// GET all products -> Traer todos los productos
router.get("/", async (req, res) => {
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
router.get("/:id", validateId ,async (req, res) => { 
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
router.post("/", async (req, res) => {

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
router.put("/", async (req, res) => {
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
router.delete("/:id", validateId, async (req, res) => {
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


// Exportamos todas las rutas
export default router;
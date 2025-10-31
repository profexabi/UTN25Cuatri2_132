import express from "express";
const app = express();
import environments from "./src/api/config/environments.js";

const PORT = environments.port;

app.get("/", (req, res) => {
    res.send("TP Integrador Div 132");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo desde el puerto ${PORT}`)
});

// TO DO, hacer conexion a la BBDD mysql
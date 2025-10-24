// Probando Node.js fuera del navegador
console.log("Hola mundo desde Node.js");


/*================================
    Modulos nativos de Node.js
==================================

En Node.js los modulos son como bloques de construccion que nos permiten organizar y reutilizar codigo de forma eficiente. 
De manera que en lugar de tener todo el codigo en un archivo gigante, podemos dividirlo en diferentes archivos o "modulos" y luego importarlos en el lugar donde los necesitemos. Para que nuestro codigo sea mas limpio, facil de mantener y de escalar.

Para trabajar con modulos, es decir, bloques de codigo reutilizables, siempre vamos a hacer lo siguiente

    1. Instalar el modulo desde npm. (Si es te modulo es nativo, integrado ya con Node.js, no hace falta). Ej, instalar modulo para realizar operaciones aritmeticas simples https://www.npmjs.com/package/npm-paquete?activeTab=code

    2. Importar el modulo para poder usarlo

    3. Una vez importado, ya podemos hacer uso de todas sus funcionalidades


Node.js tiene varios modulos integrados ya listos para usar.*/

// File System -> fs: Es un modulo que nos permite interactuar con el sistema de archivos. Podemos leer, escribir, actualizar y borrar archivos de forma sencilla

/* Profundizando la documentacion de File System
 https://medium.com/@diego.coder/file-system-en-node-js-29b0f7cb7930

EXTRA / Conociendo el parametro opcional flag
| Flag           | Modo          | Descripción                                                 |
| -------------- | ------------- | ----------------------------------------------------------- |
| `'r'`          | Read          | Abre para **leer** (falla si no existe).                    |
| `'r+'`         | Read + Write  | Lee y escribe (falla si no existe).                         |
| `'w'`          | Write         | **Sobrescribe** o crea si no existe.                        |
| `'w+'`         | Read + Write  | Sobrescribe o crea nuevo.                                   |
| `'a'`          | Append        | Agrega al final del archivo o lo crea.                      |
| `'a+'`         | Read + Append | Lee y agrega al final o lo crea.                            |
| `'ax'`, `'wx'` | Exclusive     | Igual que `'a'` o `'w'` pero falla si el archivo ya existe. |
*/

// Vamos a leer un archivo de texto
const fs = require("fs"); // Importo el modulo preinstalado File System para poder empezar a usar sus funciones

fs.readFile("archivos/otroArchivo.txt", "utf8", (err, data) => {
    if(err) {
        console.log("Ocurrio un error: ", err);
        return;
    }
    console.log("Contenido del archivo: ", data);
});


// path: Es un modulo que nos ayuda a manejar y manipular rutas de archivos y directorios de forma mas segura y comoda

const path = require("path");

/*En Node.js, __dirname y __filename son variables globales que proporcionan información sobre el directorio y la ruta del archivo del script que se está ejecutando actualmente. 

__dirname devuelve la ruta absoluta del directorio que contiene el archivo que se está ejecutando actualmente, lo que resulta útil para localizar archivos relativos a la ubicación del script.

Del mismo modo, __filename devuelve la ruta absoluta del propio archivo, incluido el nombre del archivo, como /Usuarios/nombre de usuario/proyecto/app.js.
*/

// dirname nos proporciona la ruta del directorio que contiene el archivo
console.log(__dirname); // /home/xabier/Escritorio/Docencia/2025/UTN Cuatri 2/UTN25Cuatri2_132/3_nodejs

// filename nos proporciona la ruta del archivo que se esta ejecutando actualmente
console.log(__filename); // /home/xabier/Escritorio/Docencia/2025/UTN Cuatri 2/UTN25Cuatri2_132/3_nodejs/main.js


// join nos permite combinar rutas
const rutaArchivoTexto = path.join(__dirname, "/archivos/archivoTexto.txt");
console.log("La ruta a mi archivo de texto es: ", rutaArchivoTexto); // /home/xabier/Escritorio/Docencia/2025/UTN Cuatri 2/UTN25Cuatri2_132/3_nodejs/archivos/archivoTexto.txt

const rutaOtroArchivo = path.join(__dirname, "archivos", "otroArchivo.txt");
console.log(`La ruta de mi otro archivo es: ${rutaOtroArchivo}`); // /home/xabier/Escritorio/Docencia/2025/UTN Cuatri 2/UTN25Cuatri2_132/3_nodejs/archivos/otroArchivo.txt

// basename nos permite obtener el nombre de un fichero a partir de su ruta
const nombreArchivoTexto = path.basename(rutaArchivoTexto);
const nombreOtroArchivo = path.basename((rutaOtroArchivo));

console.log(`Mis dos archivos se llaman: ${nombreArchivoTexto} y ${nombreOtroArchivo}`);


// os: Este modulo nos permite obtener informacion del sistema operativo en el que estamos ejecutando Node.js

const os = require("os");

const memoriaLibre = os.freemem(); // Freemem devuelve en bytes
const tipoSistema = os.type();

// Realizamos las conversiones de bytes a MB y GB
let memoriaLibreMb = os.freemem() / (1024 * 1024);
let memoriaLibreGb = os.freemem() / (1024 * 1024 * 1024);

console.log(`Mi sistema tiene ${memoriaLibreMb} MB o ${memoriaLibreGb} GB de memoria disponible y uso un SO ${tipoSistema}`);

console.log(os.cpus());


// TO DO, exportar e importar un modulo externo y ya pasar al modulo http nativo de Node.js
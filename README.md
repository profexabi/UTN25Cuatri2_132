# UTN25Cuatri2_132 :rooster:

## [Excel grupos Div 132 / 2025](https://docs.google.com/spreadsheets/d/1DC1XwCZ_a2tH1abXacndfXHBUEB-9mfx2KEZ2rl6MJI/edit?usp=sharing)
    - Para el 29 de octubre, este grupo pasara a solo lectura y quienes falten seran asignados de manera automatica por los docentes

## Clases grabadas
### [JavaScript VII 2a parte - 22/10/25](https://youtu.be/iHoJdGzl1tM)

### [JavaScript VIII y Node I - 24/10/25](https://youtu.be/iZpfY47iLIA)


---


# Guia del TP Integrador

## **1 / Setup e instalacion**
#### Comandos con la terminal de git bash

### 1.1 Creacion del proyecto
```sh
# Creamos una carpeta para nuestro proyecto
mkdir nombreProyectoExpress
cd nombreProyectoExpress

# Inicializamos un proyecto npm (node package manager)
npm init -y

# Instalamos express https://www.npmjs.com/package/express
npm install express
```

- El comando `npm init` genera un archivo `package.json`, que contiene informacion clave sobre nuestro proyecto, incluyendo dependencias, scripts, metadatos, etc

- Creamos un archivo principal (que coincida con el main de nuestro package.json)

```json
"main": "index.js",
```

- Recordemos crear un archivo `.gitignore`!
```sh
touch .gitignore
```
- Metamos adentro los nombres de archivos o carpetas que no querramos que se pusheen a git ej: `node_modules` o `.env`
- Estos modulos quedan almacenados en nuestra compu pero no se pushean a git, para poder instalarlos cuando clonemos el repo, usaremos el comando
```sh
npm install
```


### 1.2 Instalamos las dependencias necesarias
Vamos a instalar:

- **express**: Framework web
- **nodemon**: Herramienta que reinicia automaticamente la aplicacion Node.js cuando detecta cambios en los archivos
- **dotenv**: Modulo que carga variables de entorno desde un archivo `.env` al entorno de ejecucion de Node.js
- **mysql2**: Herramienta para conectarnos a nuestra BBDD MySQL
```sh
npm install express nodemon dotenv mysql2
```

### 1.3 Script personalizado y sintaxis ESM
- Agregamos type module en el `package.json` para usar la sintaxis moderna ES6 de ESM (EcmaScript Modules)
- Agregar script `dev`
```json
  "scripts": {
    "dev": "nodemon index.js"
  },
  "type": "module",
```

### 1.4 Creamos el archivo de variables de entorno `.env`
- Creamos el archivo `.env` y lo agregamos a `.gitignore` 
- En `.env` agregamos las variables locales sensibles como el puerto o la conexion a la BBDD
```txt
PORT=3000
DB_HOST="localhost"
DB_NAME="tp25_autoservicio"
DB_USER="root"
DB_PASSWORD="abc123."
```

### 1.5 Que es `localhost`?
Localhost es una dirección especial que permite a los desarrolladores probar y desarrollar aplicaciones web directamente en su propia computadora sin necesidad de conexión a Internet.

 Se refiere al ordenador local en el que se ejecuta un programa, actuando como un servidor virtual que permite la comunicación interna entre los servicios del mismo equipo.


### 1.6 Por que los archivos ocultos tienen un . delante como `.gitignore` y `.env`
Los archivos ocultos en sistemas operativos como macOS y Linux suelen llevar un punto (.) al principio de su nombre para que sean invisibles en la interfaz del usuario, a menos que se realicen ajustes específicos para mostrarlos.

Este es un mecanismo estándar que permite que el sistema los oculte automáticamente, evitando que los usuarios los vean o modifiquen accidentalmente


---

## 2 / Estructura de directorios y conexion a la BBDD
- Creamos las carpetas y los archivos `src/api/config/environments.js` y `src/api/database/db.js`

- en `src/api/config/environments.js`
```js
import dotenv from "dotenv"; // Importamos el modulo dotenv

dotenv.config(); // Cargamos las variables de entorno desde el archivo.env

// Vamos a exportar esta informacion del .env
export default {
    port: process.env.PORT || 3500,
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }   
}
```

- [Documentacion mysql2](https://sidorares.github.io/node-mysql2/docs/documentation)
- en `src/api/database/db.js`
```js
// Importamos el modulo que instalamos previamente para conectarnos a la BBDD mysql
import mysql from "mysql2/promise";

// Importamos el archivo de environments
import environments from "../config/environments.js";

const { database } = environments;


const connection = mysql.createPool({
    host: database.host,
    database: database.name,
    user: database.user,
    password: database.password
});

export default connection;
```

- Un pool de conexiones es un conjunto de conexiones activas y reutilizables a la BBDD
- En lugar de abrir y cerrar una nueva conexion cada vez que hacemos una consulta cada vez que hacemos una consulta, el pool:
    - Mantiene abiertas varias conexiones
    - Las reutiliza para distintas consultas
    - Mejora el rendimiento y eficacia del servidor
    - Controla cuantas conexiones pueden usarse al mismo tiempo
    - Evita crear y destruir conexiones constantemente
    - Reduce la carga en la BBDD
    - Mejora la velocidad y capacidad de respuesta de la app


---

## 3 / Consumiendo nuestra API Rest desde el cliente

### 3.1 Instalar CORS en nuestro servidor para permitir a nuestra API ser consumida desde el cliente

#### Que es CORS?
CORS (Cross-Origin Resource Sharing, o intercambio de recursos entre orígenes) es un mecanismo de seguridad implementado por los navegadores web que permite a una página cargada en un origen (dominio, protocolo y puerto) solicitar recursos a un servidor ubicado en un origen diferente, siempre que el servidor destino autorice explícitamente dicha solicitud.
 Este mecanismo es una extensión de la política del mismo origen (Same-Origin Policy), que originalmente prohibía completamente el acceso a recursos de otros dominios para prevenir ataques como el Cross-Site Scripting (XSS) y la falsificación de solicitudes entre sitios (CSRF).

- Instalar [CORS](https://www.npmjs.com/package/cors)

```sh
npm i cors
```

- Importamos y usamos cors en nuestro `index.js`
```js
import cors from "cors";

app.use(cors()); // Middleware basico que permite todas las solicitudes
```

---


### Clave mientras estan haciendo la tecnicatura

- **PRIORIZAR la formacion autodidacta en los stacks mas solidos y estables en la industria**. .Net, .Springboot y Angular

- **Linkedin building**, chusmeen en que consiste, bien armado, buen CV, AGREGAR RECRUITERS A ROLETE

- Vayan a charlas, virtuales o presenciales de recruiters

- Vayan PRESENCIALMENTE A TODO, busquen contactos, charlen cara a cara, charlen con quien les puede contratar, dejen su cv, tarjeta lo que sea, vendanse

- CV bien armado, incorporando web propia deployada, portfolio 

- Portfolio lindo y bien armado

---


## Teoría y fundamentos web del backend

#### 1. [Introductorio / Playlist de Programacion web de todocode](https://www.youtube.com/watch?v=lC6JOQLIgp0&list=PLQxX2eiEaqbxx6Ds5bd1F6LZJo7_OnZhV&index=3)
    - Arquitectura cliente-servidor
    - Protocolo HTTP -> Requests y Responses
    - Que es JSON
    - Que son las APIs

#### 2. [Avanzado / Clase completa sobre protocolo HTTP y arquitectura cliente/servidor](https://www.youtube.com/watch?v=l6oF_RpBf64)


#### Ejemplo práctico

```js
// Cliente (Navegador) -> Hace una peticion HTTP (HTTP Request)
fetch("http://localhost:3000/productos")
    .then(response => response.json())
    .then(productos => {
        // Mostrar productos en la pagina
    });


// Servidor (Node.js y Express.js) -> Recibe esta peticion HTTP Request y devuelve una respuesta HTTP respuesta
app.get("/productos", async (req, res) => {
    const productos = await connection.query("SELECT * FROM productos");
    res.json(productos);
})
```

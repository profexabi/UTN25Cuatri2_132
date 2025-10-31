# Que es Express.js?

Es un framework de Node.js minimalista, diseñado para facilitar la creación de servidores web. Simplifica el manejo de rutas, peticiones HTTP, etc.
Básicamente, nos permite crear servidores web de forma más rápida y con menos líneas de código que el módulo nativo http de Node.js

### Ventajas de Express.js
- Es ligero y flexible
- Permite manejar rutas facilmente
- Simplifica el manejo de middlewares 
- Cuenta con un enorme ecosistema de modulos y herramientas

## 1 / Creando un proyecto con [npm](https://www.npmjs.com/)

Creamos una nueva carpeta e iniciamos un proyecto de Node.js con `npm`
```sh
mkdir proyectoExpress
cd proyectoExpress

npm init -y
```

Esto nos genera un archivo `package.json` con la configuracion inicial.

```json
{
  "name": "4_express",
  "version": "1.0.0",
  "description": "Framework minimalista de Node.js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

- **name**: Define el nombre del proyecto
- **version**: Especifica la version del proyecto siguiendo el formato XYZ
    - **X** cambia cuando hay modificaciones incompatibles (version mayor)
    - **Y** cambia cuando hay nuevas caracteristicas (version menor)
    - **Z** cambia cuando se corrigen errores o se hacen pequeños ajustes (parches)
- **description**: Proporcioona una breve descripcion sobre el proposito o funcionalidad del proyecto
- **main**: Indica el archivo principal de la aplicacion, es decir, el punto de entraada de nuestro proyecto. *Aca normalmente se encuentra el codigo que inicializa el servidor o la aplicacion*
- **scripts**: Aca se definen comandos que podemos ejecutar a traves de `npm run nombreComando`
- **keywords**: Son palabras clave que nos permiten identificar el proyecto en npm
- **author**: El nombre o identificacion del autor del proyecto, pudiendo incluir nombre, correo electronico o URL
- **license**: Especifica la licencia del proyecto, dependiendo de como queremos que nuestro codigo sea distribuido o reutilizado
- **dependencies**: Contiene las dependencias del proyecto, es decir, los modulos que el proyecto necesita para funcionar. *Cada vez que instalamos un modulo con `npm install` se agrega automaticamente aca*
- **devDependencies**: Similar a dependencies pero solo para dependencias necesarias durante el desarrollo de la aplicacion, como herramientas de testing o linters


---


## 2 / Iniciando un servidor con [Express.js](https://www.npmjs.com/package/express)

### 2.1 / Vamos a instalar los siguientes paquetes
```sh
# Herramienta para reiniciar la aplicacion cuando hay cambios
npm i nodemon 

# Framework para crear servidores web
npm i express
```

### 2.2 / Vamos a crear un archivo `.gitignore`
No queremos que todos los modulos que instalamos se envien a git, porque queremos enviar solamente nuestro codigo y posteriormente, poder instalarlos todos con el comando `npm install`

Lo que sucede con `npm install` es que va a ver que paquetes se utilizan en dependencies en el `package.json` y se instala todo eso

Indicamos que no se envien a git, todos estos modulos que usa nuestro proyecto

```
node_modules
```

### 2.3 / Usamos el moderno sistema de modulos ESM (EcmaScript Modules)

Alteramos en nuestro `package.json` para agregar la nueva sintaxis y un script personalizado para correr nodemon
```json
  "type":"module",
  "scripts": {
    "dev": "nodemon index.js",
  }
```
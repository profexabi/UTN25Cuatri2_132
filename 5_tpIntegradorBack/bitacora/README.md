# Glosario de terminos

## Como se envian los datos de los formularios en html?
Tipos de Datos en Formularios HTML

Los formularios HTML envían datos en pares nombre/valor cuando se envían al servidor Estos datos pueden incluir texto, contraseñas, fechas, números, selecciones de opciones, archivos adjuntos, entre otros, dependiendo del tipo de control de formulario utilizado El tipo de datos enviado depende del atributo `type` de los elementos dentro del formulario, como `text`, `password`, `email`, `number`, `date`, `checkbox`, `radio`, `file`, entre otros

El formato de codificación de los datos se define mediante el atributo `enctype` del elemento `form` **Por defecto, los formularios se envían con el formato `application/x-www-form-urlencoded`**, que sustituye espacios por `+` y convierte caracteres especiales en secuencias de escape, separando los pares nombre/valor con `=` y las combinaciones con `&` Este formato es adecuado para datos pequeños y no confidenciales, especialmente cuando se usa el método `GET`

Para formularios que incluyen imágenes o grandes volúmenes de información, se debe utilizar el tipo `multipart/form-data`, que envía los datos en partes separadas conocidas como `form-data` Este formato es necesario cuando se usa el atributo `type="file"` en un campo de entrada

El método de envío, especificado con el atributo `method` en el elemento `form`, puede ser `GET` o `POST` Con `GET`, los datos se incluyen en la URL, lo que los hace visibles y limita la cantidad de datos que se pueden enviar Con `POST`, los datos se envían en el cuerpo de la solicitud HTTP, lo que los hace más seguros, especialmente para datos sensibles


## Y como recibimos en Express los datos de un `<form>`?
**Este middleware analiza los cuerpos de las solicitudes entrantes con el tipo de contenido `application/x-www-form-urlencoded` y hace que los datos analizados estén disponibles en `req.body`**. 

Para un uso básico, añada el middleware a su aplicación Express:

```javascript
const express = require(“express”);
const app = express();

// Analizar datos de formularios codificados en URL
app.use(express.urlencoded({ extended: true }));
```

---


Parse URL Encoded Data in Express

To parse URL-encoded form data in Express.js, use the built-in `express.urlencoded()` middleware. This middleware parses incoming request bodies with the `application/x-www-form-urlencoded` content type and makes the parsed data available in `req.body` 

For basic usage, add the middleware to your Express application:

```javascript
const express = require('express');
const app = express();

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
```

The `extended: true` option enables parsing of nested objects and arrays using the `qs` library, while `extended: false` limits parsing to simple key-value pairs The middleware should be placed before defining routes that need to access the form data

For Express versions 4.16 and later, `express.urlencoded()` is included by default and does not require the separate `body-parser` package This middleware processes form data sent via POST requests with the `application/x-www-form-urlencoded` MIME type, converting it into a JavaScript object accessible through `req.body`

Example route handling parsed form data:

```javascript
app.post('/', (req, res) => {
  const formData = req.body; // Parsed form data is available here
  console.log(formData);
  res.send('Form submitted successfully');
});
```

This approach is the standard and recommended method for handling form submissions in Express.js applications


---


## Que es CORS?
CORS, o Intercambio de Recursos de Origen Cruzado, es un mecanismo de seguridad implementado por los navegadores web que permite a una página web 
solicitar recursos desde un dominio diferente al del origen actual

Este mecanismo se activa cuando una solicitud HTTP se realiza a un recurso 
en un dominio distinto al de la página que la originó, y su propósito principal es proteger a los usuarios de ataques  como el secuestro de sesión o el acceso no autorizado a datos sensibles  CORS funciona mediante la verificación de encabezados HTTP específicos,  como `Access-Control-Allow-Origin`, que el servidor debe incluir en su respuesta para indicar si está autorizado el acceso desde un origen determinado   

Sin este permiso explícito, el navegador bloquea la solicitud para mantener la seguridad de la política del mismo origen


---


## Que es payload?
El término "payload" en el contexto de bases de datos se refiere  a la parte de los datos transmitidos que constituye el mensaje real o la información útil, excluyendo los encabezados, metadatos o información de control necesaria para la entrega del mensaje


---


## Que es `FormData`?
Que es FormData?

En JavaScript, FormData es un objeto que permite crear un conjunto de pares clave-valor que representan los campos de un formulario HTML y sus valores, facilitando su envío a un servidor mediante métodos como fetch o XMLHttpRequest.
Este objeto replica la funcionalidad de un formulario HTML y se utiliza comúnmente para enviar datos de formularios, incluyendo archivos, de manera dinámica sin recargar la página

Este objeto es especialmente útil en aplicaciones modernas que requieren enviar datos de forma asincrónica, ya que simplifica el manejo de formularios, incluyendo campos de texto, casillas de verificación, botones de radio y campos de carga de archivos
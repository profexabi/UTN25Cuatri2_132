# Node.js

## Que es el desarrollo backend?
Mientras que el **frontend** es lo que el usuario ve y con lo que interactua. El backend se encarga de manejar y procesar la informacion.

El backend es la parte de una aplicacion que funciona en el servidor y maneja la logica de negocio, bases de datos, autenticacion y toda la funcionalidad que el usuario no ve directamente
Los componentes principales del backend son:

- **Servidores (fisicos)**: Maquinas que procesan requests
- **Servidores (software)**: Procesos que estan continuamente en ejecucion escuchando peticiones y devolviendo respuestas, la base del protocolo HTTP
- **Bases de Datos**: Para almacenamiento de informacion
- **APIs**: Interfaces de comunicacion para conectar una aplicacion con otra
- **Autenticacion**: Gestion de usuarios y permisos
- **Logica de negocio**: Reglas y procesos de la aplicacion

## [Que es `Node.js`?](https://www.youtube.com/watch?v=SfWPqr04srM)
*Node.js es un entorno de ejecucion de JavaScript del lado del servidor*, construido sobre el motor V8 de Chrome. Entre sus ventajas se destacan:

- JavaScript **tanto en frontend como en backend. Mismo lenguaje** tanto para el cliente como para el servidor
- **No bloqueante y asincrono**
- **Ecosistema enorme** con miles de paquetes disponibles gracias a [npm](https://www.npmjs.com/)
- **Alto rendimiento** gracias al event loop
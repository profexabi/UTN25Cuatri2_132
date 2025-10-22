# UTN25Cuatri2_132 :rooster:

## [Excel grupos Div 132 / 2025](https://docs.google.com/spreadsheets/d/1DC1XwCZ_a2tH1abXacndfXHBUEB-9mfx2KEZ2rl6MJI/edit?usp=sharing)
    - Para el 29 de octubre, este grupo pasara a solo lectura y quienes falten seran asignados de manera automatica por los docentes


# JavaScript :notebook:

## Recursos clase
1. [CV Online](https://onlinegdb.com/VWixF9kY2)
    1. Colocar el contenido del documento
    2. Maquetar con flex
    3. Corregimos o eliminamos los espacios del box model

2. [Portfolio fullstack](https://www.onlinegdb.com/5MEjTtIRL)

---

## Clases grabadas

### [JavaScript VII 2a parte 22/10/25](https://youtu.be/iHoJdGzl1tM)


---


## Notas TP Integrador

## Paso 1
### Proyecto frontend
- *Reutilizamos el 1er parcial pero consumiendo nuestra propia API Rest*

- App front donde usuarios compran 2 tipos de producto

- Al finalizar la compra, creamos un boton que diga "hacer compra" o "imprimir ticket"
    - imprimir 1 ticket con la libreria Js PDF
    - registramos 1 venta (POST para registrar una venta)

#### **Explicacion del cliente**

1. Pantalla de bienvenida donde se pide insertar nombre (y guardarlo en la sesion)

2. Pantalla productos. 
    - Visualizar tarjetas de productos -> datos, img y boton agregar a carrito
    - Esta pantalla productos se ve gracias a que hacemos una peticion fetch a nuestra API Rest, [ejemplo](https://jsonplaceholder.typicode.com/users)

3. Pantalla carrito. Listado de productos añadidos al carrito. Debe permitir agregar o quitar distintas cantidades

4. Pantalla ticket. Confirmado el carrito (boton hacer compra o imprimir ticket)
    - Imprimimos un ticket en pdf con [JS PDF](https://raw.githack.com/MrRio/jsPDF/master/docs/index.html)
    - Se produce un POST a la tabla ventas (hora, cantidad de productos, precio total, etc)

---

## Paso 2

#### BBDD MySQL con las respectivas tablas 

### Proyecto backend
- Una API Rest que va a estar conectada a la BBDD y va a devolver datos

- Nuevas vistas HTML (EJS) -> Es el propio servidor el que va a generar las vistas y el HTML
- Esta vista va a ser el panel de administracion o "backoffice" que nos permitira gestionar productos y usuarios


#### **Explicacion del servidor**
Solamente vamos a crear usuarios admins! los clientes no se loguean, solamente se registra en el ticket y en la venta el nombre que pusieran en la pantalla de bienvenida

1. *Pantalla login que debe permitir ingresar correo y password* -> Conveniente dejar este paso para cuando esten hechas las pantallas

2. Con este login exitoso, pantalla dashboard que posee las siguientes vistas asi como el nav para redirigir a las pantallas de alta, baja y modificacion de productos y usuarios

    2.1 Listado de productos que trae todo el choclo de productos como nuestro parcial -> **GET**

    2.2. Pantalla para obtener productos/usuarios por su id -> **GET by id**

    2.3. Pantalla alta producto para cargar un nuevo producto son con un formulario que permita cargar sus datos y su imagen en url  -> **POST**

    2.4. Recicla el form de get by id -> Pantalla modificar producto para modificar los datos de un producto a partir de su ID -> **PUT**

    2.5 Recicla el form de get by id -> Pantalla para eliminar producto -> **DELETE**

---

## Paso 3
Ya con la API Rest andando 

### 3.1 Login basico con EJS y [bcrypt](https://www.npmjs.com/package/bcrypt)

### 3.2 Subida de archivos con Multer

### 3.3 Descarga de excel con las ventas

### 3.4 Paginacion




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

---

# Guia JavaScript

## JavaScript VIII / JSON, asincronia, promesas, fetch, async/await y try/catch

#### Que es una API Rest?
Una API Rest es un estilo arquitectonico para diseñar servicios web que **permiten la comunicacion y transferencia de datos entre diferentes sistemas a traves de internet**

- Se basa en el **protocolo HTTP** y por tanto utiliza metodos estandar como **GET, POST, PUT y DELETE** para realizar operaciones de creacion, lectura, actualizacion y eliminacion de recursos.

- Cada **recurso** de la API Rest esta identificado por una **URL** unica 

- Y las solicitudes y respuestas suelen intercambiarse **en formato JSON**, legible tanto para humanos como para maquinas


En esencia, una API Rest actua como una interfaz que permite a aplicaciones externas aceder a datos o funcionalidades de manera controlada y predefinida, facilitando la integracion entre sistemas. Es ampliamente usada en servicios web, aplicaciones mobiles y plataformas en lanuibe, debido a su simplicidad y compatibilidad con multiples lenguajes de programacion
```js

```


---


## JavaScript VII / Callbacks, High order functions, asincronia, promesas, async await, destructuring, spread operator,  funciones anidadas, closures, web apis

```js
/*=========================
    Callbacks
===========================

Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan despues de que ocurra algun evento o se complete alguna operacion*/


// Ejemplo 1
function saludar(nombre, callback) {
    console.log(`Hola ${nombre}`);
    // Podemos realizar otras cosas

    callback(); // Aca invocamos la funcion que pasamos como argumento
}

function despedirse() {
    console.log("Chau, nos vemos");
}

saludar("Emiliano", despedirse); 
// Hola Emiliano
// Chau, nos vemos


// Ejemplo 2
function procesarDatos(datos, callback) {
    console.log("Procesando datos...");

    let resultado = datos.toUpperCase();

    callback(resultado); // Le pasamos a la funcion los datos en mayuscula como argumento
}

procesarDatos("hola mundo", (resultado) => {
    console.log("Resultado: ", resultado);
});


// Ejemplo 3 con un temporizador
setTimeout(() => {
    console.log("Esto se ejecuta despues de 1 segundo");
}, 1000);


/* Caracteristicas principales

1. Funciones de primera clase

En JavaScript, las funciones son tratadas como ciudadanos de primera clase "first class citizens", lo que significa que pueden ser:

    - Asignadas a variables
    - Pasadas como argumentos
    - Retornadas desde otras funciones
*/

// Asignar funcion a variable
let miCallback = function() {
    console.log("Callback ejecutado");
}

// Pasamos como argumento
function ejecutarCallback(callback) {
    callback(); // Invocamos la funcion que consologuea "Callback ejecutado"
}

ejecutarCallback(miCallback); // Callback ejecutado


// Callback sincrono -> Traba el hilo de ejecucion principal hasta que terminen las 50.000 vueltas de bucle

function procesoPesado(callback) {
    console.log("Iniciando proceso...");

    // Simulamos un procesamiento pesado
    for (let i = 0; i < 50000; i++) {
        //console.log(`Iteracion`)
    }

    callback(); // Aca se imprime "Proceso asincrono completado"
}


procesoPesado(function() {
    console.log("Proceso asincrono completado");
});


console.log("Esto se ejecuta despues del callback sincrono"); // Despues de 50.000 iteraciones, se imprime esto




// Callback asincrono -> No detiene el hilo de ejecucion principal
function procesoAsincrono(callback) {
    console.log("Iniciando proceso asincrono...");

    setTimeout(function() {
        callback()
    }, 2000);
}


procesoAsincrono(function() {
    console.log("Proceso asincrono de 2segs completado");
});

console.log("Esto se ejecuta inmediatamente");


/*========================================
    Casos de usos comunes de callbacks
=========================================*/

// 1. Temporizadores o timers
// setTimeout (se ejecuta una sola vez)
setTimeout(() => {
    console.log("Esto se ejecuta despues de 3 segundos");
}, 3000);


// setInterval (se ejecuta repetidamente)
let contador = 0;
let intervalo = setInterval(function() {
    contador++;

    console.log(`Contador: ${contador}`);
    
    if(contador === 5) {
        clearInterval(intervalo);
    }
}, 500);



// 2. Eventos del DOM
let botonCoso = document.getElementById("holis");

botonCoso.addEventListener("click", function(event) {
    console.log("Boton clickeado", event.target);
});



// 3. Operaciones con arrays
let numeros = [1, 2, 3, 4, 5];

// forEach
numeros.forEach(function(numero, indice) {
    console.log(`Indice: ${indice}, valor: ${numero}`);
});

// map
let duplicados = numeros.map(function(numero) {
    return numero * 2;
});

console.log(duplicados);


// filter
let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

console.log(pares);


// 4. Peticiones HTTP -> Ver abajo los ejemplos con la api fetch()


// 5. Lectura de archivos con Node.js -> Ver despues de JavaScript VIII


/* Una de los problemas que vamos a tener con los callbacks son:

- Callback hell: Un anidamiento excesivo que dificulta la lectura

- Flujo de control: Dificil de seguir con operaciones complejas

- Manejo de errores: Complicado con callbacks anidados



/////////////////////////
    Callback Hell
/////////////////////////

Ocurre cuando tenemos muchas funciones anidadas dentro de otras, especialmente al hacer tareas asincronicas. JavaScript maneja opreaciones asincronicas con callbacks: funciones que se ejecutan despues de que otra funcion termina

El codigo se vuelve dificil de leer, dificil de mantener y facil de romper.

Si no lo manejamos bien, terminamos con una esctructura asi:

Ejemplo de Hadouken de Ryu o Pyramid of Doom
https://blog.da2k.com.br/uploads/2015/03/hadouken.jpg
*/

// Cada setTimeout depende del anterior. El codigo funciona pero es feo y poco manejable
setTimeout(() => {
    console.log("Paso 1");

    setTimeout(() => {
        console.log("Paso 2");

        setTimeout(() => {
            console.log("Paso 3");
            
            setTimeout(() => {
                console.log("Paso 4");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);


/*Como solucionamos el callback hell y ordenamos el codigo asincrono?
Vamos a hacer que una cosa se ejecute ordenadamente despues de otra usando alternativas modernas a los callbacks:
    - Promises
    - async/await (Promises modernas)

    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/


// Vamos a consumir una API Rest con Promises, encadenando ordenadamente la operacion asincronica

// 1. Primero, traigo los datos JSON de esta URL
fetch("https://jsonplaceholder.typicode.com/users")

    // 2. Una vez obtenidos estos datos en crud, los transformamos a objetos JS
    .then(response => response.json())

    // 3. Ahora con estos datos ya convertidos, los imprimo por consola
    .then(data => console.table(data))

    // 4. En caso de saltar algun error en alguno de estos pasos previos, lo capturamos y lo mostramos aca
    .catch(error => console.error(error));


// Vamos a consumir otra API Rest con async/await, una sintaxis mas moderna para trabajar con promesas
async function obtenerDatos() {

    try {
        
        // 1. Traigo el choclo en texto plano JSON y DETENGO la ejecucion del codigo hasta que esto se resuelva o de error

        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        // Aca imprimimos la promesa
        // let response = await (fetch("https://jsonplaceholder.typicode.com/posts")).json();
        console.log(response);
        
        // 2. Obtenido el choclo JSON, lo transformo a objetos JavaScript
        let data = await response.json();
        
        // 3. Ya con el JSON parseado a Objectos JS, lo puedo manipular 
        console.table(data);
        
        
        // 4. En caso de haber error, salta y se captura acá, para mostrarse por consola
    } catch(error) {
        console.error(error);
    }
}


// obtenerDatos();



// TO DO: Ejercicio sugerido, rehacer el parcial, en lugar de usar un array de objetos simulado "mockeado" vamos a consumir los datos de un API Rest



/*=======================
    Destructuring
=========================

El destructuring (desestructuracion) es una sintaxis que permite extraer valores de arrays o propiedades de objetos y asignarlos a varaibles de forma concisa

Es una forma de descomponer estructuras de datos como arrays y objetos en variables individuales sin necesidad de acceder manualmente a cada elemento o propiedades


    - Mejora la legibilidad del codigo
    - Facilita el acceso rapido a datos de estructuras complejas
    - Reduce la verbosidad (menos lineas para obtener lo mismo)
    - Destructuring nos permite escribri codigo mas limpio, mas corto y mas claro
*/

// Sin destructuring
let nums = [1, 2, 3];
let uno = nums[0];
let dos = nums[1];

// Con destructuring
let [primero, segundo] = nums;
console.log(primero, segundo);


// Destructuring en parametros de funcion
function saludame({nombre, edad}) {
    console.log(`Holis ${nombre}, tenes ${edad}`);
}

let persona = { nombre: "Mirtha", edad: 98 };

// En la consola del navegador, si no desplegamos es copia, y desplegando es referencia
console.log(persona);

persona.edad = 105;
persona.ciudad = "CABA";


persona = {...persona, mundiales: 22 };
console.log(persona);
saludame(persona);

console.log({...persona});


// Destructuring de arrays con valores omitidos
let [prim, ,terc] = [10, 20, 30];
console.log(prim, terc);


// Rest operator con destructuring en arrays
let [a, ...resto] = [1, 2, 3, 4];
console.log(a);
console.log(resto);


// Rest operator con destructuring en objectos
let { nom, ...otros } = { nom: "Emiliano", edad: 29, pais: "Argentina" };
console.log(nom);
console.log(otros);


/*=====================
    Spread Operator
=======================

El Spread Operator o operador de propagacion -> ...
es una sintaxis introducida en ES6 que permite descomponer elementos iterables como arrays, strings y objetos en elementos individuales

Su principal funcion es copiar, combinar o expandir estructuras de datos de manera eficiente
*/

// (Shallow Copy) Copia superficial de arrays. 
// Cambios en copia no afectan al original. Pero en objetos anidados, estos si se referencian
let original = [1, 2, 3];
let copia = [...original];

console.log(copia);


// Concatenacion de arrays. Mas eficiente que concat
let arr1 = [1, 2];
let arr2 = [3, 4];

let combinado = [...arr1, ...arr2];
console.log(combinado);


// Convierte strings en arrays sin usar split('')
let string = "Holis";
let caracteres = [...string];
console.log(caracteres);


// Combinacion de objetos
let defaults = { tema: "oscuro", fontSize: 14 };
let userSettings = { fontSize: 18 };
let finalConfig = {...defaults, ...userSettings};
console.log(finalConfig);



/*=========================
    Funciones anidadas
===========================

Una funcion anidada es simplemente una funcion definida detro de otra funcion.
Es decir, una funcion interna que vive en el ambito lexico (scope) de una funcion externa

Una funcion anidada es una funcion que:
    - Se declara dentro de otra funcion
    - Tiene acceso a todas las varaibles y parametros de su funcion externa
    - Puede ser utilizada para organizar mejor el codigo, modularizar la logica o crear clouse


Las funciones anidadas heredan el entorno lexico (lexical scope) de la funcion que las contiene. Esto significa que pueden accesder a las varaibles de la funcion externa, pero no al reves.*/

function saluditos(nombre) {
    function construirMensaje() { // construirMensaje esta anidada dentro de saludar()
        return `Hola holita, ${nombre}`; // Tiene acceso a nombre aunque la variable no esta definida atroden
    }

    return construirMensaje();
}

console.log(saluditos("Francisco"));


function externa() {
    let mensaje = "Holis desde fuera";

    function interna() {
        console.log(mensaje);
    }

    interna();
}

externa();

/*
Usos comunes de funciones anidadas:

1. Organizacion del codigo: En lugar de escribir una gran funcion, se pueden definir sub-funciones internas para modularizar la logica*/
function procesarTexto(texto) {

    function limpiar(t) {
        return t.trim().toLowerCase();
    }

    function contarPalabras(t) {
        return t.split(/\s+/).length;
    }

    let limpio = limpiar(texto);

    return (contarPalabras(limpio));
}

console.log(procesarTexto("    Hola    holita vecinito         como va?    "));



// 2. Funciones "helper" privadas. Las funciones internas no son accesibles desde fuera, por lo que simulamos privacidad

function crearUsuario(nombre) {
    
    function validarNombre(n) {
        return typeof n === "string" && n.length > 2;
    }

    if(!validarNombre) {
        throw new Error("Nombre no valido");
    }

    return nombre;
}


// 3. Generacion de closures: Las funciones anidadas pueden cerrar sobre variables de la funcion externa creando closures

function contadorr() { 
    let cuenta = 0;

    return function() { // contadorr retorna una funcion interna anonima
        cuenta++;
        return cuenta; // Esta funcion recuerda la variable cuenta aunque contadorr ya termino su ejecucion
    }
}

let incrementar = contadorr();
// Cada vez que llamamos a contadorr, estamos invocando la misma closure que mantiene su propio estado interno
console.log(incrementar()); 
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());


/* En resumen

- Las funciones anidadas son funciones declaradas dentro de las otras fucniones
- Acceden a variables de su funcion externa (scope lexico)
- Las funciones internas son privadas al bloque donde se definenn
- Usos comunes: Modularizacion, privacidad, closures, logica auxiliar interna (sub-funciones)



=======================
    Closures
=======================

Una closure es una funcion que recuerda el entorno (scope) en el que fue creada, incluso despues de que ese entorno haya finalizado su ejecucion.

Por tanto, una funcion interna puede acceder a variables de su funcion externa incluso despues de que esta haya terminado de ejecutarse

Cuando creamos una funcion dentro de otra funcion, se crea una closure. La funcion interna captura las variables de su entorno externo y mantiene una referencia a ellas.


Que nos permiten las closures?

    - Recordar valores sin usar variables globales
    - Crear funciones privadas
    - Hacer el codigo mas limpio y modular


JavaScript Closures

Los closures en JavaScript tienen múltiples usos prácticos y son fundamentales en el desarrollo de aplicaciones. Uno de sus usos más comunes es la creación de contadores y acumuladores privados, donde una función interna puede mantener y modificar un estado entre llamadas, como en el caso de un contador que incrementa una variable local incluso después de que la función externa haya finalizado su ejecución  Este patrón permite encapsular datos y funciones en un ámbito privado, lo que es esencial para implementar el patrón de diseño módulo en JavaScript 

En resumen, los closures permiten mantener estado entre llamadas, encapsular datos, crear funciones personalizadas y facilitar el manejo de contextos en operaciones asíncronas y eventos, lo que los convierte en una herramienta poderosa y ampliamente utilizada en JavaScript 
*/


/*===========================
    High Order Functions
=============================

Una High Order Function o Funcion de Alto Nivel es una funcion que cumple al menos una de estas dos condiciones
    1. Recibe una o mas funciones como argumentos (map, filter, reduce)
    2. Devuelve una funcion como resultado


Ventajas de las HOF

    - Reduccion de codigo repetitivo
    - Mayor legibilidad y expresividad
    - Composicion funcional: podemos encadenar transformaciones como map().filter().reduce()
*/

console.log("Funciones de Alto Nivel");


// Ejemplo 1: Recibe una funcion
// let numeros = [1, 2, 3, 4, 5];

const cuadrados = numeros.map(n => n* n);
console.log(cuadrados);


// Ejemplo 2: Devuelve una funcion
function multiplicador(factor) {
    return function (x) {
        return x * factor;
    }
}

const duplicar = multiplicador(2);
console.log(duplicar(5));


/* =================================
    Relacion entre Callbacks y HOF
====================================

    - Callback es la funcion que se pasa como argumento
    - HOF es la funcion que recibe o devuelve funciones
    - Ambas estan relacionadas pero no son equivalentes: Un callback es usando dentro de una HOF, pero no todas la HOF usan callbacks explicitamente (porque pueden devolver funciones en lugar de recibirlas)



=====================================
    Desmenuzando el ejemplo de map
=====================================

    let numeros = [1, 2, 3, 4, 5];

    const cuadrados = numeros.map(n => n* n);


1. map es un metodo de array y tambien es una High Order Function (HOF)
Se llama HOF porque recibe como argumento otra funcion

2. Esa funcion que recibe se ejecuta una vez por cada elemento del array
A esa funcion que recibe la llamamos callback


El callback de esta funcion es
    n => n * n

Es una funcion flecha con parametro "n"
Es el equivalente a escribirlo con function

    function(n) {
        return n * n
    }


Por dentro, map hace algo parecido a esto

function map(array, callback) {
    const nuevoArray = []
    // Recordemos las formas que teniamos de hacer estos metodos a mano tanto con for clasico como con forEach
}

Lo que termina resultando es

    - Iteracion 1 => 1 * 1 = 1
    - Iteracion 2 => 2 * 2 = 4

El callback en nuestro ejemplo es la funcion flecha 
    n => n * n

que map invoca internamente para cada elemento en el array
*/


// Ejemplo de HOF que acepta una funcion callback
function highOrderFunction(callback) {
    // Ejecuta x operaciones
    console.log("Ejecutando la funcion de alto nivel..");

    // Llama a la funcion callback
    callback();
}

function funcionCallback() {
    console.log("Ejecutando la funcion callback");
}

// Llamamos a la HOF con la funcion callback como argumento
highOrderFunction(funcionCallback);


// High Order Function comunes en JavaScript

// forEach: Recorre todos los elementos de un array y ejecuta una funcion sobre cada uno
numeros.forEach(function(num) {
    console.log(num * 2);
});

// map: Crea un nuevo array aplicando una funcion a cada elemento del array original
const alCuadrado = numeros.map(x => x ** 2);
console.log(alCuadrado);

// filter: Crea un nuevo array con los elementos que cumplen una condicion
const numerosPares = numeros.filter(n => n % 2 === 0);
console.log(numerosPares);



/*====================
    Web APIs
======================

API significa Application Programming Interface (Interfaz de Programacion de Aplicaciones).

Una API basicamente es un conjunto de funciones y herramientas que se usan para interactuar con algo, como el navegador, el servidor, una libreria.


Que es una Web API?

- En el contexto del navegador, una Web API es una funcion o conjunto de funciones que el navegador nos entrega para que las usemos con JavaScript

- JavaScript por si solo es un lenguaje de programacion muy basico. Pero cuando se ejecuta en un navegador, puede acceder a funcionalidades especiales que el navegador le proporciona como:

    - Manipular el DOM: document.getElementById()

    - Esperar un tiempo: setTimeout()

    - Hacer peticiones HTTP: fetch()

    - Trabajar con audio, video, GPS, etc


Como se relaciona esto con JavaScript?

    - JavaScript es el lenguaje
    - Las Web APIs son funciones extra que el navegador le presta a JS para hacer cosas utiles
    - JavaScript usa estas APIs, pero no las define




==================================
    Tipos de Web APIs comunes
==================================


Tipos de Web APIs comunes

1. APIs del DOM (Document Object Model)
- Permiten acceder y modificar el HTML y CSS de la pagina
- Manipulacion de elementos, eventos, clases, estilos,etc

    - document.querySelector()
    - document.createElement()
    - document.addEventListener()
    - classList.add()


2. APIs de Red
- Permiten comunicarnos con servidores o cargar recursos
- Peticiones HTTP, chats, notificaciones en tiempo real

    - fetch() -> Para realizar solicitudes HTTP
    - XMLHttpRequest -> Version mas antigua del fetch
    - WebSocket -> Comunicacion en tiempo real (chats)
    - EventSource -> Eventos Server-Sent (actualizaciones en tiempo real)


3. APIs de almacenamiento
- Guardar informacion en el navegador
- Guardar preferencias, datos de sesion, apps sin conexion, ble

    - localStorage()
    - sessionStorage()
    - Cookies (mediante document.cookie)
    - IndexedDB*

    * Qué es IndexedDB
    https://es.javascript.info/indexeddb

    IndexedDB es una API de JavaScript que permite el almacenamiento de grandes cantidades de datos estructurados en el navegador del usuario, funcionando como una base de datos NoSQL orientada a objetos  A diferencia de localStorage, que está limitado a pequeñas cantidades de datos, IndexedDB está diseñado para manejar volúmenes significativos de información, incluyendo archivos y blobs, y permite búsquedas de alto rendimiento mediante índices  Es una tecnología transaccional, lo que garantiza la integridad y consistencia de los datos durante operaciones como inserciones, actualizaciones y eliminaciones  Además, sigue la política de mismo origen, lo que significa que solo las páginas web del mismo dominio pueden acceder a los datos almacenados en una base de datos específica 


4. Timers o temporizadores
- Permiten ejecutar funciones luego de un cierto tiempo
- Retrasos, animaciones, polling

    - setTimeout()
    - setInterval()
    - clearTimeout() y clearInterval()


5. APIs de Dispositivos y Multimedia
- Interaccion con hardware o medios
- Apps, mobiles, camara, permisos, grabaciones, notificaciones

    - navigator.geolocation -> GPS
    - MediaDevices.getUserMedia() -> Microfono y camara
    - Notification -> Notificaciones del sistema
    - Battery API, Clipboard API -> Para interactuar con la bateria, con el sistema de copiar-pegar


6. APIs de Interfaz Grafica
- Controlan animaciones, graficos y visualizacion
- Juegos, visualizaciones, graficos dinamicos, etc

    - Canvas API
    - WebGL -> https://es.wikipedia.org/wiki/WebGL
    - Fullscreen API
    - Screen Orientation API


En resumen:

- JavaScript puro es simple
- Pero el navegador le da superpoderes con las Web APIs
- Estas APIs permiten que JavaScript haga cosas reales, como hablar con servidores, manipular la pagina, guardar datos, usar la camara, etc
*/
```

---

## JavaScript VI / Manipulacion del DOM en JavaScript y Eventos
```js
/* ====================================
    DOM en JavaScript
=======================================

El DOM (Document Object Model) o Modelo de Objeto de Documento, es una interfaz de programacion que representa un documento HTML como una estructura jerarquica de objetos, conocida comunmente como arbol DOM.

Esta estructura permite a JavaScript acceder, modificar o añador elementos, contenido, estilos y atributos de forma dinamica.

Cada elemento HTML se convierte en un nodo dentro de este arbol y todos los elementos estan relacionados entre si mediante padres, hijos y hermanos, creando una representacion en memoria del documento que el navegador pueda manipular.

Transforma el HTML en una estructura de nodos y objetos que puede ser manipulado con JavaScript. Cada etiqueta HTML es un nodo en el DOM.


Ejemplo de estructura DOM__________

<!DOCTYPE html>
<html>
    <head>
        <title>Mi página</title>
    </head>
    <body>
        <h1>Bienvenidos</h1>
        <p>Este es un párrafo</p>
    </body>
</html>



Este HTML seria representado en el DOM como una estructura en forma de arbol.
document es el objeto que representa toda la pagina web

Diagrama de arbol del DOM__________

- document
    - html
        - head
            - title
        - body
            - h1
            - p


Como funciona la manipulacion del DOM?

JavaScriptt puede acceder y modificar cualquier elemento del DOM, utilizando el objeto global document.

JavaScript puede
    - Modificar el contenido (textos, atributos, clases)
    - Añadir o eliminar elementos del DOM
    - Escuchar eventos de usuario (clicks, teclas, etc) 
    
    
============================
    Seleccionar elementos   
============================

- getElementById():         Selecciona un elemento por su Id. Este es el metodo clave que usamos siempre
- querySelector():          Selecciona el primer elemento que coincida con un selector CSS
- querySelectorAll():       Selecciona todos los elementos que coincidan con un selector CSS

- getElementByClassName():  Selecciona todos los elementos que tengan una clase especifica
- getElementsByTagName():   Selecciona todos los elementos de un tipo de etiqueta dado
*/


// getElementById()
// Este metodo selecciona un unico elemento por su id. Si no lo encuentra, devuelve null

let titulo = document.getElementById("titulo");
console.log(titulo); // <h1 id="titulo">Titulo principal</h1>
console.log(titulo.textContent); // Titulo principal


// querySelector() y querySelectorAll()
// querySelector: Selecciona el PRIMER elemento que coincida con un selector CSS (#nombreId, .nombreClase, etiqueta)
// querySelectorAll: Selecciona TODOS los elementos que coincidan con el selector CSS y devuelve una NodeList (similar a un array

// let primerParrafo = document.querySelector("#primerParrafo");
let primerParrafo = document.querySelector(".mensaje");
console.log(primerParrafo.textContent);

let parrafos = document.querySelectorAll(".mensaje");
console.log(parrafos); // NodeList(2) [p#primerParrafo.mensaje, p.mensaje]

parrafos.forEach(par => console.log(par.textContent));



// Cambiar el texto del parrafo
let parrafo = document.querySelector("#parrafo");

parrafo.textContent = "Soy el nuevo texto dinamico introducido desde JavaScript";

parrafo.innerHTML = "Y aca me volvieron a cambiar <strong>zarpado man</strong>";


// Modificar atributos
let boton = document.getElementById("boton");

boton.setAttribute("id", "nuevoId");

boton.style.backgroundColor = "green";

boton.style.color = "white";

boton.style.padding = "10px";


/* Alternativa mas segura a innerHTML

Podemos crear, insertar o eliminar elementos del DOM sin usar innerHTML y sin la posibilidad de poder introducir srcipts

- createElement():  Crean un nuevo elemento HTML
- appendChild():    Añaden un elemento como hijo de otro
- removeChild():    Elminina un elemento hijo de su nodo padre
- textContent():    Añade un contenido de texto plano


Comparacion

Con innerHTML______________________________________________
document.getElementById("container").innerHTML = "<p>Hola mundo</p>";

    - Tecnicamente, innerHTML puede ejecutar scripts maliciosos si usamos datos del usuario sin validar


Con createElement + appendChild____________________________
const p = document.createElement("p")
p.textContent = "Hola mundo";
document.getElementById("container").appendChild(p)

    - createElement y appendChild no interpretan HTML y evitan inyecciones de codigo por defecto, por eso son mas seguro
*/




/*==========================
    Eventos en JavaScript
============================

Los eventos en JavaScript permiten a los desarrolladores detectar interacciones del usuario con la pagina web, como hacer click en un boton, mover el mouse, escribir en un campo de texto, etc

Los eventos son fundamentales para hacer que la pagina sea interactiva.

Un evento es una señal que se envia cuando ocurre una interaccion o cambio en el documento, como un click, una pulsacion de tecla, etc.

JavaScript permite escuchar estos eventos y ejecutar funciones especificas cuando ocurren


- Eventos de mouse:         click, dbclick, mouseover, mouseout, mousemove

- Eventos de teclado:       keydown, keyup

- Eventos de formulario:    submit, change, input, focus

- Eventos de ventana:       resize, scroll, load, unload
*/


let botonClickeable = document.getElementById("botonClickeable");

// Escuchamos el evento click
botonClickeable.addEventListener("click", function() {
    console.log("Holis! Soy un mensaje por consola");
});



// Vamos a registrar las teclas pulsadas
let input = document.getElementById("input");

// Registramos por consola el valor del campo de texto
input.addEventListener("keyup", function() {
    // console.log(input.value); 
});


// Registramos por consola cada tecla que pulsamos
// El objeto global event, contiene todos los datos del evento y nos permite acceder a la informacion del evento que fue disparado

input.addEventListener("keydown", function(event) {
    console.log(`Tecla presionada: ${event.key}`);
    console.log(`Clave de la tecla presionada: ${event.code}`);
});



/*==============================
    Propagacion de eventos
================================

Cuando ocurre un evento, este se propaga a traves del DOM en dos fases:
    
    - Fase de captura: De arriba para abajo
    - Fase de burbuja: De abajo para arriba

Podemos detener la propagacion de un evento usando el metodo event.stopPropagation()

El metodo event.preventDefault() se usa para evitar el comportamiento predeterminado de un elemento. Por ejemplo, evitar que un formulario se envie al hacer click en el boton submit
*/

//////////////////////////////
// event.stopPropagation() //

let padre = document.getElementById("padre");
let hijo = document.getElementById("hijo");

// Escuchamos el click en el div padre 
padre.addEventListener("click", function() {
    console.log("Se hizo click en el div padre");
});

// Escuchamos el click en el boton hijo
hijo.addEventListener("click", function(event) {
    event.stopPropagation(); // Evitamos la propagacion de eventos
    console.log("Se hizo click en el boton hijo");
});



/////////////////////////////
// event.preventDefault() //

let formulario = document.getElementById("formulario");

// Evitamos que el formulario se envie por defecto
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulario no enviado!");
});


// EXTRA, renderizando una lista en el HTML

const usuariosWeb = [
    {id: 1, nombre: "Gricel", activo: true, rol: "user"},
    {id: 2, nombre: "Francisco", activo: false, rol: "admin"},
    {id: 3, nombre: "Leon", activo: true, rol: "user"}
];

// Arranco definiendo el contenedor de una lista HTML
let contenedorLista = document.getElementById("contenedorLista");
let listadoHTML = "<ul>";

usuariosWeb.forEach(user => {
    listadoHTML += `<li>id: ${user.id} / nombre: ${user.nombre} / rol: ${user.rol}</li>`;
});

listadoHTML += "</ul>";

console.log(listadoHTML);

// Renderizamos nuestro choclo HTML en formato string en nuestro document
let mostrarLista = document.getElementById("mostrarLista");

mostrarLista.addEventListener("click", renderizarLista);

function renderizarLista() {
    contenedorLista.innerHTML = listadoHTML;
}


// Propuesta de portfolio, hagan una calculadora web!
```

---


## JavaScript V / Objetos, clases y objetos globales. Almacenamiento persistente, iteracion en arrays, iteracion en objetos e iteracion en arrays de objetos

```js
/* ====================================
    Objetos Globales en JavaScript
=======================================

El entorno de ejecucion es el lugar donde podemos correr JavaScript. Podemos correrlo en el navegador y en Node.js

El navegador es el Entorno de Ejecucion de JavaScript. Es decir, es donde ejecutamos JavaScript y nos proporciona un motor para interpretar codigo JavaScript, tambien nos proporciona herramientas y facilidades para introducir codigo, depurar, etc

El entorno de ejecucion de JavaScript que veremos despues de frontend. Va a ser Node.js, Express.js sera el framework que trabaja sobre este nuevo entorno de ejecucion.


Los entornos de ejecucion, sea el navegador o sea Node.js, nos proporcionan Objetos Globales.
Estos son objetos que estan disponibles en todo el entorno de ejecucion sin necesidad de importarlos o declararlos explicitamente. Varian depende del entorno de ejecucion.
Pero la idea central de los objetos globales es facilitarnos el acceso a ciertas funciones o valores predeterminados



============================================
    Objetos globales en el navegador
============================================

En el entorno del navegador, los objetos globales incluyen todos los objetos estandar de JavaScript (como Array, String, Object, etc), asi como todo un conjunto de objetos especificos para la interaccion con la pagina web y su entorno


El objeto global principal en el entorno del navegador es window.
Este objeto representa toda la ventana del navegador y actua como el contenedor global para todas las variables, funciones definidos en el ambito global y estna automaticamente disponibles como propiedaes del objeto window.


Objetos y metodos importantes del objeto window

- document: Representa el DOM de la pagina web actual, permitiendo el acceso y la manipulacion de elementos HTML. El DOM es la representacion en memoria de una pagina HTML y gracias al DOM, podremos manipular la pagina web con JavaScript


- alert(), prompt(), confirm(): Metodos que permiten mostrar dialogos al usuario y recoger input


- setTimeout() y setInterval(): Metodos para programar la ejecucion de codigo despues de un tiempo (setTimeout) o en intervalos regulares (setInterval)

- location: Proporciona informacion sobre la URL actual de la pagina y permite redireccionar a otras URL

- navigator: Proporciona informacion sobre el navegador, com la version, el agente de usuario y la geolocalizacion

- console: Proporciona acceso a la consola del navegador para mostrar mensajes de depuracion

- history: Proporciona acceso al historia de navegacion del navegador


===================================
    Objetos globales en Node.js
===================================

En Node.js, el entorno de ejecucion no tiene un objeto window como en los navegadores. En su lugar existen otros objetos globales diseñados para trabajar con servidores, archivos y otros aspectos del Sistema Operativo

- process: Proporciona información y control sobre el proceso de ejecución de Node.js

- __dirname y __filename: Variables globales que contienen la ruta al directorio actual y al archivo actual, respectivamente.

- setTimeout y setInterval: Igual que en los navegadores, estos métodos permiten programar la ejecución de funciones de manera
asincrónica.

- console: Igual que en el navegador, proporciona acceso a la consola para depuracion y mensajes
*/


// Probando setTimeout y setInterval
// setTimeout(() => console.log("Holi despues de 1 segundo"), 1000);
// setInterval(() => console.log("Holi despues de 1 segundo"), 1000);


// location: Proporciona informacion sobre la URL actual de la pagina y permite redireccionar a otras URL
console.log(window.location.href);


// navigator: Proporciona informacion sobre el navegador, com la version, el agente de usuario y la geolocalizacion
console.log(navigator.userAgent);
console.log(navigator);


// console: Proporciona acceso a la consola del navegador para mostrar mensajes de depuracion
console.log(console);


// history: Proporciona acceso al historia de navegacion del navegador
console.log(history);



/* ===================================
    Almacenamiento de datos en JS
======================================

JavaScript proporciona varios tipos de estructuras para almacenar datos

- Variables simples:    valores unicos como numeros, strings
- Objetos:              para representar datos complejos con propiedades
- Arrays:               Para almacenar una serie de elementos, idealmente del mismo tipo
- Arrays de objetos:    Para manejar listas de elementos complejos que contienen multiples propiedades


Cuando usar arrays?
    - Para listas ordenadas de elementos individuales (lista nombres)


Cuando usar objetos?
    - Cuando deseamos representar una entidad unica con multiples atributos
    - Cuando sabemos que no habra multiples instancias o copias de estos datos en la aplicacion
    - Cuando necesitamos acceder a propiedades especificas mediante sus nombre


Cuando usar arrays de objetos?
    - Cuando necesitamos almacenar multiples instancias de una entidad o estructura de datos
    - Cuando planeamos realizar operaciones sobre una lista de elementos, como iteraciones, filtrados o agrupaciones
    - Si necesitamos aplicar metodos de arrays como map, filter, reduce, find, etc
    - Ejs: listado de usuarios, inventario de productos, historial de registros, etc



========================================================
    Iteracion en arrays, objetos y arrays de objetos
========================================================

Iteracion de arrays: Arrays como una lista ordenada de elementos accesibles por indice

Bucle for clasico

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    - Maximo control, podemos usar break y continue. Muy eficiente
    - Como desventajas, mas verboso (mas difil de leer)


forEach()

    array.forEach((elemento, índice, arrayOriginal) => {
        console.log(elemento, índice);
    });

    - Sintaxis limpia, no necesita contador
    - Como desventajas, es mas lento y no se puede romper el bucle (break, continue)


map()
    const nuevosValores = array.map(elemento => elemento * 2);

    - Transforma cada elemento
    - Retorna un nuevo array con los resultados


filter()
    const filtrados = array.filter(elemento => elemento > 10);

    - Selecciona los elementos que cumplan una condicion
    - Retorna un nuevo array con los elementos filtrados


reduce()
    const suma = array.reduce((total, elemento) => total + elemento, 0);

    - Reduce el array a un unico valor
    - Retorna el valor acumulado


find() y findIndex()
    const encontrado = array.find(elemento => elemento.id === 123);
    const indice = array.findIndex(elemento => elemento.id === 123);

    - Buscan el primer elemento que cumpla una condicion
    - Retorna el elemento -> find o indice -> findIndex (o devuelve undefined o -1 si no lo encuentra)



for...of

    for (const elemento of array) {
        console.log(elemento);
        if (elemento === "stop") {
            break;
        }
    }

    - Proporciona una sintaxis limpia, permite break y continue
    - No provee indice automatico



some() y every() 
    const algunoCumple = array.some(elemento => elemento > 0);
    const todosCumplen = array.every(elemento => elemento > 0);

    - Verifica si alguno o todos cumplen una condicion
    - Retorna un booleano
*/

////////////////////////
// Bucle for clasico //

// Sumando elementos
let numeros = [1, 2, 3, 4, 5];
let suma = 0;

for(let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
console.log(suma);

// Buscar elemento
const frutas = ["manzana", "banana", "naranja"];

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].startsWith("ban")) {
        console.log(frutas[i]);
        break;
    }
}


// Filtrando objetos
// Lista ordenada de elementos del mismo tipo
const productos = [
    { id: 1, nombre: "laptop", precio: 1000, cantidad: 1, completada: true },
    { id: 2, nombre: "mouse", precio: 20, cantidad: 2, completada: false },
    { id: 3, nombre: "teclado", precio: 50, cantidad: 3, completada: true },
    { id: 4, nombre: "tarjeta grafica", precio: 200, cantidad: 2, completada: true },
    { id: 5, nombre: "monitor", precio: 100, cantidad: 4, completada: false },
    { id: 6, nombre: "pendrive", precio: 10, cantidad: 2, completada: false }
];

console.log(productos.length); // 6
console.log(productos[2]); // {id: 3, nombre: 'teclado', precio: 50}
console.log(productos[1].precio); // 20

let productosCaros = [];

for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > 100) {
        productosCaros.push(productos[i]);
    }
}

console.log(productosCaros);


////////////////////
// Bucle forEach //

// Imprimos elementos
let colores = ["rojo", "verde", "azul"];

colores.forEach(color => console.log(color));


// Modificar array externo
// let numeros = [1, 2, 3, 4, 5];
let numerosDobles = [];

numeros.forEach(num => numerosDobles.push(num * 2));
console.log(numerosDobles);


// Actualizar propiedades
let estudiantes = [
    { nombre: "Gricel", nota: 10},
    { nombre: "Francisco", nota: 9},
    { nombre: "Mirko", nota: 8},
    { nombre: "Xabi", nota: 2},
    { nombre: "Leon", nota: 7},
    { nombre: "Miguel", nota: 3}
];

console.log(estudiantes);

/* Recordemos como se agregaban y eliminaban propiedades en un objeto

persona.preferencias = "Backend"; // Agregamos la propiedad preferencias y un valor

delete persona.ciudad; // Eliminamos la propiedad ciudad
*/

// Crearemos la propiedad aprobado para todos los alumnos que superen el 4
estudiantes.forEach(estud => {

    estud.aprobado = estud.nota >= 4;

    /* Otra manera de resolver la instruccion de arriba

    if (estud.nota >= 4) {
        estud.aprobado = true;
    } else {
        estud.aprobado = false;
    }
    */
});


//////////
// map //

// Crear un array de cuadrados
// let numeros = [1, 2, 3, 4, 5];

let cuadrados = numeros.map(num => num * num);
console.log(cuadrados);


// Convertimos a string
let edades = [23, 20, 33, 30, 25];
let edadesStr = edades.map(edad => `Tengo ${edad} años`); // "tengo " + edad + " años"
console.log(edadesStr);


/* Extraer propiedades

    let estudiantes = [
        { nombre: "Gricel", nota: 10},
        { nombre: "Francisco", nota: 9},
        { nombre: "Mirko", nota: 8},
        { nombre: "Xabi", nota: 2},
        { nombre: "Leon", nota: 7},
        { nombre: "Miguel", nota: 3}
    ];*/

let estudNombre = estudiantes.map(estud => estud.nombre);
console.log(estudNombre);


/* No usemos para nombres de variables caracteres especiales del idioma

    - let año -> Nada recomendable
    - let anio -> La mejor opcion

    - Idealmente usaremos nombres en ingles 
*/



/////////////
// filter //

// Documentacion de filter de mdn para chusmear https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// Filtrar numeros pares
let masNumeros = [1, 2, 3, 4, 5, 6, 7, 8];

let numerosPares = masNumeros.filter(num => num % 2 === 0);
console.log(numerosPares);


// Filtrar palabras largas
let palabras = ["hola", "holiiita", "veciniiiiito", "chau"];

let palabrasLargas = palabras.filter(palabra => palabra.length > 4);
console.log(palabrasLargas);


/* Filtrar por notas
    let estudiantes = [
        { nombre: "Gricel", nota: 10},
        { nombre: "Francisco", nota: 9},
        { nombre: "Mirko", nota: 8},
        { nombre: "Xabi", nota: 2},
        { nombre: "Leon", nota: 7},
        { nombre: "Miguel", nota: 3}
*/

// const predicate = 2 > 1; 
// Recordemos que en las funciones flecha con un solo parametro, los parentesis son opcionales
let altosEstudiantes = estudiantes.filter((estudiante) => estudiante.nota > 7);
console.log(altosEstudiantes);


/* Filtrar multiples condiciones

const productos = [
    { id: 1, nombre: "laptop", precio: 1000, cantidad: 1, completada: true },
    { id: 2, nombre: "mouse", precio: 20, cantidad: 2, completada: false },
    { id: 3, nombre: "teclado", precio: 50, cantidad: 3, completada: true },
    { id: 4, nombre: "tarjeta grafica", precio: 200, cantidad: 2, completada: true },
    { id: 5, nombre: "monitor", precio: 100, cantidad: 4, completada: false },
    { id: 6, nombre: "pendrive", precio: 10, cantidad: 2, completada: false }
];
*/
// Filtramos aquellos productos que esten completados y que tengan > 1 cantidad en stock
let checkProductos = productos.filter(prod => prod.completada && prod.cantidad > 1);
console.log(checkProductos);



/////////////
// reduce //

/* Muy similar a la primer operacion del for clasico (total viene a reemplazar a suma)

    let numeros = [1, 2, 3, 4, 5];
    let suma = 0;

    for(let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    console.log(suma);*/

// Sumar elementos
const decenas = [10, 20, 30, 40, 50];

const sumaDecenas = decenas.reduce((total, num) => total + num, 0);
console.log(sumaDecenas);


// Sumar propiedades con reduce
const ventasRopa = [
    { producto: "Remera", cantidad: 3, precio: 25},
    { producto: "Pantalon", cantidad: 2, precio: 40},
    { producto: "Zapatos", cantidad: 1, precio: 80}
];

// cantidad x precio
let precioTotal = ventasRopa.reduce((total, item) => total + (item.cantidad * item.precio), '0');
console.log(precioTotal);


///////////
// find //

// Buscamos numero mayor a 10
const numerosRandom = [5, 12, 8, 130, 44];

// con find encontramos el primer elemento del array mayor a 10
let mayorADiez = numerosRandom.find(num => num > 10);
console.log(mayorADiez); // 12

// con findIndex buscamos el indice del primer numero mayor a 100
let mayorACien = numerosRandom.findIndex(num => num > 100);
console.log(mayorACien); // Devuelve 3 porque 130 esta en el indice 3 del array


// Buscamos objeto por propiedad
const usuariosWeb = [
    {id: 1, nombre: "Gricel", activo: true, rol: "user"},
    {id: 2, nombre: "Francisco", activo: false, rol: "admin"},
    {id: 3, nombre: "Leon", activo: true, rol: "user"}
];

// Buscamos el primer usuario activo
let usuarioActivo = usuariosWeb.find(user => user.activo);
console.log(usuarioActivo);



///////////////
// for...of //

// Iteramos simbolos con posibilidad de break
const simbolos = ['€', '$', '¥', '£'];

for (let simbolo of simbolos) {
    if (simbolo === "¥") {
        break;
    }
    console.log(simbolo);
}


// Iteramos objetos
const empleados = [
    { nombre: "Jonathan", salario: 3000 },
    { nombre: "Mirko", salario: 3500 },
    { nombre: "Emiliano", salario: 4000 }
];

// Filtramos el empleado que gane mas de 3500
for (let empleado of empleados) {
    if (empleado.salario > 3500) {
        console.log(`${empleado.nombre} gana altos morlacos`);
        break;
    }
}



///////////////////
// some y every //

const listaNums = [1, 3, 5, 7, 8];

// Verificamos si hay numeros pares
let hayPar = listaNums.some(num => num % 2 === 0);
console.log(hayPar);


// Verificamos si son todos positivos
let todosPositivos = listaNums.every(num => num > 0);
console.log(todosPositivos);

/* Preguntamos si hay algun usuario admin

const usuariosWeb = [
    {id: 1, nombre: "Gricel", activo: true, rol: "user"},
    {id: 2, nombre: "Francisco", activo: false, rol: "admin"},
    {id: 3, nombre: "Leon", activo: true, rol: "user"}
];
*/

let hayAdmin = usuariosWeb.some(usuario => usuario.rol === "admin");
console.log(hayAdmin);


/*===========================
    Iteracion en objetos
=============================

- Objetos como una coleccion de pares clave-valor
- Acceso a propiedades y modificacion de vaores

    - for...in
    - Object.keys(), Object.values(), Object.entries() */


const estudiante = { nombre: "Adrian", edad: 21, curso: "Progra III"};

// Usamos for...in para iterar claves
for (let propiedad in estudiante) {
    console.log(`${propiedad}: ${estudiante[propiedad]}`);
    
}


// Usamos Object.keys() para obtener claves
const claves = Object.keys(estudiante);
console.log(claves);
claves.forEach(clave => console.log(clave));


// Usamos Object.values() para obtener valores
const valores = Object.values(estudiante);
console.log(valores);


// Object.entries() para obtener pares clave-valor
for (const [clave, valor] of Object.entries(estudiante)) {
    console.log(`${clave} : ${valor}`);
}




/*================================
    Comparacion de rendimiento
==================================

1. Bucles clasicos: (for, while, etc) son los mas rapidos para iteraciones simples

2. Metodos funcionales: (map, filter, etc) son mas lentos pero mas expresivos

3. for...of ofrece un buen equilibrio entre rendimiento y legibilidad


Recomendaciones de uso:

- Transformar un array:     map()
- Filtrar elementos:        filter()
- Reducir a un valor:       reduce()
- Buscar un elemento:       find() o findIndex()
- Necesitamos romper bucle: for y for...of
- Verificar condiciones:    some() y every()
*/


/* Ejercicio opcional de refuerzo: 
// Contar cuántas veces aparece una letra específica dentro de un array de caracteres.
const letras = ["a", "b", "c", "a", "d", "e", "a", "f", "b", "c", "g", "h", "a", "b"];
*/
```

---


## JavaScript IV / Introduccion a arrays. Metodos de strings y arrays
```js
/* =======================
    Arrays y objetos
==========================
En JS los arrays y objetos son estructuras de datos fundamentales.
Los arrays se utilizan para almacenar una lista ORDENADA de elementos.
Los objetos son ideales para almacenar datos con propiedades clave-valor.


Un array es una lista ordenada de elementos, donde cada uno tiene una posicion o indice.
Los arrays pueden conteneer cualquier tipo de datos (numeros, strings, booleanos, otros arrays, objetos, funciones, etc)


Un objeto es una coleccion de pares clave-valor.
Las claves son cadenas que identifican cada valor, lo cual permite un acceso rapido y estructurado a los datos
Los objetos son utiles cuando deseamos representar una entidad con multiples propiedades.

Podemos acceder a un objeto a traves de 
    - notacion de punto:    objeto.propiedad
    - notacion de corchete: objeto["propiedad"]

Los objetos pueden tener metodos, que son funciones almacenadas en una propiedad


==================
    Comparacion
==================

Uso principal
    - Array: Lista ordenada de elementos
    - Objeto: Coleccion pares clave-valor


Acceso a datos:
    - Array: Por indice -> array[0]
    - Objeto: Por clave -> objeto.clave / objeto["clave"]

Metodos:
    - Array: push(), pop(), forEach()
    - Objetos: Metodos personalizados y funciones

Iteracion
    - Arrays: forEach(), map(), etc
    - Objetos: for...in, Object.key(), Object.values(), Object.entries()
*/

// Array en JavaScript
let frutas = ["pera", "banana", "pomelo"];
console.log(frutas[0]); // Accedemos a la primera posicion, notacion 0
console.log(frutas[2]); // Accedemos a la tercer posicion


// Creacion de un objeto literales
let persona = {
    nombre: "Miguel",
    edad: 23,
    ciudad: "Buenos Aires",
    presentacion: function() {
        // this hace referencia al objeto desde el cual se esta invocando el metodo
        console.log(`Hola! me llamo ${this.nombre} y soy de ${this.ciudad}`);
    }
};

console.log(persona);
console.table(persona);


console.log(persona.nombre); // Miguel
console.log(persona["ciudad"]); // Buenos Aires
persona.presentacion();

// Agregamos y eliminamos propiedades
persona.preferencias = "Backend";
delete persona.ciudad;



/* ======================================
    Metodos de strings en JavaScript
=======================================*/

// length: devuelve la longitud del string
console.log("Holis".length);

let agite = "Aguante JavaScript vieja!";
for (let i = 0; i < agite.length; i++) {
    // console.log(agite[i]);
}

// charAt: Devuelve el caracter en la posicion especificada
console.log("Holis".charAt(3));


// concat: Concatena strings
let agiteFinal = "No me importa nada";
console.log(agite.concat(" ", agiteFinal));


// includes: Devuelve true si el substring esta dentro del string
console.log("JavaScript".includes("Script")); // Ojo porque es case sensitive


// startsWith: Comprueba si el string comienza con el substring
console.log("Hola mundo".startsWith("hola")); // false, es case sensitive tambien


// endsWith: Comprueba si el string termina con el substring
console.log("Hola mundo".endsWith("mundo"));


// indexOf: Devuelve el indice de la PRIMERA aparicion en el substring
console.log("banana".indexOf("a"));


// lastIndexOf: Devuelve el indice de la ULTIMA aparicion del substring
console.log("banana".lastIndexOf("a"));


// replace: Reemplaza una parte del string
console.log(agite.replace("JavaScript", "Megadeth"));


// replaceAll: Reemplazar TODAS las apariciones
console.log("1, 2, 3". replaceAll(", ",";"));


// toLowerCase: Convierte a minusculas
console.log("AGUANTE JAVASCRIPT".toLowerCase());


// toUpperCase: Convierte a mayusculas
console.log("holu! uwu".toUpperCase());


// trim: Elimina espacios en blanco al principio y al final
console.log("            holu            ".trim());


// trimStart: Elimina espacios en blanco al principio
console.log("            holu            ".trimStart());


// trim: Elimina espacios en blanco al final
console.log("            holu            ".trimEnd());


// slice: Extrae parte del string
console.log("JavaScript".slice(0, 4));
console.log("JavaScript".slice(-3)); // slice tambien acepta negativo para los ultimos caracteres


// substring: Similar a slice, pero no acepta negativos
console.log("JavaScript".slice(4, 10));


// substr -> Deprecado


// split: Divide el string en un array
console.log("hola".split(""));
console.log("rojo, verde, azul".split(", "));


// repeat: repite el string
console.log("ji".repeat(3));


// match: devuelve coincidencias con una expresion regular (REGEX)
console.log("abc123".match(/[^0-9]/g)); // extrae los caracteres
console.log("abc123".match(/\d/g)); // extrae los numeros



/* ======================================
    Metodos de arrays en JavaScript
========================================*/

let caracteres = ["a", "b", "c", "d"];

// length: Devuelve la longitud del array
console.log(caracteres.length); // 4

for(let i = 0; i < caracteres.length; i++) {
    console.log(caracteres[i]);   
}


// push: Agrega un elemento al FINAL del array
let arr = [1, 2];
console.log(arr);
arr.push(3);


// pop: Elimina el ultimo elemento y lo devuelve
console.log(arr.pop());


// unshift: Agrega un elemento al inicio del array
arr.unshift(0);


// shift: Elimina el primer elemento y lo devuelve
console.log(arr.shift());


// concat: Concatena arrays
console.log(arr.concat([3, 4])); // No altera el array original
let arr2 = [3, 4];
let nuevoArr = arr.concat(arr2);
console.log(nuevoArr);


// join: Une los elementos en un string
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// https://www.w3schools.com/jsref/jsref_join.asp
let nuevoStr = [1, 2, 3].join("-");
console.log(nuevoStr);


// slice: Extrae una copia parcial del array
console.log(nuevoArr.slice(1, 3));


// splice: Modifica el array in situ, permite borrar y agregar
/* 
Guia referencia W3 Schools: https://www.w3schools.com/jsref/jsref_splice.asp

cincoNums.splice(1, 2, "dos"); 

- Primer parametro es la posicion en el array

- Segundo parametro (opcional) es el numero de elementos a ser eliminados en esa posicion 

    - podemos no eliminar nada, pondremos 0
    - podemos eliminar el elemento en esa posicion, pondremos 1
    - podemos eliminar dos elementos desde esa posicion, pondremos 2

- Tercer parametro (opcional), el nuevo elemento a ser añadido en esa posicion
*/
const cincoNums = [1, 2, 3, 4, 5];
console.log(cincoNums);
cincoNums.splice(1, 2, "dos"); 

// Ojo a la hora de realizar ciertas operaciones adentro de un console.log! -> splice y concat


// indexOf: Devuelve la PRIMERA posicion del elemento
console.log([1, 2, 3].indexOf(2)); // Devuelve 1, porque preguntamos por la posicion del elemento 2 en el array
// Nos indica, que el numero 2, esta en la posicion 1


// lastIndexOf: Devuelve la ULTIMA posicion del elemento
console.log([1, 2, 3, 2].lastIndexOf(2)); // 3, el ultimo numero 2 esta en la posicion 3
// En caso de no encontrar nada, devuelve -1

```

---


## JavaScript III / Scope y ambito, funciones, tipos de funciones, parametros y argumentos, funciones flecha
```js
/////////////////////////
// Variables globales //
let globalLet = "Hola";
const globalConst = "Mundo";
var globalVar = "!";


/* ======================
    Scope o Ambito
=========================

El scope o ambito se refiere al contexto en el cual las variables y funciones son accesibles y pueden ser referenciadas.


1. Global Scope (Ambito global)
- Las variables definidas FUERA de cualquier funcion o bloque tienen alcance global y son accesibles desde cualquier parte del codigo
- En un navegador, las variables global se adjuntan al objeto window


2. Local Scope o Function Scope (Ambito local o de funcion)
- Las variables declaradas DENTRO de una funcion solo son accesibles dentro de esa funcion. Estas variables tienen ambito local


3. Block Scope (Ambito de bloque)
- A partir de ES6, las variables declaradas con let y const tienen alcance de bloque, lo que significa que solo son accesibles dentro del bloque en que se declararon -> { } (dentro de un if, for, etc)
*/


// Global Scope
var soyVarGlobal = "Soy global";

function mostrarGlobal() {
    console.log(soyVarGlobal);
}

mostrarGlobal();

console.log(soyVarGlobal);



// Local Scope
function mostrarLocal() {
    var localVar = "Soy local";
    console.log(localVar);
}

mostrarLocal();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined



// Block Scope
if(true) {
    let bloqueLet = "Soy de bloque";
    console.log(bloqueLet);
}

// console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined



// Scope Chain o Cadena de Ambito
var varGlobal = "Soy global";

function externa() {
    var varExterna = "Soy externa";

    function interna() {
        var varInterna = "Soy interna";
        console.log(varGlobal);
        console.log(varExterna);
        console.log(varInterna);
    }

    interna();
    // console.log(varInterna); // Uncaught ReferenceError: varInterna is not defined
}

externa();


/* ==================================
    Function Scope vs Block Scope
=====================================

- Function Scope: Las variables declaradas con var tienen ambito de funcion. Por lo que si se declaran dentro de una funcion, no son accesibles fuera de esa funcion, pero NO estan limitadas por bloque

- Block Scope Las variables declaradas con let y const estan limitadas por el bloque en el que se declaran { }
*/

function scopeFunction() {
    if (true) {
        var funcionVar = "Soy var de funcion";
    }
    console.log(funcionVar);
}

scopeFunction();


function scopeBlock() {
    if (true) {
        let bloqueLet = "Soy de bloque";
        const bloqueConst = "Soy de bloque";
    }
    // console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined
    // console.log(bloqueConst); // Uncaught ReferenceError: bloqueConst is not defined
}

scopeBlock();



/*==========================
    Hoisting o Elevacion
============================

- Las declaraciones de variables y funciones en JavaScript se "mueven hacia arriba" de su contexto de ejecucion. Solo las declaraciones son elevadas, no las inicializaciones

- var:          Se elevan y se inicializacion con undefined

- let y const:  Se elevan pero NO se inicializacion, lo que lleva a un error si se accede antes de la declaracion
*/

console.log(elevadaVar);
var elevadaVar = "Soy una var elevada";
console.log(elevadaVar);


// console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy una let elevada";
console.log(elevadaLet);



/*===================================
    Diferencias var, let y const
=====================================

- var: Tiene ambito de funcion, por lo que si se declara dentro de la funcion actual, está disponible a lo largo de toda la funcion. Permite la redeclaracion y la reasignacion.

    - De ambito de funcion
    - Puede ser redeclarado y reasignado
    - Tiene elevacion a nivel de funcion, por lo que puede utilizarse antes de la declaracion

- let: Tiene ambito de bloque, por lo que si se declara dentro de un bloque como if, loop o function, solo esta disponible dentro de ese bloque -> {}. No permite la redeclaracion pero si la reasignacion

    - De ambito de bloque, es decir, limitado por sus { }
    - Se puede volver a reasignar el valor, pero no se puede volver a declarar
    - Tiene elevacion a nivel de bloque, por lo que no es accesible antes de la declaracion

- const:  Tiene ambito de bloque, pero a diferencia de let, prohibe la reasignacion y la redeclaracion

    - De ambito de bloque, es decir, limitado por sus { }
    - No puede volver a reasignar el valor ni tampoco volver a declarar
    - Tiene elevacion a nivel de bloque, por lo que no es accesible antes de la declaracion


- let y const se introdujeron en ES6 para mejorar el ambito de las variables y reducir la probabilidad de anulaciones accidentales de variables.

- Tanto let como const NO permiten la elevacion, mientras que var si

- const asegura que el valor de la variable permanece inmutable, mientras que let permite la reasignacion


Usaremos const para variables de solo lectura, como constantes u objetos inmutables
Usaremos let para variables que puedan cambiar su valor con el tiempo
No usaremos var, por su ambito de funcion y su elevacion, lo que puede dar lugar a conflictos y bugs
*/

const pi = 3.1416

let contador = 0;
contador++;
console.log(contador);


/////////////////
// Funciones //

function sumarDosYTres() {
    let resultado = 2 + 3;
    console.log(`El resultado es: ${resultado}`);
}

sumarDosYTres();


// Funcion con parametros
// Los parametros son los nombres de las variables que definimos en la declaracion de la funcion
function sumar(a, b) { 
    let resultado = a + b;
    console.log(`El resultado es: ${resultado}`);
}

sumar(5, 7); // Los argumentos son los valores que pasamos a la funcion cuando la llamamos



// Funciones que devuelven un valor
function multiplicar(a, b) {
    return a * b; // Las funciones pueden devolver un valor utilizando la palabra clave return
    
    let coso = "sarasa"; // nada se ejecuta despues de la instruccion return, termina la ejecucion del codigo
}

console.log(multiplicar(5, 5));


// Valores predeterminados para los parametros
function saludar(nombre = "maestro") {
    console.log("Hola " + nombre);
}

saludar();


// Pasando multiples argumentos
function sumarTres(a, b, c) {
    return a + b + c;
}

console.log(sumarTres(1, 2, 3)); //Pasaremos los argumentos en el mismo orden



/*=================================
    Tipos de functiones en JS
===================================

1. Funcion declarada / Named function o Basic function____________________
    
    Es la declaracion basica de JavaScript, usa la keyword function

    Se recomienda para funciones con nombre o cuando se necesite hoisting.
    Estas funcones se pueden elevar a la parte superior de su ambito. Por lo que podemos llamar a la funcion antes de ser declarada

    saluda();

    function saluda() {
        console.log("Hola mundo!");
    }



2. Funcion expresada / Function expression____________________

    Es la funcion que esta dentro de una variable

    Son utiles para controlar donde va a estar disponible la funcion o para cuando va a ser usada como argumento para otra funcion

    const saludame = function() {
        console.log("Que onda!");
    }

    saludame();



3. Funcion anonima / Anonymous function____________________

    No tiene nombre y se usan como callbacks generalmente

    setTimeout(function() {
        console.log("Soy una funcion anonima y asincronica!");
    }, 1000);


4. Funcion de metodos / Method function____________________
    
    Son las funciones definidas dentro de un objeto o clase

    const persona = {
        nombre: "Miguel",
        
        saludar() {
            console.log(`Hola! me llamo ${this.nombre}`);
        }
    }

    persona.saludar();


5. Expresion de funcion ejecutada inmediatamente/ IIFE - Immediately Invoked Function Expressions____________________

    (function() {
        console.log("Soy una funcion IIFE");
    }())



6. Funcion de flecha / Arrow function____________________

    Especialmente utiles para escribir funciones de una linea.

    const sumarFlecha = (a, b) => a + b;
    console.log(sumarFlecha(2, 3));


*/

// 1. Funcion declarada
saluda();

function saluda() {
    console.log("Hola mundo!");
}



// 2. Funcion expresada
const saludame = function() {
    console.log("Que onda!");
}

saludame();



// 3. Funcion anonima
setTimeout(function() {
    console.log("Soy una funcion anonima y asincronica!");
}, 1000);


// 4. Funcion de metodos
const persona = {
    nombre: "Miguel",
    
    saludar() {
        console.log(`Hola! me llamo ${this.nombre}`);
    }
}

persona.saludar();



// 5. IIFE
(function() {
    console.log("Soy una funcion IIFE");
}())



// 6. Funciones flecha

// 6.1 Funciones flecha sin parametros
const saludito = () => console.log("Hola holita vecinito");
saludito();


// 6.2 Funciones de flecha con un solo parametro, parentesis opcionales
const cuadrado = x => x * x;
console.log(cuadrado(5));


// 6.3 Funciones de flecha con varios parametros
const sumarFlecha = (a, b) => a + b;
console.log(sumarFlecha(2, 3));


// 6.4 Funciones de flecha con mas de una instruccion
// Si el cuerpo de la funcion tiene mas de una instruccion, necesitamos {} y la palabra return para devolver un valor
const saludarPersona = nombre => {
    const saludo = `Como le va, ${nombre}`;
    return saludo;
}

console.log(saludarPersona("Teo"));
```

---

## JavaScript II / Control de flujo, estructuras de control, condicionales y bucles I
```js
/* ======================
    Control de flujo
=========================
El control de flujo en JavaScript determina como se ejecutan las instrucciones de un programa.
Establecemos que partes del codigo se ejecutan y bajo que condiciones.
Entre los tipos de estructuras de control de flujo en JavaScript

Condicionales:      if, else if, else
Operadores logicos: &&, ||, !
Bucles:             for, while, do...while
Control de flujo:   break, continue
*/

/* ===================
    Condicionales
======================

if: Ejecutar un bloque de codigo si una condicion es verdadera

if(condicion) {
}
*/

let numero = 0;
if (numero > 0) {
    console.log("El numero es positivo");
    
} else if (numero < 0) {
    console.log("El numero es negativo");

} else {
    console.log("El numero es cero");
}



let edad = 20;
if (edad >= 18) {
    console.log("Sos mayor de edad");
    
} else if (edad < 18 && edad > 0) {
    console.log("Sos menor de edad");

} else {
    console.log("Edad invalida");
}



let hora = 14;
// Verificar si es mañana, tarde o noche
if (hora < 12) {
    console.log("Es de mañana");
    
} else {
    if (hora >= 12 && hora < 18) {
        console.log("Es de tarde");
        
    } else {
        console.log("Es de noche");
    }
}


/* ======================
    Operadores logicos
=========================

- AND &&:   Ambas condiciones deben ser verdaderas
- OR ||:    Al menos una condicion debe ser verdadera
- NOT !:    Niega el valor de una condicion. Es el operador de negacion logica
*/

let edad2 = 25;
let tieneLicencia = true;

if (edad2 >= 18 && tieneLicencia) {
    console.log("Podes manejar");
}

if (edad < 18 || !tieneLicencia) {
 console.log("No podes manejar");
}


/* ===========================
    Negacion logica basica
==============================

El valor ! invierte el valor booleano de una expresion. Si la expresion es true, se convierte en false y viceversa

El operador NOT !, nos permite verificar si una variable es falsy
En JavaScript, los valores "falsy" son aquellos que, cuando se evaluan en un CONTEXTO BOOLEANO, resultan en false.

Algunos ejemplos de falsy son: false, 0, "", null, undefined y NaN

Algunos ejemplos de truthy son: 
    - Los números distintos de cero (como -42, 3,14, infinito)
    - las cadenas no vacías (como «0», «false», «hello»)
    - los objetos (incluidos los objetos vacíos {}), los arrays (incluidas los arrays vacíos []
    - las funciones y las fechas
*/

let esVerdadero = true;
console.log(!esVerdadero);

let esFalso = false;
console.log(!esFalso);


let valor1 = 0;
let valor2 = "Hola";
let valor3 = [];

console.log(!valor1); // true (0 es falsy, asi que se convierte en true)
console.log(!valor2); // false 
console.log(!valor3); // false


// Ejemplo de toggle
let estado = true;

function alternarEstado() {
    estado = !estado;
    console.log("Nuevo estado: ", estado);
}

alternarEstado();
alternarEstado();
alternarEstado();


/* ===========================
    Operador ternario
==============================
Es una forma mas compacta de escribir una condicion if...else
*/

let edad3 = 20;

let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad";
console.log(mensaje);


let temperatura = 25;
let mensaje2;

mensaje2 = (temperatura > 25) ? "Hace calor" : "Hace frio";
console.log(mensaje2);



/* ===========================
    Bucles
==============================

// Bucle for, se usa cuando se conoce de antemano el numero de iteraciones

for (inicializacion; condicion; incremento) {
    // Codigo a ejecutar en cada iteracion
}


// Bucle while: ejecuta el bloque de codigo mientras la condicion sea verdadera

while (condicion) {
    //...
}


// Bucle do...while: similar a while, pero la condicion se evalua despues de ejecutar el bloque de codigo, garantizando que el codigo se ejecutara el menos una vez

do {
    //...
} while (condicion)
*/

// Bucle for simple
for (let i = 0; i < 5; i++) {

    console.log(`Iteracion: ${i}`);

}

// Bucles for anidados
for(let i = 0; i < 3; i++) {

    for(let j = 0; j < 3; j++) {
        
        console.log(`${i} - ${j}`);
    }

}


// Para practicar: ejercicio sugerido: Generen una tabla de multiplicar del 1 al 3


// Bucle while
let i = 0;

while (i < 5) {
    console.log(`Iteracion: ${i}`);
    i++;
}


// Bucle do...while
let j = 0;
do {
    console.log("Iteracion: " + j);
    j++;

} while ( j < 5);



/* ==============================
    Control de flujo avanzado
=================================

- break:    Se usa para salir inmediatamente de un bucle o una estructura de control

- continue: Se usa para saltar a la SIGUIENTE ITERACION, omitiendo el codigo restante dentro del bucle para esa iteracion
*/

for(let i = 0; i < 10; i++) {

    if (i === 5) {
        break; // Salimos del bucle cuando i es 5
    }

    console.log(`Iteracion con break: ${i}`);
}


for(let i = 0; i < 10; i++) {

    if (i % 2 === 0) {
        continue; // Salta las iteraciones en las que i es par
    }

    console.log(`Numero: ${i}`);
}



/* =================================
    Estructura de control Switch
====================================

Switch es otra estructura de control que permite evaluar una expresion y ejecutar el bloque de codigo correspondiente al caso que coincide

https://www.w3schools.com/js/js_switch.asp

switch (expresion) {

    case valor1:
        // Codigo a ejecutar si la expresion es igual a valor1
        break;

    case valor2:
        // Codigo a ejecutar si la expresion es igual a valor2
        break;


    case valor3:
        // Codigo a ejecutar si la expresion es igual a valor3
        break;

    default:
        // Codigo que se ejecuta si ninguno de los casos coincide
}
*/

/*
let preguntaUser = prompt("Escribi dia de la semana");
console.log(typeof preguntaUser);
*/

let teGustaJS = confirm("Te gusta JavaScript?");
console.log(teGustaJS);


let diaSemana = parseInt(prompt("Escribi dia de la semana"));


switch (diaSemana) {
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miercoles");
        break;


    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    default:
        console.log("Fin de semana");
}


// Ejercicio sugerido para practicar switch. Hacer una calculadora que reciba dos numeros y que pida que tipo de operacion quieren realizar
```

---

## JavaScript I / Conceptos elementales, sintaxis básica, variables, tipos de datos y operadores
JavaScript es un lenguaje de programación que utilizamos para crear páginas web interactivas. JavaScript puede hacer que las páginas respondan a las acciones del usuario y a cambios que ocurren en el documento, realizar cálculos, alterar elementos de forma dinámica, realizar operaciones personalizadas, etc.

```js
// Comentario de una sola linea

/* Comentario de
multiples
lineas
*/

/* La consola de JS es una herramienta de depuracion en el navegador web.
Permite ejecutar comandos en JavaScript, ver mensajes de registro y errores,  y hacer pruebas interactivas de codigo

La abrimos con F12 o boton derecho + Inspeccionar (pestaña consola)
*/

console.log("Hola mundo desde JavaScript");


/*======================= 
Variables en JavaScript
=========================

Almacenan datos que pueden ser reutilizados y modificados

- var: Declaracion historica pero con limitaciones como el hoisting. No recomendada

- let: Introducido en ES6 (ECMAScript 2015). Permite declarar variables que pueden cambiar y tien un alcance de bloque, lo que mejora el control sobre donde y cuando se puede acceder a la variable

- const: Introducido en ES6. Permite declarar variables que no se deben reasignar. El valor en un const puede ser modificado en caso de ser un objeto o un array, pero la referencia no puede cambiar 


===========================
Tipos de datos primitivos
===========================

- Numeros:      Valores numericos
- Cadenas:      Texto encerrado entre comillas simples '' y comillas dobles ""
- Booleanos:    true o false
- null:         Representa un valor intencionalmente vacio
- undefined:    Una variable que fue declarada pero no tiene valor
*/

let numero = 42;
let texto = "Hola";
let verdadero = true;
let vacio = null;
let indefinido;

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(vacio);
console.log(indefinido);



/* ========================
Operadores en JavaScript

https://www.w3schools.com/js/js_operators.asp
==========================*/

// Operadores aritmeticos
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


// Operadores de asignacion
let x = 10;
console.log(x);

x += 5; // x = x + 5
console.log(x);

x -= 2; // x = x - 2
console.log(x);


// Operadores de comparacion
let y = 5;
let z = "5";

console.log(y == z);
console.log(y === z);


// Operadores logicos
let c = true;
let d = false;

console.log(c && d);    // false, ambos deben ser true
console.log(c || d);    // true, al menos uno es true
console.log(!c);        // false, invierte el valor de c


// Operadores de tipo
// Permiten verificar el tipo de un valor o su relacion con clases/constructores
console.log(typeof 42);     // number
console.log(typeof "42");   // string
console.log([] instanceof Array); // true


// Operadores de incremento y decremento
let e = 10;
console.log(e);

e++;
console.log(e);

e--;
console.log(e);

++e;
console.log(e);
```
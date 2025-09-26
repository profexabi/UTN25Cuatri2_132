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

// Redireccion a inicio////////////////////
let nombreUsuario = sessionStorage.getItem("nombreUsuario");

// Redirige si no existe un nombre de usuario
if(!nombreUsuario){
	window.location.href = "index.html";
}




// Variables////////////////////////////////
let productos = []; // Agregamos la variable global productos
let cuadriculaProductos = document.querySelector(".product-grid");
let barraBusqueda = document.querySelector(".search-bar");

let botonesCarrito = document.querySelectorAll(".add-to-cart");
let objetosCarrito = document.getElementById("cart-items");
let precioCarrito = document.getElementById("total-price");
let contadorCarrito = document.getElementById("cart-count");

let boton_imprimir = document.getElementById("btn-imprimir");

let carrito = [];




// Obtener productos////////////////////////////////////////////
const url = "http://localhost:3000/api/products"; // Guardamos en una variable la url de nuestro endpoint

async function obtenerProductos() {
    try {
        let respuesta = await fetch(url); // Hacemos una peticion a nuestro nuevo endpoint en http://localhost:3000/api/products

        let data = await respuesta.json();

        console.log(data); // Nuestros productos estan disponibles dentro de payload { payload: Array(19) }

        productos = data.payload; // Aca guardamos en la variable productos el array de productos que contiene "payload"

        mostrarProductos(productos);
        
        

    } catch(error) {
        console.error(error);
    }
}




// Mostrar productos////////////////////////////////
function mostrarProductos(array) {
    let cartaProducto = "";
    
    for(let i = 0; i < array.length; i++) {    
        cartaProducto += `
            <div class="product-card">
                <img src="${array[i].image}" alt="${array[i].name}">
                <h3>${array[i].name}</h3>
                <p>$${array[i].price}</p>
                <button class="add-to-cart" onclick="agregarCarrito(${array[i].id})">Agregar a carrito</button>
            </div>
        `;
    }
    cuadriculaProductos.innerHTML = cartaProducto;
    //console.log(cartaProducto)
}




// Saludar usuario/////////////////////////////////
function saludarUsuario() {
    let saludoUsuario = document.getElementById("saludo-usuario");
    saludoUsuario.innerHTML = `Bienvenidx ${nombreUsuario}!`;
}




function mostrarCarrito() {
    let carritoCompra = "";
    precioTotal = 0;

    carrito.forEach((producto, indice) => {
        carritoCompra += `
            <li class="item-block">
                <p class="item-name">${producto.name} - $${producto.price}</p>
                <button class="delete-button" onclick="eliminarProducto(${indice})">Eliminar</button>
            </li>
            `;

        precioTotal += parseInt(producto.price, 10);
    });

    // Imprimir html de producto
    objetosCarrito.innerHTML = carritoCompra;

    // Mostrar precio total y contador carrito
    precioCarrito.innerHTML = `$${precioTotal}`;

    // Mostrar el numero de objetos en el array carrito
    contadorCarrito.innerHTML = carrito.length;
    

    // Ocultar carrito si no hay productos
    if(carrito.length > 0) {
        document.getElementById("empty-cart").classList.remove("hidden");
        document.getElementById("empty-cart").classList.add("visible");
        
        document.getElementById("btn-imprimir").classList.remove("hidden");
        document.getElementById("btn-imprimir").classList.add("visible");
    } else {
        document.getElementById("empty-cart").classList.remove("visible");
        document.getElementById("empty-cart").classList.add("hidden");
        document.getElementById("btn-imprimir").classList.remove("visible");
        document.getElementById("btn-imprimir").classList.add("hidden");
        

        objetosCarrito.innerHTML = `<p class="info-carrito">No hay productos en el carrito.</p>`;
    }
}




// Filtrar productos////////////////////////////////
barraBusqueda.addEventListener("keyup", filtrarProductos);

function filtrarProductos() {
	let valorBusqueda = barraBusqueda.value;
	// console.log(valorBusqueda)

	let productosFiltrados = productos.filter((producto) => { 
		return producto.name.includes(valorBusqueda);
	});
	mostrarProductos(productosFiltrados);
}




// Imprimir tickets PDF /////////////////////////////////////
boton_imprimir.addEventListener("click", imprimirTicket);

/* Gracias al CDN ya podemos usar las funcionalidades que trae jsPDF
<!-- CDN para usar jsPDF -->
<script src="https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"></script>*/

function imprimirTicket() {
    console.table(carrito); // Visualizamos el carrito
    
    // Para registrar las ventas a posteriori, guardaremos los ids de los productos del carrito
    let idProductos = []; // Array vacio de ids de producto

    // Gracias al CDN, extraemos la clase jspdf del objeto global window
    const { jsPDF } = window.jspdf;

    // Creamos una nueva instancia del documento pdf usando al clase jsPDF
    const doc = new jsPDF(); // Ahora doc tendra todos los metodos que le provee la herramienta jsPDF

    // Definimos el margen superior de 20px en el eje y -> eje vertical, el eje x será el eje horizontal
    let y = 20;

    // Establecemos el tamaño de 18px para el primer texto
    doc.setFontSize(18);

    // Escribimos el texto "Ticket compra" en la posicion x=10, y=10 del pdf
    doc.text("Llama-ticket de compra:", 20, y);

    // Aumentamos el espacio despues del titulo
    y += 15;

    // Cambiamos el tamaño de la fuente a 12px para los productos del ticket
    doc.setFontSize(12);

    // Iteramos el carrito e imprimimos nombre y precio
    carrito.forEach(producto => {

        idProductos.push(producto.id); // Llenamos el array de ids de productos (necesario para la venta despues)

        doc.text(`${producto.name} - $${producto.price}`, 30, y); // Creamos el texto por cada producto: nombre = $precio

        // Incrementamos la posicion vertical para evitar solapamiento
        y += 10;
    });

    // Calculamos el total del ticket usando reduce
    const precioTotal = carrito.reduce((total, producto) => total + parseInt(producto.price), 0);

    // Añadimos otro espacio de 5px en el eje vertical para separar el precio total de los productos
    y += 5;

    // Establecemos el tamaño de 15px para el precio total
    doc.setFontSize(14);

    // Escribimos el total del ticket en el PDF, despues del listado de productos
    doc.text(`Total: $${precioTotal}`, 20, y);

    // Imprimimos el ticket de venta
    doc.save("ticket.pdf");
}




// Registrar venta ////////////////////////////////////////
/* Que datos debemos enviar a nuestra API?

Nuestro endpoint esperará algo equivalente a los campos de la tabla sales
    - date          nueva fecha
    - total_price   precio total
    - user_name     nombreUsuario

Además nuestra tabla product_sales vincula los productos a la venta, por tanto enviaremos los ids de los produtos vendidos
    - products      array de ids de productos -> vinculamos los productos a una venta


Ejemplo del JSON
    {
        "date": "2025-12-03T10:00",
        "total_price" : "6500",
        "user_name" : "Gricel",
        "products" : [29, 27]
    }

Que tendra que hacer ahora nuestra API?

    1. Insertar la venta en la tabla sales
    2. Despues de esta insercion, obtendremos el id de la venta
    3. Inservamos los productos en product_sales
*/





// Agregar a carrito////////////////////////////////
function agregarCarrito(id) {

	//console.log(`id del producto: ${id}`);
	let frutaSeleccionada = productos.find(fruta => fruta.id === id);
	carrito.push(frutaSeleccionada);

	mostrarCarrito();
}




function eliminarProducto(index) {
    // Eliminar un elemento del array carrito a partir de su indice con splice()
    carrito.splice(index, 1);
    mostrarCarrito();
}




function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}




// Funcion inicializadora
function init() {
    obtenerProductos();
    saludarUsuario();
}

init();


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

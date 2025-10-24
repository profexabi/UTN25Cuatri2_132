# UTN25Cuatri2_132 :rooster:

## [Excel grupos Div 132 / 2025](https://docs.google.com/spreadsheets/d/1DC1XwCZ_a2tH1abXacndfXHBUEB-9mfx2KEZ2rl6MJI/edit?usp=sharing)
    - Para el 29 de octubre, este grupo pasara a solo lectura y quienes falten seran asignados de manera automatica por los docentes

## Clases grabadas
### [JavaScript VII 2a parte - 22/10/25](https://youtu.be/iHoJdGzl1tM)
### [JavaScript VIII y Node I - 24/10/25](https://youtu.be/iZpfY47iLIA)


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

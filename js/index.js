let titulo = document.getElementById("titulo");
titulo.innerText="BOTICUEVA!"

let texto = document.getElementById("texto");
texto.innerHTML = "<h2>Estamos procesando tu pedido... </h2>"

let comentario = document.getElementById("comentario");
comentario.className="comentario1"
document.getElementsByClassName("comentario1").innerText="Gracias por tu compra! Tus brebajes seran enviados pronto!. "

//interactuación con un array para opciones de despacho 

let despacho = document.getElementById("comunas");
let comunas = ["Talagante","Isla de Maipo","El Monte","Peñaflor"];

for (let comuna of comunas){
    var elemento = document.createElement("li");
    elemento.innerHTML = comuna;
    despacho.appendChild(elemento);
}

//Ejemplo Aplicado de Plantillas Litrales e InnerHTMl para crear 4 tarjetas de productos

const productos = [{id:1 ,nombre:"Mojitos", imagen:"mojito.jpg", precio: 8900},
                  {id:2 ,nombre:"Ramazotti", imagen:"ramazzotti.jpg", precio: 9900},
                  {id:3 ,nombre:"Terremoto", imagen:"terremoto.jpg", precio: 6900},
                  {id:4 ,nombre:"Piscola", imagen:"piscola.jpg", precio: 7900}
                ];

 for (const producto of productos) {
        const contenedor = document.getElementById("tarjetas");
        let tarjetas = document.createElement("div");
        tarjetas.className= "col-md-3"
        tarjetas.innerHTML = `<div class="card">
                                <img src="../assets/img/${producto.imagen}" class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                <h5 class="card-title">ID: ${producto.id}</h5>
                                <p class="card-text"> Producto: ${producto.nombre}</p>
                                <p class="card-text">$ ${producto.precio}</p>
                                <a href="#" class="btn btn-primary">Agregar</a>
                                </div>
                             </div>`;
contenedor.appendChild(tarjetas);
}            
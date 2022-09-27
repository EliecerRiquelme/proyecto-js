//Productos tarjetas para carrito
const productos =[{id:1 ,nombre:"Mojitos", imagen:"mojito.jpg", precio: 8900},
                  {id:2 ,nombre:"Ramazotti", imagen:"ramazzotti.jpg", precio: 9900},
                  {id:3 ,nombre:"Terremoto", imagen:"terremoto.jpg", precio: 6900},
                  {id:4 ,nombre:"Piscola", imagen:"piscola.jpg", precio: 7900}
];

function obtenerProductoLS(){
return JSON.parse(localStorage.getItem("productos")) || [];
} ;

function guardarproductosLS(productos){
localStorage.setItem("productos", JSON.stringify(productos))
};

guardarproductosLS(productos);


const detalle= document.getElementById("tarjetas");       //creo las tarjetas de los productos 
    productos.forEach((producto, catalogo)=>{
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card","col-sm-12","col-lg-3");
        let index= `<img src="./assets/img/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text"> Valor $ ${producto.precio}</p>
                    <a href="#" class="btn" onClick="comprar(${catalogo})" >Agregar al carro</a>
                    </div>`
        tarjeta.innerHTML=index;
        detalle.appendChild(tarjeta);

});


//Productos tarjetas extras

let boton= document.getElementById("boton_ver"); // boton agregado para dar funcionalidad de Eventos
     const productosExtra = [
        {id:1 ,nombre:"Mojitos", imagen:"mojito.jpg", precio: 8900},
        {id:2 ,nombre:"Ramazotti", imagen:"ramazzotti.jpg", precio: 9900},
        {id:3 ,nombre:"Terremoto", imagen:"terremoto.jpg", precio: 6900},
        {id:4 ,nombre:"Piscola", imagen:"piscola.jpg", precio: 7900}
        ];
boton.addEventListener("click", function(){
    for (const productoExtra of productosExtra) {
        const contenedor = document.getElementById("tarjetasExtra");
        let tarjetasExtra = document.createElement("div");
        tarjetasExtra.className= "col-md-2";
        tarjetasExtra.innerHTML = `<div class="card " >
                <img src="./assets/img/${productoExtra.imagen}" class="card-img-top" alt="${productoExtra.nombre}"></img>
                <div class="card-body">
                <h5 class="card-title">ID: ${productoExtra.id}</h5>
                <p class="card-text"> Producto: ${productoExtra.nombre}</p>
                <p class="card-text"> Valor $ ${productoExtra.precio}</p>
                <a href="#" class="btn">Agregar</a>
                </div>
        </div>`;
contenedor.appendChild(tarjetasExtra);
}      
});
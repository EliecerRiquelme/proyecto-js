
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
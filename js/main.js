let nombre;
function pedirNombre() {
  alert("Bienvenido Boticueva ");
  nombre = prompt("Ingresa tu nombre");

  while (nombre === "") {
    nombre = prompt("Ingresa tu nombre");
  }

  let edad = parseInt(prompt("Cúal es tu edad?"));

  if (edad >= 18) {
    alert(" Hola " + nombre + ", espero poder embriagarte este día \n Haz tu pedido! ");
    eleccionProductos();
  } else {
    alert(" Eres menor de edad !!, pide permiso a tus padres!");
  }
  
  return nombre;
}
let producto;

function eleccionProductos() {
  do {
    producto = parseInt(
      prompt("Que Trago elejiras ? \n1)MOJITO\n2)RAMAZZOTTI\n3)GiIN TÓNIC")
    );
  } while (producto !== 1 && producto !== 2 && producto !== 3);

  switch (producto) {
    case 1:
      return "MOJITO";
    case 2:
      return "RAMAZZOTTI";
    case 3:
      return "GiIN TÓNIC";
  }
};

function precios(nombre) {
  if (nombre === "MOJITO") {
    return 23900;
  } else if (nombre === "RAMAZZOTTI") {
    return 28900;
  } else {
    return 29900;
  }
};

let total = 0;
let texto = "";

function cobrar(producto, precio, nombre) {
  alert(
    nombre.toUpperCase() +
      ", Haz elegido un " +
      producto +
      " y su precio es de $ " +
      precio
  );

  alert("Se agrego un " + nombreproducto.toUpperCase() + " a tu compra.");
  texto += "Producto " + nombreproducto + "- Precio : " + "$" + precio + "\n";
  total += precio;

  let seguir = confirm(
    "Desea agregar otro producto? (Preciona 'Cancelar' para ir a pagar.) "
  );
  if (seguir) {
    nombreproducto = eleccionProductos();
    precio = precios(nombreproducto);
    cobrar(nombreproducto, precio, nombreCliente);
  } else {
    alert("Carrito :\n" + texto + "\n TOTAL: $" + total + "\n");
    let pago = parseInt(prompt("Con cuanto desea pagar ? "));
    if (pago > total) {
      alert("Gracias ! Su vuelto es  $" + (pago - total));
    } else {
      alert("No le alcanza! ");
    }
  }
};

let nombreCliente = pedirNombre();
let nombreproducto = eleccionProductos();
let precio = precios(nombreproducto);
cobrar(nombreproducto, precio, nombreCliente);

// creamos una funcion para calcular el total de productos elegidos por un usuario
function costoTotal(primerProducto, segundoProducto) {
  // valor de los productos
  let leche = 100;
  let azucar = 60;
  let chocolate = 50;
  let pan = 40;
  // condicion al elegir 2 productos y sumar su valor total
  while (primerProducto != "ESC" || segundoProducto != "ESC") {
  if (
    (primerProducto == "leche" && segundoProducto == "azucar") ||
    (primerProducto == "azucar" && segundoProducto == "leche")
  ) {
    let sumar = leche + azucar;
    alert("El total a pagar de los productos elegidos es $" + sumar);
  } else if (
    (primerProducto == "leche" && segundoProducto == "chocolate") ||
    (primerProducto == "chocolate" && segundoProducto == "leche")
  ) {
    let sumar = leche + chocolate;
    alert("El total a pagar de los productos elegidos es $" + sumar);
  } else if (
    (primerProducto == "leche" && segundoProducto == "pan") ||
    (primerProducto == "pan" && segundoProducto == "leche")
  ) {
    let sumar = leche + pan;
    alert("El total a pagar de los productos elegidos es $" + sumar);
  } else if (
    (primerProducto == "azucar" && segundoProducto == "chocolate") ||
    (primerProducto == "chocolate" && segundoProducto == "azucar")
  ) {
    let sumar = azucar + chocolate;
    alert("El total a pagar de los productos elegidos es $" + sumar);
  } else if (
    (primerProducto == "azucar" && segundoProducto == "pan") ||
    (primerProducto == "pan" && segundoProducto == "azucar")
  ) {
    let sumar = azucar + pan;
    alert("El total a pagar de los productos elegidos es $" + sumar);
  } else if (
    (primerProducto == "chocolate" && segundoProducto == "pan") ||
    (primerProducto == "pan" && segundoProducto == "chocolate")
  ) {
    let sumar = chocolate + pan;
    alert("El total a pagar de los productos elegidos es $" + sumar);
  } else {
    alert("Elija productos validos");
  }
}
}
// preguntamos al usuario que productos desea
// let productoElegido1 = prompt(
//   "Escriba el producto que desea: leche - azucar - chocolate - pan"
// );
// let productoElegido2 = prompt(
//   "Escriba otro producto diferente: leche - azucar - chocolate - pan"
// );
// llamamos a la funcion, pasandole lo elegido por el usuario
// costoTotal(productoElegido1, productoElegido2);

// creamos un array de varios productos con su precio
const arrayProductos = [
  { producto: "leche", precio: 100 },
  { producto: "azucar", precio: 60 },
  { producto: "chocolate", precio: 50 },
  { producto: "pan", precio: 40 },
];
// agregamos otro producto con el metodo push al array de productos
arrayProductos.push({producto: "queso", precio: 70});
// y agregamos un nuevo elemento al principio del array utilizando unshift
arrayProductos.unshift({producto: "mayonesa", precio: 30});
//recorremos el array con la sentencia for of, para mostrar en consola
//cada producto y su precio
for (const productos of arrayProductos) {
  console.log("el producto es: " +productos.producto);
  console.log("el precio es: " +productos.precio);
}
// console.log(arrayProductos);

// creamos una funcion para calcular el total de productos elegidos por un usuario
function costoTotal() {
  // valor de los productos
  let leche = 100;
  let azucar = 60;
  let chocolate = 50;
  let pan = 40;
  // condicion al elegir 2 productos y sumar su valor total
  if (
    (productoElegido1 == "leche" && productoElegido2 == "azucar") ||
    (productoElegido1 == "azucar" && productoElegido2 == "leche")
  ) {
    let sumar = leche + azucar;
    alert("El total a pagar de los productos elegidos es $" + sumar);
  } else if (
    (productoElegido1 == "leche" && productoElegido2 == "chocolate") ||
    (productoElegido1 == "chocolate" && productoElegido2 == "leche")
  ) {
    let sumar = leche + chocolate;
    alert("El total a pagar de los productos elegidos es $" + sumar);
  } else if (
    (productoElegido1 == "leche" && productoElegido2 == "pan") ||
    (productoElegido1 == "pan" && productoElegido2 == "leche")
  ) {
    let sumar = leche + pan;
    alert("El total a pagar de los productos elegidos es $" + sumar);
  } else if (
    (productoElegido1 == "azucar" && productoElegido2 == "chocolate") ||
    (productoElegido1 == "chocolate" && productoElegido2 == "azucar")
  ) {
    let sumar = azucar + chocolate;
    alert("El total a pagar de los productos elegidos es $" + sumar);
  } else if (
    (productoElegido1 == "azucar" && productoElegido2 == "pan") ||
    (productoElegido1 == "pan" && productoElegido2 == "azucar")
  ) {
    let sumar = azucar + pan;
    alert("El total a pagar de los productos elegidos es $" + sumar);
  } else if (
    (productoElegido1 == "chocolate" && productoElegido2 == "pan") ||
    (productoElegido1 == "pan" && productoElegido2 == "chocolate")
  ) {
    let sumar = chocolate + pan;
    alert("El total a pagar de los productos elegidos es $" + sumar);
  } else {
    alert("Elija productos validos");
  }
}
// preguntamos al usuario que productos desea
let productoElegido1 = prompt(
  "Escriba el producto que desea: leche - azucar - chocolate - pan"
);
let productoElegido2 = prompt(
  "Escriba otro producto diferente: leche - azucar - chocolate - pan"
);
// llamamos a la funcion, pasandole lo elegido por el usuario
costoTotal(productoElegido1, productoElegido2);
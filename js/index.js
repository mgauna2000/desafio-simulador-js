function costoTotal() {
  let leche = 100;
  let azucar = 60;
  let chocolate = 50;
  let pan = 40;

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
let productoElegido1 = prompt(
  "Escriba el producto que desea: leche - azucar - chocolate - pan"
);
let productoElegido2 = prompt(
  "Escriba el producto que desea: leche - azucar - chocolate - pan"
);
costoTotal(productoElegido1, productoElegido2);
//   if (productoElegido == "leche") {
//     let leche = productoElegido;
//     leche = 100;
//     alert(leche);
//   }else if (productoElegido == "azucar") {
//     let azucar = productoElegido;
//     azucar = 60;
//     alert(azucar);
//   }else if (productoElegido == "chocolate") {
//     let chocolate = productoElegido;
//     chocolate = 50;
//     alert(chocolate);
//   }else if (productoElegido == "pan") {
//     let pan = productoElegido;
//     pan = 40;
//     alert(pan);
//   }else if (productoElegido == "jugo") {
//     let jugo = productoElegido;
//     jugo = 15;
//     alert(jugo);
//   }else{
//       alert("eliga un producto")
//   }

//   if (productoElegido == leche && productoElegido == pan) {
//       let sumar = leche + pan;
//       alert(sumar)
//   }

// }

// let productoElegido = prompt(
//   "Elige 2 productos: leche,azucar,chocolate,pan o jugo"
// );
// costoTotal(productoElegido);

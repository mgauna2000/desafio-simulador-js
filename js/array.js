const arrayProductos = [
  { producto: "leche", precio: 100 },
  { producto: "azucar", precio: 60 },
  { producto: "chocolate", precio: 50 },
  { producto: "pan", precio: 40 },
];
const nuevoProducto = prompt("Nombre del producto");
const nuevoPrecioProducto = parseFloat(prompt("Precio del producto"));

const nombreProducto = nuevoProducto;
console.log(nuevoProducto);

arrayProductos.push({producto:+nombreProducto, precio:+nuevoPrecioProducto});


console.log(arrayProductos);

// const arrayProductos = [];

// const nuevoProducto = prompt("Nombre del producto");
// const nuevoPrecioProducto = prompt("Precio del producto");
// arrayProductos.push(nuevoProducto, nuevoPrecioProducto);

// console.log(arrayProductos);


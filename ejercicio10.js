const numero = parseFloat(prompt("Ingresagi un número:"));
let mensaje = "";

if (numero % 2 === 0) {
  mensaje = "El " + numero + " es divisible por 2.";
} else if (numero % 3 === 0) {
  mensaje = "El " + numero + " es divisible por 3.";
} else if (numero % 5 === 0) {
  mensaje = "El " + numero + " es divisible por 5.";
} else if (numero % 7 === 0) {
  mensaje = "El " + numero + " es divisible por 7.";
}

if (mensaje) {
  document.write(mensaje);
}

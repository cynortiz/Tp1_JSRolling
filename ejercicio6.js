const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));

if (num1 > num2) {
  document.write("El " + num1 + " es el número más grande");
} else if (num2 > num1) {
  document.write("El " + num2 + " es el número más grande");
}

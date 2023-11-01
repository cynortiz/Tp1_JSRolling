const numero = parseFloat(prompt("Introduce un número:"));
let mensaje = "Es divisible por ";

if (numero % 2 === 0) {
  mensaje += "2";
}

if (numero % 3 === 0) {
  if (mensaje !== "Es divisible por ") {
    mensaje += " y 3";
  } else {
    mensaje += "3";
  }
}

if (numero % 5 === 0) {
  if (mensaje !== "Es divisible por ") {
    mensaje += " y 5";
  } else {
    mensaje += "5";
  }
}

if (numero % 7 === 0) {
  if (mensaje !== "Es divisible por ") {
    mensaje += " y 7";
  } else {
    mensaje += "7";
  }
}

document.write(mensaje);

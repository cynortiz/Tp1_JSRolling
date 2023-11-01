const frase = prompt("Escriba una frase:");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
  const caracter = frase.charAt(i).toLowerCase();
  if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
    vocales += caracter;
  }
}

document.write(vocales);

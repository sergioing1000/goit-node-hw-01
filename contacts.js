const fs = require("fs");
const path = require("path");

// Ejemplo de lectura de un archivo

function readFile () {

fs.readFile("./db/contacts.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }
  console.log("Contenido del archivo:", data);
});
  
}

// Ejemplo de obtención de la ruta absoluta de un archivo
const archivoPath = "archivo.txt";
const rutaAbsoluta = path.resolve(archivoPath);
console.log("Ruta absoluta del archivo:", rutaAbsoluta);

module.exports = {
  readFile: readFile,
};
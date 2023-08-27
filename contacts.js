const fs = require("fs");
const path = require("path");

const contactsPath = "./db/contacts.json";

const absolutePath = path.resolve(contactsPath);
console.log("Absolute path:", absolutePath);

const fileName = path.basename(contactsPath);
console.log("File name:", fileName);

const directoryName = path.dirname(contactsPath);
console.log("Directory name:", directoryName);

const extension = path.extname(contactsPath);
console.log("File extension:", extension);

const fullPath = path.join(__dirname, directoryName, fileName);
console.log("Full path:", fullPath);


console.log("******************************************")
console.log("******************************************");
console.log("******************************************");
console.log("******************************************");

console.log("    .__________________________.");
console.log("    | .___________________. |==|");
console.log("    | | ................. | |  |");
console.log("    | | ::::Windows:::::: | |  |");
console.log("    | | ::::::::::::::::: | |  |");
console.log("    | | ::::::::::::::::: | |  |");
console.log("    | | ::::::::::::::::: | |  |");
console.log("    | | ::::::::::::::::: | |  |");
console.log("    | | ::::::::::::::::: | | ,|");
console.log("    | !___________________! |(c|");
console.log("    !_______________________!__!");
//console.log("   /                            \");
//console.log("  /  [][][][][][][][][][][][][]  \");
//console.log(" /  [][][][][][][][][][][][][][]  \");
console.log("(  [][][][][____________][][][][]  )");
console.log(" \ ------------------------------ /");
console.log("  \______________________________/");











function readFile () {

fs.readFile("./db/contacts.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }
  //console.log("Contenido del archivo:", data);
});
  
}

module.exports = {
  readFile: readFile,
};
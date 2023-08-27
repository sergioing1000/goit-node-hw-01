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
console.log("    | | ::::\x1b[32mNode.JS\x1b[0m:::::: | |  |");
console.log("    | | ::::::::::::::::: | |  |");
console.log("    | | ::::::::::::::::: | |  |");
console.log("    | | ::::::::::::::::: | |  |");
console.log("    | | ::::::::::::::::: | |  |");
console.log("    | | ::::::::::::::::: | | ,|");
console.log("    | !___________________! |(c|");
console.log("    !_______________________!__!");
console.log("   /                            \\");
console.log("  /  \x1b[31m[][][][][][][][][][][][][]\x1b[0m  \\");
console.log(" /  \x1b[31m[][][][][][][][][][][][][][]\x1b[0m  \\");
console.log("(  \x1b[31m[][][][][____________][][][][]\x1b[0m  )");
console.log(" \\ ------------------------------ /");
console.log("  \\______________________________/");




function readFile () {

fs.readFile("./db/contacts.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer el archivo:", err);
    return;
  }
  console.log("Contenido del archivo:", data);
});
  
}


function listContacts() {
  console.log("Si entra a ala función");
  console.log("Prueba de lista de Contactos");
  console.log("===================================================");
}

function getContactById(contactId) {
  console.log("Si entra a ala función");
  console.log("Prueba de obtención un contacto mediante el Id");
  console.log("===================================================");
}

function removeContact(contactId) {
  console.log("Si entra a ala función");
  console.log("Prueba de remover un contacto");
  console.log("===================================================");
}

function addContact(name, email, phone) {
  console.log("Si entra a ala función");
  console.log("Prueba de adicionar un contacto");
  console.log("===================================================");
}


function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}


module.exports = {
  readFile: readFile,
  listContacts: listContacts,
  getContactById: getContactById,
  removeContact: removeContact,
  addContact: addContact,
};
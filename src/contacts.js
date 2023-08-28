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



function readFile() {
  fs.readFile("../db/contacts.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }
    console.table(JSON.parse(data));
  });
}

function listContacts() {
  console.log("╔═════════════════════════════════════╗");
  console.log("║         Lista de Contactos          ║");
  console.log("╚═════════════════════════════════════╝");
  readFile();
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
  console.log("╔═════════════════════════════════════╗");
  console.log("║       Adicionar de Contactos        ║");
  console.log("╚═════════════════════════════════════╝");
  console.log("===================================================");
  console.log(name);
  console.log(email);
  console.log(phone);
}

module.exports = {
  readFile: readFile,
  listContacts: listContacts,
  getContactById: getContactById,
  removeContact: removeContact,
  addContact: addContact,
};
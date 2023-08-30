const { error } = require("console");
const fs = require("fs");
const path = require("path");

const contactsPath = "./db/contacts.json";

const absolutePath = path.resolve(contactsPath);
//console.log("Absolute path:", absolutePath);

const fileName = path.basename(contactsPath);
//console.log("File name:", fileName);

const directoryName = path.dirname(contactsPath);
//console.log("Directory name:", directoryName);

const extension = path.extname(contactsPath);
//console.log("File extension:", extension);

const fullPath = path.join(__dirname, directoryName, fileName);
//console.log("Full path:", fullPath);

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
  readFileetContact(contactId);
}

function removeContact(contactId) {
  console.log("Si entra a ala función");
  console.log("Prueba de remover un contacto");
  console.log("===================================================");
}

function addContact(name, email, phone) {
  addContactTitle();
  addContactMain(name, email, phone);
}

function addContactTitle() {
  console.log("╔═════════════════════════════════════╗");
  console.log("║        Adicionar Contacto           ║");
  console.log("╚═════════════════════════════════════╝");
  console.log("===================================================");
}

async function addContactMain(name, email, phone) {
  const newContact = {
    id: "111111",
    name: name,
    email: email,
    phone: phone,
  };

  await new Promise((resolve) =>
    fs.readFile("../db/contacts.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
      try {
        const contacts = JSON.parse(data);
        contacts.push(newContact);

        console.table(contacts);

        const updatedContacts = JSON.stringify(contacts, null, 2);

        fs.writeFile("../db/contacts.json", updatedContacts, "utf8", (err) => {
          if (err) {
            console.error("Error writing file:", err);
            return;
          }
          console.log("New contact added successfully!");
        });
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
      }
    })
  );
}

function readFileetContact(id) {
  fs.readFile("../db/contacts.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }
    const cntcts = JSON.parse(data);
    let idFound = false;

    cntcts.forEach((element) => {
      if (element.id === id) {
        console.table(element);
        idFound = true;
      }
    });

    if (!idFound) {
      console.log("\x1b[31mNo existe un contacto con el id : \x1b[0m" + id);
    }
  });
}

module.exports = {
  readFile: readFile,
  listContacts: listContacts,
  getContactById: getContactById,
  removeContact: removeContact,
  addContact: addContact,
};

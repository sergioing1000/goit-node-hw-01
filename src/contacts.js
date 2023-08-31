const { ChildProcess } = require("child_process");
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
  fs.readFile("../db/contacts.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }
    const cntcts = JSON.parse(data);
    let idFound = false;

    cntcts.forEach((element) => {
      if (element.id === contactId) {
        console.table(element);
        idFound = true;
      }
    });

    if (!idFound) {
      console.log(
        "\x1b[31mNo existe un contacto con el id : \x1b[0m" + contactId
      );
    }
  });
}

function removeContact(contactId) {
  
  console.log("el contacto a remover es el que tenga el id " + contactId);

   fs.readFile("../db/contacts.json", "utf8", (err, data) => {
     if (err) {
       console.error("Error al leer el archivo:", err);
       return;
     }
     const cntcts = JSON.parse(data);
     let idFound = false;

     let indexFound = -1;
     

     cntcts.forEach((element,index) => {
       if (element.id === contactId) {
         console.log("si se encontró el elemento a remover");         
         indexFound = index;
       }
     });

     

     if (indexFound !== -1) {
       cntcts.splice(indexFound, 1);

       const updatedContacts = JSON.stringify(cntcts, null, 2);

        fs.writeFile("../db/contacts.json", updatedContacts, "utf8", (err) => {
          if (err) {
            console.error("Error writing file:", err);
            return;
          }

          console.table(cntcts);

          console.log(`Contact with id: ${contactId} was REMOVED successfully!`);
        });

     } else {
       console.log(
         "\x1b[31mNo existe un contacto con el id : \x1b[0m" + contactId
       );
     }


   });
  
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

  const customAlphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_"
  const id = nanoid(customAlphabet, 21);
  
  const newContact = {
    id: id,
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

module.exports = {
  readFile: readFile,
  listContacts: listContacts,
  getContactById: getContactById,
  removeContact: removeContact,
  addContact: addContact,
};

function nanoid(string, qty) {

  const arreglo = [...string];

  let  id = "";

  for (i = 0; i < qty; i++) {
    id = id + arreglo[Math.floor(Math.random() * arreglo.length)];
  }

  return id;
    
}
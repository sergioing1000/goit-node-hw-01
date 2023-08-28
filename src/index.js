const logo = require("./logo.js");
const actions = require("./actions.js");
const yargs = require("yargs");
import { customAlphabet } from "nanoid";

const generateUniqueID = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-',
  11
);

const uniqueID = generateUniqueID();

//contacts.readFile();
//contacts.listContacts();
//contacts.getContactById();
//contacts.removeContact();
//contacts.addContact();

const argv = yargs(process.argv.slice(2)).argv;
logo.logo();

if (argv.action === "add") {
  console.log(uniqueID);
} else {
  console.log("el id es: "+argv.id);
}

actions.invokeAction(argv.action, argv.name, argv.email, argv.phone);
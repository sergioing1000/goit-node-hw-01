const logo = require("./logo.js");
const yargs = require("yargs");
const actions = require("./actions.js");

//contacts.readFile();
//contacts.listContacts();
//contacts.getContactById();
//contacts.removeContact();
//contacts.addContact();

const argv = yargs(process.argv.slice(2)).argv;
logo.logo();
actions.invokeAction(argv.action);
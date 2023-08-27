const contacts = require("./contacts");

const yargs = require("yargs");

console.log("Hellow World");
console.log("123");


//contacts.readFile();
//contacts.listContacts();
//contacts.getContactById();
//contacts.removeContact();
//contacts.addContact();


const argv = yargs(process.argv.slice(2)).argv;

console.log("los valores de los argumentos son:");
console.log(argv);

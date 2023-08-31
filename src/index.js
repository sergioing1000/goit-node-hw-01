const logo = require("./logo.js");
const actions = require("./actions.js");


//const { customAlphabet } = require("../node_modules/nanoid/index.js");

// const alphabet =
//   "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

// const generateID = customAlphabet(alphabet, 10);

// const uniqueID = generateID();

// console.log(uniqueID);




const yargs = require("yargs");

const argv = yargs(process.argv.slice(2)).argv;
logo.logo();

actions.invokeAction(argv.action, argv.id, argv.name, argv.email, argv.phone);




const logo = require("./logo.js");
const actions = require("./actions.js");

const yargs = require("yargs");

const argv = yargs(process.argv.slice(2)).argv;
logo.logo();

actions.invokeAction(argv.action, argv.id, argv.name, argv.email, argv.phone);
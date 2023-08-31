
const contacts = require("./contacts.js");

function invokeAction(action = "", id = " ", name = " ", email = " ", phone = " ") {

    // console.log("en actions.js el valor de action es: " + action);
    // console.log("en actions.js el valor de id es: " + id);
    // console.log("en actions.js el valor de name es: " + name);
    // console.log("en actions.js el valor de email es: " + email);
    // console.log("en actions.js el valor de phone es: " + phone);

  switch (action) {
    case "list":
      contacts.listContacts();
      break;

    case "get":
      contacts.getContactById(id);
      break;

    case "add":
      contacts.addContact(name, email, phone);
      break;

    case "remove":
      contacts.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!\x1b[0m");
  }
}

module.exports = {
  invokeAction: invokeAction
};
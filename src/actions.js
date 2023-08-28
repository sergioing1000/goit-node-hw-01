const contacts = require("./contacts");

function invokeAction(action = "", id = " ", name = " ", email = " ", phone = " ") {
  switch (action) {
    case "list":
      contacts.listContacts();
      break;

    case "get":
      console.log("Emtra al get");
      break;

    case "add":
      contacts.addContact(name, email, phone);
      console.log(name + email + phone);
      break;

    case "remove":
      console.log("Emtra al remove");
      break;

    default:
      console.warn("\x1B[31m Unknown action type!\x1b[0m");
  }
}

module.exports = {
  invokeAction: invokeAction
};
const contacts = require("./contacts");

async function testContacts() {
  console.table(await contacts.listContacts());
  console.log(await contacts.getContactById("AeHIrLTr6JkxGE6SN-0Rw"));
  console.log(
    await contacts.addContact("John Doe", "john@example.com", "123-456-789")
  );
  console.table(await contacts.removeContact("AeHIrLTr6JkxGE6SN-0Rw"));
}

testContacts();

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(await contacts.listContacts());
      break;

    case "get":
      console.log(await contacts.getContactById(id));
      break;

    case "add":
      console.log(await contacts.addContact(name, email, phone));
      break;

    case "remove":
      console.table(await contacts.removeContact(id));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

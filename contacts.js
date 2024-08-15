const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

// Funkcja zwraca listę wszystkich kontaktów
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading contacts:", error);
    throw error;
  }
}

// Funkcja zwraca kontakt o podanym ID
async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contact = contacts.find((c) => c.id === contactId);
    return contact || null;
  } catch (error) {
    console.error(`Error finding contact with ID ${contactId}:`, error);
    throw error;
  }
}

// Funkcja usuwa kontakt o podanym ID i zwraca zaktualizowaną listę kontaktów
async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const updatedContacts = contacts.filter((c) => c.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
    return updatedContacts;
  } catch (error) {
    console.error(`Error removing contact with ID ${contactId}:`, error);
    throw error;
  }
}

// Funkcja dodaje nowy kontakt do listy i zwraca nowo dodany kontakt
async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = { id: generateUniqueId(), name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.error("Error adding new contact:", error);
    throw error;
  }
}

// Funkcja generuje unikalny ID dla nowego kontaktu
function generateUniqueId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

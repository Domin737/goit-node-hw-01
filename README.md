# Simple contacts manager in Node.JS

This application is a command-line interface (CLI) for managing contacts using Node.js. The application allows users to list, add, get, and remove contacts stored in a JSON file. It demonstrates the use of file operations, command-line argument parsing, and basic error handling in Node.js.

## Features

- **List Contacts**: Display all contacts stored in the JSON file in a tabular format.
- **Get Contact by ID**: Retrieve a contact's details using their unique ID.
- **Add Contact**: Add a new contact with a name, email, and phone number to the list.
- **Remove Contact**: Remove a contact from the list using their unique ID.

## Usage Examples

### 1. List all contacts

To list all contacts and display them in a table format, use the following command:

```bash
node index.js --action list
```

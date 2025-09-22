/// <reference path="./crud.d.ts" />

// Import types from interface.ts
import { ROWID, ROWElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create an object called row of type ROWElement
const row: ROWElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Create a variable newROWID (of type ROWID) initialized with insertRow
const newROWID: ROWID = CRUD.insertRow(row);

// Create updatedRow with age field
const updatedRow: ROWElement = { ...row, age: 23 };

// Call updateRow and deleteRow
CRUD.updateRow(newROWID, updatedRow);
CRUD.deleteRow(newROWID);
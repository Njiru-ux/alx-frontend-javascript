/// <reference path="./crud.d.ts" />

// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create an object called row with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Create newRowID with type RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create updatedRow with age field
const updatedRow: RowElement = { ...row, age: 23 };

// Call updateRow and deleteRow
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

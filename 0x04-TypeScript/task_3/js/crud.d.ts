// Import ROWID and ROWElement from interface.ts
import { ROWID, ROWElement } from './interface';

// Declare the crud functions with exact pattern
declare function insertRow(row: ROWElement): number;
declare function deleteRow(rowId: ROWID): void;
declare function updateRow(rowId: ROWID, row: ROWElement): ROWID;

export { insertRow, deleteRow, updateRow };
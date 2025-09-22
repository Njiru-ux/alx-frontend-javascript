// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Declare the crud functions
export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;

import React from 'react';
import { FileBrowserHistory } from '../common_types';

export interface ViewContextContract {
    currentFileSizeGtFilterValue: number;
    handleFileSizeFilterInputChange: (newFilterValue: number) => void;
    currentFileSizeLtFilterValue: number;
    handleFileSizeLessThanFilterInputChange: (newFilterValue: number) => void;
    tableRows: any[];
    handleFilePathClick: (isUpDir: boolean, fileBrowserHistory: FileBrowserHistory[], path: string) => void;
    fileBrowserHistory: FileBrowserHistory[];
    fileBrowserRowCount: number;
    handleChangePage: (event: unknown, newPage: number) => void;
    currentPage: number;
    handleEntryTypeDropdownSelection: (selectionValue: 'Directory' | 'File' | '') => void;
    entryTypeFilterValue: 'Directory' | 'File' | '';
    handleEntryNameFilterChange: (newEntryNameFilterValue: string) => void;
}

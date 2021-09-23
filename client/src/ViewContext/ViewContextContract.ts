import React from 'react';
import { FileBrowserHistory } from '../common_types';

export interface ViewContextContract {
    handleDeleteFileSizeFilter: () => void;
    currentFileSize: number;
    handleFileSizeFilterInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
    tableRows: any[];
    handleFilePathClick: (isUpDir: boolean, fileBrowserHistory: FileBrowserHistory[], path: string) => void;
    fileBrowserHistory: FileBrowserHistory[];
    fileBrowserRowCount: number;
    handleChangePage: (event: unknown, newPage: number) => void;
    currentPage: number;
    handleFIleTypeDropdownSelection: (selectionValue: 'Directory' | 'File' | null) => void;
    fileExtensionFilterValue: 'Directory' | 'File' | null;
}

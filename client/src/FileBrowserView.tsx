import React from 'react';
import { FileBrowserScreenSetup } from './components';
import FileBrowserToolBar from './components/FileBrowserToolBar';
import FileBrowserFilesTable from './components/FileBrowserFilesTable/FileBrowserFilesTable';
import FileBrowserTablePagination from './components/FileBrowserTablePagination';

/* this is a high-level view of the file browser. It has only general layout and
 * big blocks of code (header-body-footer effectively) */
export const FileBrowserView: React.FunctionComponent = () => {
    return (
        <FileBrowserScreenSetup>
            <FileBrowserToolBar />
            <FileBrowserFilesTable />
            <FileBrowserTablePagination />
        </FileBrowserScreenSetup>
    );
};

export default FileBrowserView;

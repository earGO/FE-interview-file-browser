import React from 'react';
import { FileBrowserScreenSetup } from './components';
import FileBrowserToolBar from './components/FileBrowserToolBar';
import FileBrowserFilesTable from './components/FileBrowserFilesTable/FileBrowserFilesTable';
import FileBrowserTablePagination from './components/FileBrowserTablePagination';

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

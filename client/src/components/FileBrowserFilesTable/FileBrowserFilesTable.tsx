import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';

import Table from '@material-ui/core/Table';
import { UseViewContext } from '../../ViewContext';
import { FileBrowserHistory } from '../../common_types';
import { useStyles } from '../../common_ui';
import FilesTableHeader from './FilesTableHeader';
import FilesTableBody from './FilesTableBody';

export const FileBrowserFilesTable: React.FunctionComponent = () => {
    const viewContext = UseViewContext();
    const classes = useStyles();

    const tableRows = viewContext?.tableRows || [];
    const contextFileBrowserHistory = viewContext?.fileBrowserHistory || [];

    const handleFilePathClick = (isUpDir: boolean, fileBrowserHistory: FileBrowserHistory[], path: string): void => {
        viewContext && viewContext.handleFilePathClick(isUpDir, fileBrowserHistory, path);
    };

    return (
        <TableContainer>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <FilesTableHeader />
                <FilesTableBody
                    rows={tableRows}
                    handleFilePathClick={handleFilePathClick}
                    fileBrowserHistory={contextFileBrowserHistory}
                />
            </Table>
        </TableContainer>
    );
};

export default FileBrowserFilesTable;

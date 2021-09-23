import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { UseViewContext } from '../ViewContext/useViewContext';

export const FileBrowserTablePagination: React.FunctionComponent = () => {
    const viewContext = UseViewContext();

    const rowCount = viewContext?.fileBrowserRowCount || 0;
    const currentPage = viewContext?.currentPage || 1;

    const handleChangePage = (event: unknown, newPage: number): void => {
        viewContext && viewContext.handleChangePage(event, newPage);
    };

    return (
        <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={rowCount}
            rowsPerPage={25}
            page={currentPage - 1}
            onChangePage={handleChangePage}
        />
    );
};

export default FileBrowserTablePagination;

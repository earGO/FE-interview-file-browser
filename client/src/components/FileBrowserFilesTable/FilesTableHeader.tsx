import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export const FilesTableHeader: React.FunctionComponent = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Path</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Size</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default FilesTableHeader;

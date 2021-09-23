import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import { FileBrowserHistory } from '../../common_types';

interface TableBodyProps {
    rows: any[];
    handleFilePathClick: (isUpDir: boolean, fileBrowserHistory: FileBrowserHistory[], path: string) => void;
    fileBrowserHistory: FileBrowserHistory[];
}

export const FilesTableBody: React.FunctionComponent<TableBodyProps> = (
    props: React.PropsWithChildren<TableBodyProps>,
) => {
    const { rows, handleFilePathClick, fileBrowserHistory } = props;
    return (
        <TableBody>
            {rows.map(({ path, __typename, name, size, id }) => {
                const isUpDir = __typename === 'UP_DIR';
                return (
                    <TableRow key={id}>
                        <TableCell component="th" scope="row">
                            <Button
                                color="primary"
                                disabled={__typename === 'File'}
                                startIcon={
                                    isUpDir ? (
                                        <MoreHorizIcon />
                                    ) : __typename === 'File' ? null : (
                                        <SubdirectoryArrowRightIcon />
                                    )
                                }
                                onClick={() => handleFilePathClick(isUpDir, fileBrowserHistory, path)}
                            >
                                {!isUpDir ? path : ''}
                            </Button>
                        </TableCell>
                        <TableCell align="right">{isUpDir ? '_' : name}</TableCell>
                        <TableCell align="right">{isUpDir ? '_' : __typename}</TableCell>
                        <TableCell align="right">{isUpDir ? '_' : size}</TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default FilesTableBody;

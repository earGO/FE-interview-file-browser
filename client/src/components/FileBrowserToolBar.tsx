import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { EntryNameFilter, EntryTypeFilter, FileSizeGreaterThanFilter, FileSizeLessThanFilter } from './Filters';

export const FileBrowserToolBar: React.FunctionComponent = () => {
    return (
        <Toolbar>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                <Typography variant="h6">File Browser</Typography>
                <FileSizeGreaterThanFilter />
                <FileSizeLessThanFilter />
                <EntryTypeFilter />
                <EntryNameFilter />
            </Box>
        </Toolbar>
    );
};

export default FileBrowserToolBar;

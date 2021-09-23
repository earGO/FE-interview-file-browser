import React from 'react';
import { Box, Paper } from '@material-ui/core';

export const FileBrowserScreenSetup: React.FunctionComponent = (props: React.PropsWithChildren<{}>) => {
    return (
        <Box display="flex" height="100%">
            <Box flexGrow={1}>
                <Paper>{props.children}</Paper>
            </Box>
        </Box>
    );
};

export default FileBrowserScreenSetup;

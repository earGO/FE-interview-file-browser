import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export const LoadingStatus: React.FunctionComponent = () => {
    return (
        <Box minWidth={240} display={'flex'} justifyContent={'center'} alignContent={'center'}>
            <Typography>Loading...</Typography>
        </Box>
    );
};

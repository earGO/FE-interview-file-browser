import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

interface ErrorStatusProps {
    message: string;
}

export const ErrorStatus: React.FunctionComponent<ErrorStatusProps> = (props: ErrorStatusProps) => {
    const { message } = props;
    return (
        <Box minWidth={240} display={'flex'} justifyContent={'center'} alignContent={'center'}>
            <Typography>{message}</Typography>
        </Box>
    );
};

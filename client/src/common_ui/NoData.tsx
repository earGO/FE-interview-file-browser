import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

interface NoDataProps {
    message: string;
}

/* I know it looks like it's doubling ErrorStatus, but I don't know what I might need from this component in future */
export const NoData: React.FunctionComponent<NoDataProps> = (props: NoDataProps) => {
    const { message } = props;
    return (
        <Box minWidth={240} display={'flex'} justifyContent={'center'} alignContent={'center'}>
            <Typography>{message}</Typography>
        </Box>
    );
};

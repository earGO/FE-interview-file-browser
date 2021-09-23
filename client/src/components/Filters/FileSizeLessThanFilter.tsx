import React from 'react';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import { UseViewContext } from '../../ViewContext';

export const FileSizeLessThanFilter: React.FunctionComponent = () => {
    const viewContext = UseViewContext();
    const fileSize = viewContext?.currentFileSize || 0;

    const handleFileSizeFilterInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        viewContext && viewContext.handleFileSizeFilterInputChange(event);
    };

    const handleDelete = () => {
        viewContext && viewContext.handleDeleteFileSizeFilter();
    };
    return (
        <Box>
            <Chip
                color="primary"
                onDelete={handleDelete}
                label={
                    <Box>
                        <strong>File Size &lt;</strong>
                        <input
                            onChange={handleFileSizeFilterInputChange}
                            type="number"
                            value={fileSize}
                            style={{
                                marginLeft: 8,
                                background: 'transparent',
                                color: 'white',
                                border: 'none',
                                width: 80,
                            }}
                        />
                    </Box>
                }
            />
        </Box>
    );
};

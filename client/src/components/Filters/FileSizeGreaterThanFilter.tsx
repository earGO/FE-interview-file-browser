import React from 'react';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import { UseViewContext } from '../../ViewContext';

export const FileSizeGreaterThanFilter: React.FunctionComponent = () => {
    const viewContext = UseViewContext();
    const fileSize = viewContext?.currentFileSizeGtFilterValue || 0;

    const handleFileSizeFilterInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        viewContext && viewContext.handleFileSizeFilterInputChange(Number(event.currentTarget.value));
    };

    const handleDelete = () => {
        viewContext && viewContext.handleFileSizeFilterInputChange(0);
    };
    return (
        <Box>
            <Chip
                color="primary"
                onDelete={handleDelete}
                label={
                    <Box>
                        <strong>File Size &gt;</strong>
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

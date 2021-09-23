import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import { UseViewContext } from '../../ViewContext';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export const FileExtensionFilter: React.FunctionComponent = () => {
    const viewContext = UseViewContext();

    const fileExtensionFilterValue = viewContext?.fileExtensionFilterValue || '';

    const handleFileExtensionSelect = (event: any) => {
        if (event.target.value == 'Directory' || event.target.value == 'File')
            viewContext && viewContext.handleFIleTypeDropdownSelection(event.target.value);
    };

    const handleDelete = () => {
        viewContext && viewContext.handleFIleTypeDropdownSelection(null);
    };
    return (
        <Box>
            <Chip
                color="primary"
                onDelete={handleDelete}
                label={
                    <Box minWidth={128} display={'flex'} justifyContent={'flex-end'}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={fileExtensionFilterValue}
                            onChange={handleFileExtensionSelect}
                            autoWidth={true}
                            classes={{ icon: 'white' }}
                        >
                            <MenuItem value={'Directory'}>Directory</MenuItem>
                            <MenuItem value={'File'}>File</MenuItem>
                        </Select>
                    </Box>
                }
            />
        </Box>
    );
};

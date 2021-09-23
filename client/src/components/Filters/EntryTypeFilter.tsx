import React from 'react';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import { UseViewContext } from '../../ViewContext';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export const EntryTypeFilter: React.FunctionComponent = () => {
    const viewContext = UseViewContext();

    const fileExtensionFilterValue = viewContext?.entryTypeFilterValue || '';

    const handleFileExtensionSelect = (event: any) => {
        if (event.target.value === 'Directory' || event.target.value === 'File')
            viewContext && viewContext.handleEntryTypeDropdownSelection(event.target.value);
    };

    const handleDelete = () => {
        viewContext && viewContext.handleEntryTypeDropdownSelection('');
    };
    return (
        <Box>
            <Chip
                color="primary"
                onDelete={handleDelete}
                label={
                    <Box minWidth={128} display={'flex'} justifyContent={'space-between'}>
                        <strong id={'entry-type-filter-label'}>Type</strong>
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

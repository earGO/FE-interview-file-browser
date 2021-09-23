import React, { useEffect, useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import { UseViewContext } from '../../ViewContext';
import TextField from '@material-ui/core/TextField';
import { useDebounce } from '../../hooks';

export const EntryNameFilter: React.FunctionComponent = () => {
    const viewContext = UseViewContext();
    const [localInputValue, setLocalInputValue] = useState<string>('');

    const debouncedInputValue = useDebounce(localInputValue, 400);

    useEffect(() => {
        if (debouncedInputValue && viewContext) {
            viewContext.handleEntryNameFilterChange(debouncedInputValue);
        }
    }, [debouncedInputValue]);

    const fileExtensionFilterValue = viewContext?.entryTypeFilterValue || '';

    const handleFileNameInputChange = (event: any) => {
        setLocalInputValue(event.target.value as string);
    };

    const handleDelete = () => {
        setLocalInputValue('');
        viewContext && viewContext.handleEntryNameFilterChange('');
    };
    return (
        <Box>
            <Chip
                color="primary"
                onDelete={handleDelete}
                label={
                    <Box minWidth={128} display={'flex'} justifyContent={'flex-end'}>
                        <TextField
                            id="file-name-text-input"
                            value={localInputValue}
                            onChange={handleFileNameInputChange}
                        />
                    </Box>
                }
            />
        </Box>
    );
};

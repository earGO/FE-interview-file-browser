import React from 'react';

import Box from '@material-ui/core/Box';

import FileBrowserScreenViewModel from './FileBrowserScreenViewModel';
import './App.css';

function App() {
    return (
        <Box component="main" className="App-main" p={2} mt={6} mx="auto" maxWidth={1200}>
            <FileBrowserScreenViewModel />
        </Box>
    );
}

App.whyDidYouRender = true;
export default App;

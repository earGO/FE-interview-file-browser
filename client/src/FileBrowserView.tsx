import React from 'react';
import { FileBrowserScreenSetup } from './components';
import FileBrowserToolBar from './components/FileBrowserToolBar';

export const FileBrowserView: React.FunctionComponent = () => {
    return (
        <FileBrowserScreenSetup>
            <FileBrowserToolBar />
        </FileBrowserScreenSetup>
    );
};

export default FileBrowserView;

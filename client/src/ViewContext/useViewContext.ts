import { useContext } from 'react';
import { ViewContextContract } from './ViewContextContract';
import ViewContext from './ViewContext';

export const UseViewContext = () => {
    return useContext<ViewContextContract | null>(ViewContext);
};

export default UseViewContext;

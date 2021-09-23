import { useContext } from 'react';
import { ViewContextContract } from './ViewContextContract';
import ViewContext from './ViewContext';

/* for some funny reasons React wanted me to use upper case "U" in name */
export const UseViewContext = () => {
    return useContext<ViewContextContract | null>(ViewContext);
};

export default UseViewContext;

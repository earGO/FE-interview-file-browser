import React from 'react';
import { ViewContextContract } from './ViewContextContract';

const ViewContext = React.createContext<ViewContextContract | null>(null);

export const ViewContextProvider: React.FunctionComponent<ViewContextContract> = (
    props: React.PropsWithChildren<ViewContextContract>,
) => {
    const { children, ...rest } = props;
    return <ViewContext.Provider value={{ ...rest }}>{children}</ViewContext.Provider>;
};

export default ViewContext;

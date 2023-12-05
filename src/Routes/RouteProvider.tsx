import React, { FC } from 'react';

// Routes
import  MasterRoutes  from "./MasterRoutes";

// Interfaces
interface NavProviderInf {
    children?: React.ReactNode;
}

const RouteProvider: FC<NavProviderInf> = ({ children }) => {
    return (
        <React.Fragment>
            { children }
            <MasterRoutes />
        </React.Fragment>
    )
}

export default RouteProvider
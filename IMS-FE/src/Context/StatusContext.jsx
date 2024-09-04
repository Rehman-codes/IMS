import React, { createContext, useState } from 'react';

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
    const [actionStatus, setActionStatus] = useState(true);
    const [statusMessage, setStatusMessage] = useState('success message!');

    return (
        <StatusContext.Provider value={{ actionStatus, setActionStatus, statusMessage, setStatusMessage }}>
            {children}
        </StatusContext.Provider>
    );
};
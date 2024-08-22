import React, { createContext, useState } from 'react';

export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
    const [actionStatus, setActionStatus] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');

    return (
        <StatusContext.Provider value={{ actionStatus, setActionStatus, statusMessage, setStatusMessage }}>
            {children}
        </StatusContext.Provider>
    );
};
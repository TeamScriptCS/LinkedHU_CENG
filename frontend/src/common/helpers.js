
import React, { useContext } from 'react';


import { AccountBox, AdminPanelSettings, Person, School } from '@mui/icons-material';
import { ApplicationContext } from './context';

const switchAlignment = (alignment, sx) => {
    switch (alignment) {
        case 'graduate':
            return <School sx={sx}/>
        case 'student':
            return <AccountBox sx={sx}/>

        case 'admin':
            return <AdminPanelSettings sx={sx}/>
        case 'academic':
            return <Person sx={sx}/>
        default:
            return <AccountBox sx={sx}/>
    }
}


const enqueueSnackbar = (methods, message, type) => {
    
    const {showSnackbar, setSnackbarMessage } = methods;
    setSnackbarMessage({
        message,
        type
    });
    showSnackbar(true);
};

    

export {
    switchAlignment,
    enqueueSnackbar
}
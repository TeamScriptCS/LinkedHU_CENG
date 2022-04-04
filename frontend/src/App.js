
import { useState } from 'react';

import {Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

import Navbar from './components/Navbar';

import { ApplicationContext } from './common/context';

import './App.css';
import { Alert, Snackbar } from '@mui/material';
import Sidebar from './components/Sidebar';

function App() {

  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isSnackbarOpen, showSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const [contextMethods, setContextMethods] = useState({
    isLoginPage,
    setIsLoginPage,
    showSnackbar,
    setSnackbarMessage,
    isLogged,
    setIsLogged
  });

  

  
  return (
    <ApplicationContext.Provider value={{contextMethods, setContextMethods}}>
      <header className="App-header">
        <Navbar />  

        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={3000}
          message={snackbarMessage.message}
          onClose={() => showSnackbar(false)}
        >
          <Alert severity={snackbarMessage.type}>
            {snackbarMessage.message}
          </Alert>
          </Snackbar>
          
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </header>
    </ApplicationContext.Provider>
  );
}

export default App;

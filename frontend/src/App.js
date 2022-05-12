
import { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Intro from './pages/Intro';
import Register from './pages/Register';

import Navbar from './components/Navbar';

import { ApplicationContext } from './common/context';

import { Alert, Snackbar } from '@mui/material';


import {loadUserData, saveUserData, login} from './common/methods';


import './App.css';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';

function App() {

  const [snackbarInfo, setSnackbarInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState(loadUserData());
  

  const logout = () => {
    setIsLoggedIn(false);
    saveUserData(null);
  }
      
  const [contextMethods, setContextMethods] = useState({
    setSnackbarInfo,
    isLoggedIn,
    setIsLoggedIn,
    login,
    // register,
    logout,
    user,
    refreshUser: () => setUser(loadUserData())
  });


  useEffect(() => {
    setUser(loadUserData());
  }, []);

  useEffect(() => {
  
    if(user && user.expiresIn > Date.now()) {
      setIsLoggedIn(true);
    }
  }, [user]);




  return (
    <ApplicationContext.Provider value={{contextMethods, setContextMethods}}>
      <header className="App-header">
        <Navbar isLoggedIn={isLoggedIn} />  

        <Snackbar
          open={snackbarInfo.open}
          autoHideDuration={3000}
          message={snackbarInfo.message}
          onClose={() => setSnackbarInfo({...snackbarInfo, open: false})}
        >
          <Alert severity={snackbarInfo.variant}>
            {snackbarInfo.message}
          </Alert>
          </Snackbar>
          
        
      </header>
      <div>
        <Routes>
          <Route path="/" exact element={isLoggedIn ? <Home/> : <Intro />} />
          <Route path="/login" element={isLoggedIn ? <Home/> : <Login/>} />
          <Route path="/register" element={isLoggedIn ? <Home/> : <Register/>} />
          <Route path="/forgot-password" element={isLoggedIn ? <Home/> : <ForgotPassword />} />
        </Routes>
      </div>

      
    <footer>
      <p>
        Copyright &copy; 2022 LinkedHU CENG. TeamScript. All rights reserved.
      </p>

    </footer>
    </ApplicationContext.Provider>
  );
}

export default App;

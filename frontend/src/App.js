
import { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Intro from './pages/Intro';
import Register from './pages/Register';

import Navbar from './components/Navbar';

import { ApplicationContext } from './common/context';

import { Alert, Snackbar } from '@mui/material';

import loginFetch from './api/loginFetch';
import registerFetch from './api/registerFetch';


import './App.css';
import Home from './pages/Home';

import Profile from './pages/Profile'



  const loadUserData = () => {
    return JSON.parse(localStorage.getItem('userData'));
  }

  const saveUserData = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }




function App() {

  const [snackbarInfo, setSnackbarInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (username, password, userType, isRememberMe) => {
    
    try {
      const res = await loginFetch(username, password, userType);
      
      if (res.status === 200) {
        setIsLoggedIn(true);
        setSnackbarInfo({
          open: true,
          message: 'Login Successful',
          variant: 'success'
        });

        saveUserData({
          username,
          password,
          userType,
          expiresIn: isRememberMe ? new Date().getTime() + (1000 * 60 * 60 * 24 * 7) : new Date().getTime() + (1000 * 60 * 60 * 24 * 1)
        });


      } else {
        throw new Error(res.message);
      }
    } catch (err) {
      setSnackbarInfo({
        open: true,
        message: "Login Failed",
        variant: 'error'
      });
    }
  }

  const register = async (userInfo, userType, studentType) => {

    try {
      const res = await registerFetch(userInfo, userType, studentType);

      if (res.status === 200) {
        setSnackbarInfo({
          open: true,
          message: 'Registration Successful',
          variant: 'success'
        });
      } else {
        throw new Error(res.message);
      }
    } catch (err) {
      setSnackbarInfo({
        open: true,
        message: "Registration Failed",
        variant: 'error'
      });
    }
  }


  const logout = () => {
    setIsLoggedIn(false);
    saveUserData(null);
  }
      
  const [contextMethods, setContextMethods] = useState({
    setSnackbarInfo,
    isLoggedIn,
    setIsLoggedIn,
    login,
    register,
    logout
  });



  useEffect(() => {
    
    const userData = loadUserData();
    
    if(userData && userData.expiresIn > Date.now()) {
      setIsLoggedIn(true);
    }
  }, []);


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
          <Route path="/profile" element={isLoggedIn ? <Profile/> : <Login/>}/>
        </Routes>
      </div>
    </ApplicationContext.Provider>
  );
}

export default App;

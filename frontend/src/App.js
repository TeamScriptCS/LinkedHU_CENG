
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
import advertPublishFetch from './api/advertFetch';



const loadUserData = () => {
  return JSON.parse(localStorage.getItem('userData'));
}

const saveUserData = (userData) => {
  localStorage.setItem('userData', JSON.stringify(userData));
}



function App() {

  const [snackbarInfo, setSnackbarInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState(loadUserData());
  

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

        const userDTO = {
          ...res.user,
          expiresIn: isRememberMe ? new Date().getTime() + (1000 * 60 * 60 * 24 * 7) : new Date().getTime() + (1000 * 60 * 60 * 24 * 1)
        };
        saveUserData(userDTO);
        setUser(userDTO);

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
    try {
      
    } catch (err) {
      setSnackbarInfo({
        open: true,
        message: "Registration Failed",
        variant: 'error'
      });
    }
  }

  const advertPublish = async (advert, advertType) => {
    
    try {
      const res = {
        status: 200
      };//await advertPublishFetch(advert);
      if (res.status === 200) {
        setSnackbarInfo({
          open: true,
          message: 'Advert Published',
          variant: 'success'
        });
        
        contextMethods.setCurrentPage("home");
  
      }
      else {
        throw new Error(res.message);
      }
  
      return true;
    } catch (err) {
      setSnackbarInfo({
        open: true,
        message: "Advert Publish Failed",
        variant: 'error'
      });
      return false;
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
    logout,
    user,
    advertPublish,
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

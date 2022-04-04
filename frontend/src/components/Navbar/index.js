import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, TextField, IconButton, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { ApplicationContext } from "../../common/context";

import './navbar.css';
import SearchBox from "../SearchBox";
const Navbar = () => {

    const { contextMethods: { isLoginPage, setIsLoginPage }} = useContext(ApplicationContext);

    return (
       <>
        <AppBar
        style={{backgroundColor:"#141932"}}
        position="static"

      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
          </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }} >
                <Link to="/" className="app-logo app-nav-link"><b>LinkedHU</b> CENG</Link>
            </Typography>

            <SearchBox />


            <Button variant="outlined"  style={{ color:"#A6A9B1 ", border:"1px dashed #fff !important"  }} className="app-nav-button"   onClick={() => setIsLoginPage(!isLoginPage)}>
              Login
            </Button>
            <Button variant="contained" style={{ backgroundColor: "#7A5D81" }} className="app-nav-button"  onClick={() => setIsLoginPage(!isLoginPage)}>
              Register
            </Button>

        </Toolbar>
      </AppBar>
      <Toolbar />
     </>  
    );
}

export default Navbar;
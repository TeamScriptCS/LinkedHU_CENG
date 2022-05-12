import React, { useContext, useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, MenuItem, IconButton, Menu, Button, ButtonGroup, Divider } from '@mui/material';

import { Link } from 'react-router-dom';


import './navbar.css';
import { UploadFile, Article } from "@mui/icons-material";
import { ApplicationContext } from "../../common/context";

import SearchBox from "../SearchBox";

const Navbar = ({isLoggedIn}) => {

    const {contextMethods, setContextMethods }  = useContext(ApplicationContext);
    const [currentPage, setCurrentPage] = useState('home');
    const { user } = contextMethods;


    useEffect(() => {
        setContextMethods({
            ...contextMethods,
            currentPage: currentPage,
            setCurrentPage: setCurrentPage
        });
    }, [currentPage, setCurrentPage]);

    

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
          
          <div style={{display:"flex", flexDirection:"row", flexGrow:"1"}}>
            <Typography variant="h6" sx={{flexGrow:1}}>
                <Link to="/" className="app-logo app-nav-link"><b>LinkedHU</b> CENG</Link>
            </Typography>
            
            {isLoggedIn &&<Typography sx={{marginRight: "20%"}} >
                <SearchBox/>
            </Typography>}

            

          </div>

            
            

          {isLoggedIn ? (
            
            <div style={{

              justifyContent: "flex-end",
              display: "flex",
              alignItems: "center",

            }}>
              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" 
                sx={{mr:"100px"}}>
                
                <Button sx={{mr:'10px'}} variant={currentPage === "home" ? "contained":"outlined"} 
                  {...(currentPage === "home" ? {style:{backgroundColor:"#2d4f4f"}}:{style:{color:"#fff"}})}
                  onClick={() => setCurrentPage('home')}>
                  Home
                </Button>
                <Button sx={{mr:'5px'}} variant={currentPage === "announcement" ? "contained":"outlined"}
                  {...(currentPage === "announcement" ? {style:{backgroundColor:"#2d4f4f"}}:{style:{color:"#fff"}})}
                  onClick={() => setCurrentPage('announcement')}>
                    Announcements
                </Button>
                <Button sx={{mr:'5px'}} variant={currentPage === "request" ? "contained":"outlined"}
                  {...(currentPage === "request" ? {style:{backgroundColor:"#2d4f4f"}}:{style:{color:"#fff"}})}
                  onClick={() => setCurrentPage('request')}>
                    Send Request
                </Button>
                </ButtonGroup>

                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">

                {user && user.userType === "student" ? null : (<Button variant="contained" aria-label="publish" style={{backgroundColor:"#7a5d81", textTransform: "capitalize", marginRight:"4px"}}
                  onClick={() => setCurrentPage('publish')}>
                
                  <Article sx={{"mr":1}}/>
                   
                  Publish Advertisement
                </Button>)}

                <Button variant="contained" aria-label="upload" style={{backgroundColor:"#7a5d81", textTransform: "capitalize", marginRight:"20px"}}
                 onClick={() => setCurrentPage('upload')}>
                  <UploadFile sx={{"mr":1}}/>
                  Upload Document
                </Button>
                </ButtonGroup>
                 <IconButton
                    aria-label="account of current user"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    style={{marginRight:"8px"}}
                  >
                    <img src="./static/img/user.jpg" alt="profile" style={{ height:"48px", width:"48px", borderRadius:"50%"}}/>
                    <span style={{fontSize:"12px", fontWeight:"bold", color:"#fff"}}>{user && user.name}</span>
                  </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        
        <MenuItem onClick={() => {
          handleClose();
          setCurrentPage('profile');
        }}>Profile</MenuItem>
        
        <Divider />
        {user && user.userType === "admin" ? (<MenuItem onClick={() => {
          handleClose();
        }
        }>Manage Accounts</MenuItem>): null}

        <MenuItem 
        onClick={() => {
        }
        }>Manage Videos</MenuItem>
        <Divider/>

        <MenuItem onClick={() => {
          contextMethods.logout();
          setAnchorEl(null);
          contextMethods.setCurrentPage('home');
        }}>Logout</MenuItem>
      </Menu>


            </div>
          ) : (
            <ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
              <Button variant="contained" color="secondary" style={{marginRight:'4px', backgroundColor:'#2d4f4f'}}>
                        <Link to="/register" className="app-nav-link" >Register</Link>
                    </Button>
                    
                    <Button variant="contained" color="primary"
                           style={{backgroundColor:'#7a5d81'}} >
                        <Link to="/login" className="app-nav-link">Login</Link>
                    </Button>
            </ButtonGroup>
          )}


        </Toolbar>
      </AppBar>
      <Toolbar />
     </>  
    );
}

export default Navbar;
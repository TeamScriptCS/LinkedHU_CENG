import React, { useContext, useState } from "react";
import { AppBar, Toolbar, Typography, MenuItem, IconButton, Menu, Button, ButtonGroup } from '@mui/material';

import { Link } from 'react-router-dom';


import './navbar.css';
import { UploadFile } from "@mui/icons-material";
import { ApplicationContext } from "../../common/context";


const Navbar = ({isLoggedIn}) => {

    const {contextMethods} = useContext(ApplicationContext);
    const [currentPage, setCurrentPage] = useState('home');

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
            <Typography variant="h6" sx={{flexGrow:1, maxWidth:"20%"}}>
                <Link to="/" className="app-logo app-nav-link"><b>LinkedHU</b> CENG</Link>
            </Typography>
            
            {/* searchbox with Search icon */}
            

          </div>

            
            

          {isLoggedIn ? (
            
            <div style={{

              justifyContent: "flex-end",
              display: "flex",
              alignItems: "center",

            }}>
              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" 
                sx={{mr:"50px"}}>
                
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
                <Button sx={{mr:'5px'}} variant={currentPage === "link2" ? "contained":"outlined"} 
                  {...(currentPage === "link2" ? {style:{backgroundColor:"#2d4f4f"}}:{style:{color:"#fff"}})}
                  onClick={() => setCurrentPage('link2')}>
                  Link2
                </Button>


                </ButtonGroup>
                <Button variant="contained" aria-label="upload" style={{backgroundColor:"#7a5d81", textTransform: "capitalize", marginRight:"20px"}}>
                  <UploadFile sx={{"mr":1}}/>
                  Upload Document
                </Button>
                 <IconButton
                    aria-label="account of current user"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    style={{marginRight:"8px"}}
                  >
                    <img src="./static/img/user.jpg" alt="profile" style={{ height:"48px", width:"48px", borderRadius:"50%"}}/>
                  </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={contextMethods.logout}>Logout</MenuItem>
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
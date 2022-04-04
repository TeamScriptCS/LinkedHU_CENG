
import React, { useContext, useEffect } from "react";

import { Button, Card } from "@mui/material";
import { ExitToApp, AssignmentInd } from '@mui/icons-material';


import {Link} from 'react-router-dom';

import './home.css';
import { ApplicationContext } from "../../common/context";
import Sidebar from "../../components/Sidebar";

const Home = () => {

    const {contextMethods: { setIsLoginPage}}  = useContext(ApplicationContext);

    useEffect(() => {
        setIsLoginPage(true);
    }, [setIsLoginPage]);

    return (
        <div className="home">
            
            <Sidebar />

            <Card className="home-card">
                
                <h1>Welcome to LinkedHU CENG</h1>
    
                <p>LinkedHU is a social network application that connects students, academics and administrators to each other.</p>
                
                <p>If you are new to LinkedHU CENG, please click on <b>Register</b>, otherwise, click on <b>Login</b>.</p>   
                
                
                <div style={{"display":"flex", "justifyContent":"center", marginTop:"8px"}}>
                    <Button variant="contained" color="primary" style={{backgroundColor:"#7A5D81"}}
                            sx={{padding:"8px", margin:"8px"}}
                            >
                        <AssignmentInd sx={{mr: 1.2}}/>
                        <Link to="/register" className="app-nav-link" onClick={() => {}}>Register</Link>
                    </Button>
                    <Button variant="contained" color="primary" style={{backgroundColor:"#7A5D81"}} 
                             sx={{padding:"8px", margin:"8px"}}
                            >
                        <ExitToApp sx={{mr: 1.2}} />
                        <Link to="/login" className="app-nav-link" onClick={() => {}}>Login</Link>
                    </Button>
                </div>  
                
            </Card>
        </div>
    );
}

export default Home;
import React, {useContext, useEffect, useState} from 'react';
import {Link } from 'react-router-dom';

import { Box, Card, 
        ToggleButtonGroup, ToggleButton, 
        TextField, FormControlLabel, 
        Button, Checkbox, } from '@mui/material';


import './login.css';


import {switchAlignment, enqueueSnackbar} from '../../common/helpers';
import { ApplicationContext } from '../../common/context';
const Login = () => {

    const [alignment, setAlignment] = useState('admin');
    const { contextMethods } = useContext(ApplicationContext);
    return (
        <div className="login">
            <Card className="login-card">

                
               {switchAlignment(alignment, {fontSize: '40px', color:"#7A5D81"})}

                <h2>Login</h2>

                

                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={(event, newAlignment) => setAlignment(newAlignment || alignment)}>

                    <ToggleButton style={{borderRadius: "0px"}} value="admin" ><b>Administrator</b></ToggleButton>
                    <ToggleButton style={{borderRadius: "0px"}} value="student" ><b>Student</b></ToggleButton>
                    <ToggleButton style={{borderRadius: "0px"}} value="academic"><b>Academic</b></ToggleButton>
                    <ToggleButton style={{borderRadius: "0px"}} value="graduate" ><b>Graduate</b></ToggleButton>
                </ToggleButtonGroup>

                <Box sx={{display: "flex", marginTop: "8px", flexDirection: "column", width:"100%"}}>
                        <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label={alignment.substring(0,1).toUpperCase() + alignment.substring(1)  + " ID"}
                      autoComplete=""
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />

                    <div style={{display: 'flex', flexDirection:"row", justifyContent: 'space-between'}}>
                        <Link to="/forgot-password" style={{textDecoration: 'none'}}>Forgot password?</Link>
                        <Link to="/register" style={{textDecoration: 'none'}} >Don't have a registration yet?</Link>

                    </div>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, p: 1.1, backgroundColor: "#141932 !important" }}
                      onClick={() => enqueueSnackbar(contextMethods,"hello", "info")}
                    >
                      Sign In
                    </Button>
                   
                </Box>
            </Card>
        </div>
    );
}

export default Login;

import React, {useState} from "react";

import { Link } from "react-router-dom";

import { Box, Card, 
    ToggleButtonGroup, ToggleButton, 
    TextField, 
    Button } from '@mui/material';


import {switchAlignment} from '../../common/helpers';

const Register = () => {

    const [alignment, setAlignment] = useState('admin');
    return (
        <div className="login">
            <Card className="login-card">

                
               {switchAlignment (alignment, {fontSize: '40px', color:"#7A5D81"})}

                <h2>Register</h2>

                

                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={(event, newAlignment) => setAlignment(newAlignment || alignment)}>
                      
                    <ToggleButton style={{borderRadius: "0px"}} value="student" ><b>Student</b></ToggleButton>
                    <ToggleButton style={{borderRadius: "0px"}} value="academic"><b>Academic</b></ToggleButton>
                    <ToggleButton style={{borderRadius: "0px"}} value="graduate" ><b>Graduate</b></ToggleButton>
                </ToggleButtonGroup>

                <Box sx={{display: "flex", marginTop: "8px", flexDirection: "column", width:"100%"}} onSubmit={() => console.log("hello")}>

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      autoFocus
                    />
                        <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label={alignment.substring(0,1).toUpperCase() + alignment.substring(1)  + " ID"}
                      autoComplete=""
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

                    <div style={{display: 'flex', flexDirection:"row", justifyContent: 'space-between'}}>
                       
                        <Link to="/login" style={{textDecoration: 'none'}}> Have an account already?</Link>

                    </div>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, p: 1.1, backgroundColor: "#141932 !important" }}
                    >
                      Sign up
                    </Button>
                </Box>
            </Card>
        </div>
    );
}

export default Register;
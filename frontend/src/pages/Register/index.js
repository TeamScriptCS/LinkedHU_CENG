import React, {useContext, useState} from "react";

import { Link } from "react-router-dom";

import { Box, Card, 
    ToggleButtonGroup, ToggleButton, 
    TextField, 
    Button } from '@mui/material';


import {switchAlignment} from '../../common/helpers';
import { ApplicationContext } from "../../common/context";

const Register = () => {

  const checkEmail = (email) => userInfo.email.length > 0 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userInfo.email);

    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    
    const { contextMethods } = useContext(ApplicationContext);
    
    const [alignment, setAlignment] = useState('student');
    const [studentType, setStudentType] = useState('bachelor');


    const submit = () => {
      
      // check if all fields are filled
      if (userInfo.firstName === '' || userInfo.lastName === '' || userInfo.email === '' || userInfo.password.length <8 ||
        checkEmail(userInfo.email)) {
        contextMethods.setSnackbarInfo({
          open: true,
          message: 'Please fill in all fields correctly',
          variant: 'error',
        });
        return;
      
      }

      contextMethods.register(userInfo, alignment, studentType);

    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            submit();
        }
    }

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
                        id="firstName"
                        label="First Name"
                        autoComplete="false"
                        autoFocus
                        value={userInfo.firstName}
                        onChange={(event) => setUserInfo({...userInfo, firstName: event.target.value})}
                        onKeyPress={handleEnter}
                        
                    />

                    
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        autoComplete=""
                        value={userInfo.lastName}
                        onChange={(event) => setUserInfo({...userInfo, lastName: event.target.value})}
                        onKeyPress={handleEnter}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      autoComplete=""
                      value={userInfo.email}
                      onChange={(event) => setUserInfo({...userInfo, email: event.target.value})}
                      onKeyPress={handleEnter}
                      error={checkEmail(userInfo.email)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password (min. 8 characters)"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={(event) => setUserInfo({...userInfo, password: event.target.value})}
                      onKeyPress={handleEnter}

                    />

                      {alignment === 'student' &&
                         <ToggleButtonGroup

                         style={{margin: "8px 0px 8px 0px", justifyContent: "center"} }
                           color="primary"
                           value={studentType}
                           exclusive
                           onChange={(event, newStudentType) => setStudentType(newStudentType || studentType)}
                           
                           
                           >
                             <ToggleButton style={{borderRadius: "0px"}} value="bachelor" ><b>Bachelor</b></ToggleButton>
                             <ToggleButton style={{borderRadius: "0px"}} value="master" ><b>Master</b></ToggleButton>
                             <ToggleButton style={{borderRadius: "0px"}} value="phd" ><b>PhD</b></ToggleButton>
       
       
       
                         </ToggleButtonGroup>}
                    

                    <div style={{display: 'flex', flexDirection:"row", justifyContent: 'space-between'}}>
                       
                        <Link to="/login" style={{textDecoration: 'none'}}> Have an account already?</Link>

                    </div>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, p: 1.1, backgroundColor: "#141932 !important" }}
                      onClick={() => submit()}
                    >
                      Sign up
                    </Button>
                </Box>
            </Card>
        </div>
    );
}

export default Register;
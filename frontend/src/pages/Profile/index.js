import React, {useContext, useEffect, useState} from "react";


import { Card, 
         Grid, 
         Container, 
         Typography, 
         Avatar, 
         CardContent, 
         Divider, 
         CardActions, 
         Button, 
         TextField} from "@mui/material";

import CssBaseline from '@mui/material/CssBaseline';



import './Profile.css';

const Profile = () => {

    const loadUserData = () => {
        return JSON.parse(localStorage.getItem('userData'));
    }

    const userData = loadUserData();

    console.log(userData);

    const [image, setImage] = React.useState("./static/img/user.jpg");
    const [firstName, setFirstName] = React.useState(userData.username);
    const [email, setEmail] = React.useState(userData.username);
    const [psw, setPsw] = React.useState(null);
    const [newPsw, setNewPsw] = React.useState(null);
    const [firstNameError, setFirstNameError] = React.useState(null);
    const [emailError, setEmailError] = React.useState(null);
    const [pswError, setPswError] = React.useState(null);
    const [newPswError, setNewPswError] = React.useState(null);

    
    const handleImage = (event) => {
        //upload picture
        setImage(URL.createObjectURL(event.target.files[0]));
    };
    const handleRemovePicture = () => {
        //delete picture
        setImage("./static/img/user.jpg");
    };

    const firstNameChanged = (event) => {
        setFirstName(event.target.value);
        setFirstNameError(null);
      };
    
    
      const emailChanged = (event) => {
        setEmail(event.target.value);
        setEmailError(null);
      };
    
      const passwordChanged = (event) => {
        setPsw(event.target.value);
        setPswError(null);
      };
    
      const newPasswordChanged = (event) => {
        setNewPsw(event.target.value);
        setNewPswError(null);
      };




    return (
        
        <div>
            <Card>
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="paper">
                    <form className="form" noValidate>
                        <Grid item xs={12}>
                        <br/>
                        <br/>
                            <Card>
                                <CardContent>
                                    
                                    <div className="details">
                                        <div>
                                            <Typography  gutterBottom variant="h5" >
                                                {firstName}
                                            </Typography>
                                            <Typography
                                            color="textSecondary"
                                            variant="body1" 
                                            >
                                                LinkedHU CENG
                                            </Typography>
                                        </div>
                                        <Avatar style={{height:"150px" , width:"150px" , justifyContent:"flex-end"}} src={image}></Avatar>
                                    </div>
                                </CardContent>
                                
                                <Divider/>
                                
                                <CardActions>
                                <input
                                    accept="image/*"
                                    className="input"
                                    id="contained-button-file"
                                    multiple={false}
                                    onChange={handleImage}
                                    type="file"
                                    name= "image"
                                />
                                <label htmlFor="contained-button-file">
                                <Button
                                    variant="text"
                                    color="primary"
                                    className="uploadButton"
                                    component="span"                
                                    >
                                    Upload Picture
                                </Button>
                                </label>
                                <Button variant="text" onClick={handleRemovePicture} className="removeButton">
                                    Remove Picture
                                </Button>
                                </CardActions>

                            </Card>
                        </Grid>
                        <br></br>

                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                inputProps={{ autoComplete:'off',form: {autoComplete: 'off'}}}
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                value={firstName}
                                defaultValue={firstName}
                                helperText={firstNameError}
                                error={firstNameError}
                                onChange={firstNameChanged}
                                id="firstName"
                                label="First Name"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                type="text"
                                id="email"
                                onChange={emailChanged}
                                error={emailError}
                                helperText={emailError}
                                value={email}
                                disabled={true}
                                label="Email Address"
                                name="email"
                                
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                type="text"
                                id="userType"
                                value={userData.userType}
                                InputProps={{
                                    readOnly: true,
                                  }}
                                label="User Type"
                                name="userType"
                                
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                onChange={passwordChanged}
                                error={pswError}
                                helperText={pswError}
                                type="password"
                                id="password"
                                
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="newPassword"
                                onChange={newPasswordChanged}
                                error={newPswError}
                                helperText={newPswError}
                                label="New Password"
                                type="password"
                                id="newPassword"
                                autoComplete='nope'
                            />
                            </Grid>

                            


                            <Grid item sm={6}>
                                <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                onClick= {() => {}}
                                color="inherit"
                                >
                                Cancel
                                </Button>
                            </Grid>
                            <Grid item sm={6}>
                                <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                
                                //implement below later
                                /* onClick={saveClicked} */
                                >
                                Save
                                </Button>
                            </Grid>
                            <Grid item sm={3}>
                                
                            </Grid>
                            <Grid item sm={6}>
                                <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="error"
                                
                                //implement below later
                                /* onClick={deleteClicked} */
                                >
                                Delete
                                </Button>
                            </Grid>
                            <Grid item sm={3}>

                            </Grid>
                            <br/>
                            <br/>
                            <br/>
                            <br/>





                        </Grid>
                        
                    </form>
                </div>


                </Container>
            </Card>
        </div>

        
    );
}

export default Profile;
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
         TextField,
         ButtonGroup} from "@mui/material";

import CssBaseline from '@mui/material/CssBaseline';

import { ApplicationContext } from "../../common/context";

import './profile.css';

const Profile = () => {

    
    const contextMethods = useContext(ApplicationContext).contextMethods;

    let userData = contextMethods.user;


    const [image, setImage] = React.useState("./static/img/user.jpg");
    const [firstName, setFirstName] = React.useState(userData.firstName);
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
        <Card style= {{
            border: "1px solid #e0e0e0",
            borderRadius: "5px",
            boxShadow: "0 1px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)",
            width: "500px",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
        }}>
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
                                        <div style={{flexGrow:1}}>
                                            <Typography  gutterBottom variant="h5" >
                                                {userData.firstName} {userData.lastName}
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

                            
                            <ButtonGroup fullWidth style={{
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="inherit"
                                
                                onClick= {() => contextMethods.setCurrentPage("home")}

                                style={{
                                    borderRadius: "5px",
                                    margin: "8px",
                                }}
                                >
                                Cancel
                                </Button>
                                <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{
                                    borderRadius: "5px",
                                    margin: "8px",
                                }}
                                >
                                Save
                                </Button>
                                <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="error"
                                style={{
                                    borderRadius: "5px",
                                    margin: "8px",
                                }}
                                //implement below later
                                /* onClick={deleteClicked} */
                                >
                                Delete
                                </Button>
                            </ButtonGroup>



                        </Grid>
                        
                    </form>
                </div>


                </Container>
            </Card>
        
    );
}

export default Profile;
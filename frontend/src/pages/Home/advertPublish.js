import React, { useContext } from "react";

import { TextField,Button, ButtonGroup,ToggleButtonGroup,ToggleButton } from "@mui/material";

import { ApplicationContext } from "../../common/context";

const AdvertPublisher = () => {

    const {contextMethods} = useContext(ApplicationContext);
    const { user } = contextMethods;
    
    const [advertType, setAdvertType] = React.useState("internship");

    const [advert, setAdvert] = React.useState({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        location: '',
        contact: '',
        salary: '',
    });

    const submitAdvert = () => {
        if (advert.title === '' || advert.description === '' || advert.startDate === '' || advert.endDate === ''  || advert.contact === '' || advert.salary === '' || advert.type === '') {
            contextMethods.setSnackbarInfo({
                open: true,
                message: 'Please fill in all fields correctly',
                variant: 'error',
            });
            return;
        }

        // const publishResult = contextMethods.advertPublish(advert, advertType);
        // if (publishResult) {
        //     contextMethods.setCurrentPage("home");
        // }
    }

    return (
        <div className="advert-publish-container">
            <div className="advert-publish-content">
                <h1>Publish Advertisement</h1>
                <br/>
                <ToggleButtonGroup
                    color="primary"
                    value={advertType}
                    exclusive
                    onChange={(event, newAdvertType) => setAdvertType(newAdvertType || advertType)}>
                      
                    <ToggleButton style={{borderRadius: "0px"}} value="internship" ><b>Internship</b></ToggleButton>
                    <ToggleButton style={{borderRadius: "0px"}} value="scholarship"><b>Scholarship</b></ToggleButton>
                    {user.userType === 'graduate' && <ToggleButton style={{borderRadius: "0px"}} value="job" ><b>Job</b></ToggleButton>}
                </ToggleButtonGroup>

                <br/>

                <TextField
                    className="text-field"
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    value={advert.title}
                    onChange={(e) => setAdvert({...advert, title: e.target.value})}
                    autoComplete="off"
                />
                <TextField
                    className="text-field"
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    multiline
                    rows={8}
                    value={advert.description}
                    onChange={(e) => setAdvert({...advert, description: e.target.value})}
                    autoComplete="off"
                />
                <TextField
                    className="text-field"
                    id="outlined-basic"
                    label="Start Date"
                    variant="outlined"
                    value={advert.startDate}
                    onChange={(e) => setAdvert({...advert, startDate: e.target.value})}
                    autoComplete="off"
                />
                <TextField
                    className="text-field"
                    id="outlined-basic"
                    label="End Date"
                    variant="outlined"
                    value={advert.endDate}
                    onChange={(e) => setAdvert({...advert, endDate: e.target.value})}
                    autoComplete="off"
                />

                {advertType !== 'scholarship' && <TextField
                    className="text-field"
                    id="outlined-basic"
                    label="Location"
                    variant="outlined"
                    value={advert.location}
                    onChange={(e) => setAdvert({...advert, location: e.target.value})}
                    autoComplete="off"
                />}
                <TextField
                    className="text-field"
                    id="outlined-basic"
                    label="Contact"
                    variant="outlined"
                    value={advert.contact}
                    onChange={(e) => setAdvert({...advert, contact: e.target.value})}
                    autoComplete="off"
                />
                <TextField
                    className="text-field"
                    id="outlined-basic"
                    label= {advertType === "job" || (advertType === "internship") ? "Salary" : "Amount"}
                    variant="outlined"
                    value={advert.salary}
                    onChange={(e) => setAdvert({...advert, salary: e.target.value})}
                    autoComplete="off"
                />

                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" style={{alignSelf: 'flex-end'}}>
                <Button variant="contained" color="error" sx={{mr:"4px"}} onClick={() => {

                    contextMethods.setCurrentPage('home');

                 }}>
                    Cancel
                </Button>

                <Button variant="contained" color="primary" sx={{mr:"4px", backgroundColor:"#575268"}} onClick={() => {
                        submitAdvert();
                    }}>
                    Publish
                </Button>
                </ButtonGroup>
            </div>
        </div>
    
    )

}


export default AdvertPublisher;
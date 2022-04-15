import { DeleteForever, Edit, ViewArray, Visibility } from '@mui/icons-material';
import { List, ListItem,Stack,Chip, ListItemText, ButtonGroup, Button, IconButton } from '@mui/material';
import React, { useContext } from 'react';
import fetchAnnouncements from '../../api/announcFetch';
import { ApplicationContext } from '../../common/context';

const Announcements = () => {

    const [announcements, setAnnouncements] = React.useState([]);
    const { user } = useContext(ApplicationContext).contextMethods;

    const chipMap = {
        "internship": "primary",
        "scholarship": "secondary",
        "job": "error",
    }

    React.useEffect(() => {
        setAnnouncements(fetchAnnouncements());
    }, []);


    return (
        <div className="advert-publish-container" >
            <div className="advert-publish-content" style={{ alignItems:"flex-start"}}>
            <List sx={{ width: '100%' }}>
                {announcements.map((announcement, index) => (
                    <ListItem key={index} style={{
                        
                        borderBottom: '1px solid #e0e0e0',
                        padding: '10px',
                        margin: '10px',
                        backgroundColor: '#fafafa',
                        borderRadius: '5px',
                        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)',
                        width: '100%',
                        alignItems: 'center',   
                        justifyContent: 'flex-start',


                    }}>
                        <ListItemText primary={announcement.title} secondary={announcement.description}/>
                        <Stack direction="row" spacing={1} 
                            sx={{
                                flexGrow:1}} >
                            <Chip label={announcement.type} color={chipMap[announcement.type]} />
                        </Stack>

                        <ButtonGroup size="small" variant="outlined" color="primary" aria-label="small outlined primary button group"
                        
                        >
                            
                            {user && user.userType !== "student" ? 
                               <>
                                <IconButton color="primary" >
                                    <Visibility />
                                </IconButton>
                                <IconButton color="primary">
                                    <Edit />
                                </IconButton>
                                <IconButton color="error">
                                    <DeleteForever />
                                </IconButton>
                                </>
                            : <Button color="primary" variant="contained">
                                
                                <ViewArray sx={{mr:1.2}}/>
                                Apply
                                </Button>}



                        </ButtonGroup>


                    </ListItem>
                ))}
            </List>

            </div>
        </div>
    )
}

export default Announcements;
import { DeleteForever, Edit, ViewArray, Visibility } from '@mui/icons-material';
import { List, ListItem,Stack,Chip, ListItemText, ButtonGroup, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { ApplicationContext } from '../../common/context';
import { deleteAdvert, getAllAnnouncements } from '../../common/methods';

const Announcements = () => {

    const [announcements, setAnnouncements] = React.useState([]);
    const { user, setSnackbarInfo } = useContext(ApplicationContext).contextMethods;

    const chipMap = {
        "internship": "primary",
        "scholarship": "secondary",
        "job": "error",
    }

    const [open, setOpen] = React.useState(false);
    const [currentAdvert, setCurrentAdvert] = React.useState(null);


    const getAnnouncements = async () => {

        const res = await getAllAnnouncements();
        if(res?.length > 0) {
            setAnnouncements(res.map(item => {
                return {
                    ...item,
                    type: item.type.toLocaleLowerCase()
                }}));
        }
        else {
            setAnnouncements([]);
        }
    }

    let flag = false;


    const remove = async (id) => {
       
        try{

            const res = await deleteAdvert(id);
            if(res?.message === 'OK') {
                setSnackbarInfo({
                    open: true,
                    message: 'Advert Deleted',
                    variant: 'success',
                });
                window.location.reload();
            } else
                throw new Error(res.message);

        }
        catch(err) {
            setSnackbarInfo({
                open: true,
                message: err.message,
                variant: 'error',
            });
        }
    }


    useEffect(() => {
        getAnnouncements();
    },[])


    const dialogHandleClose = () => {
        setOpen(false);
    }

    return (
        <div className="advert-publish-container" >
            <Dialog
        open={open}
        onClose={dialogHandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {currentAdvert?.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {currentAdvert?.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={dialogHandleClose}>OK</Button>
        </DialogActions>
      </Dialog>
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
                            
                            {user && user.id === announcement.ownerId ? 
                               <>
                                <IconButton color="primary" onClick={() => {

                                    setCurrentAdvert(announcement);
                                    setOpen(true);
                                }} >
                                    <Visibility />
                                </IconButton>
                                <IconButton color="primary">
                                    <Edit />
                                </IconButton>
                                <IconButton color="error" onClick={() => {
                                    remove(announcement.id );
                                }}>
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
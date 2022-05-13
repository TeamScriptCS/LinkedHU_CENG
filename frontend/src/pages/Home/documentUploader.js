import  React,{useContext, useState}  from 'react'


import {Card, Box, Button, TextField, LinearProgress, Checkbox} from '@mui/material';

import FileOpenIcon from '@mui/icons-material/FileOpen';
import { ApplicationContext } from '../../common/context';
import { API_URL } from '../../common/constants';
const DocumentUploader = () => {

    const [fileContent, setFileContent] = useState('');
    const [fileName, setFileName] = useState('');
    const [progress, setProgress] = useState(0);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { user, setSnackbarInfo } = useContext(ApplicationContext).contextMethods;

    const openFile = () => {
        const fileInput = document.getElementById('fileInput');
        fileInput.click();


    }
    const handleFile = (event) => {
        const file = event.target.files[0];

        console.log(file)

        if(file.size > 10 * 1024 * 1024 * 100) {
            setSnackbarInfo({
                open: true,
                message: 'File size should be less than 100MB',
                variant: 'error',
            });
            return;
        }


        setFileName(file.name);
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (event) => {
            setFileContent(event.target.result);
        }
    }

    const upload = async () => {

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('fileName', fileName);
        formData.append('owner', user.email);
        formData.append('file', fileContent);
        
        
        console.log(formData.getAll('file'))

        const response = await fetch(`${API_URL}/material/upload`, {
            method: 'POST',
            body: formData,
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // }

        });
        
        const res = await response.json();
        console.log(res);
        if(res.message === 'OK'){
            setSnackbarInfo({
                open: true,
                message: 'File uploaded successfully',
                variant: 'success',
            });
        }
        else{
            setSnackbarInfo({
                open: true,
                message: 'Error ' + res.message,
                variant: 'error',
            });
        }

    
    }


    return (
        <div className="login" style={{width:"100%"}}>
            <Card className="login-card">

                <h2>Upload Material</h2>
                
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <TextField
                            id="standard-basic"
                            label="Title"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <TextField
                            id="standard-basic"
                            label="Description"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            
                            multiline
                            rows="6"
                            onKeyPress={() => {}}
                        />

                        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center"
                        
                        padding="10px">
                            <TextField
                                id="standard-basic"
                                variant="standard"
                                fullWidth
                                margin="normal"
                                onKeyPress={() => {}}
                                InputProps={{
                                    readOnly: true,
                                }}
                                style={{
                                    width: "300px",
                                    border: "none",
                                    backgroundColor: "transparent",
                                    cursor: "pointer",
                                    marginRight: "10px"
                                }}
                                value={fileName}
                                placeholder="Select file"
                            />
                            <Button variant="contained" color="primary" sx={{margin: "8px",backgroundColor: "#141932"}} onClick={openFile}>
                                <input type="file" id="fileInput" style={{display: "none"}} onChange={handleFile}/>
                                <FileOpenIcon sx={{mr:1.2}} />
                                Browse
                            </Button>
                        
                        </Box>
                        
                        {progress > 0 &&  <Box sx={{ width: '100%' }}>
                            <LinearProgress variant="determinate" value={progress} color="secondary" />
                        </Box>}

                        <Button variant="contained" color="primary" sx={{margin: "8px", width: "100%", backgroundColor: "#141932"}} onClick={upload}>
                            Upload
                        </Button>


                    </Box>
                </Box>
            </Card>
        </div>

    )
}

export default DocumentUploader;
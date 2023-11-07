import { useNavigate } from 'react-router-dom';
import CustomAppBar from './AppBar/AppBar';
import { Container, Grid, Paper, Typography, Button, Box, TextField } from '@mui/material';
import { Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function PostJobForm() {
    const navigate = useNavigate();

    const handleFinishClick =()=>{
        toast.success("successfully posted job");
    };

    return (
        <div>
            <CustomAppBar title="Hack4HR" />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                mt={4}
            >
                <Typography variant='h4'>Post A Job</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
                <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', width: '70%', marginTop: '20px' }}>
                    <Container sx={{ maxWidth: 'sm' }}>
                        <Typography variant='h4'>
                            Job Title
                        </Typography>
                        <TextField label="Enter" sx={{ width: '100%', mb: 2 }} />

                        <Typography variant='h4'>
                            Company Name
                        </Typography>
                        <TextField label="Company Name" sx={{ width: '100%', mb: 2 }} />

                        <Typography variant='h4'>
                            Company Industry Type
                        </Typography>
                        <TextField label="Company Industry Type" sx={{ width: '100%', mb: 2 }} />

                        <Typography variant='h4'>
                            Job Description
                        </Typography>
                        <TextField
                            label="Description"
                            sx={{ width: '100%', mb: 2 }}
                            maxRows={30}
                            multiline
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleFinishClick}
                            sx={{ mt: 2 }}
                        >
                            Finish
                        </Button>
                    </Container>
                </Paper>
            </Box>
            <ToastContainer position="top-center" hideProgressBar />
        </div>
    );
}

export default PostJobForm;

import { useNavigate, useParams } from 'react-router-dom';
import CustomAppBar from './AppBar/AppBar';
import { Container, Paper, Typography, Button, Box, TextField, Dialog, DialogContent } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

function CreateQuestionForm() {
    const navigate = useNavigate();
    const { jobTitle} = useParams();
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [autofillQ1Value, setAutofillQ1Value] = useState("");
    const [autofillQ2Value, setAutofillQ2Value] = useState("");

    const handleFinishClick = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleQ1Click = () => {
        setAutofillQ1Value("what  do you do when the aws server is down?");
    };

    const handleQ2Click = () => {
        setAutofillQ2Value("What is the main concept of java?");
    };
    return (
        <div>
            <CustomAppBar title="Hack4HR" />

            <Box display="flex" justifyContent="center">
                <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', width: '70%', marginTop: '20px' }}>
                    <Container sx={{ maxWidth: 'sm' }}>
                        <Box sx={{ mt: 4, mb: 4 }}>
                            <Typography variant='h4'>
                                Job Title : {jobTitle}
                            </Typography>
                        </Box>
                        <Typography variant='h5'>Question 1</Typography>
                        <TextField label="Enter" sx={{ width: '100%', mb: 1 }} value={autofillQ1Value} />
                        <Typography variant='body2'>Recommended Questions:</Typography>
                        <Box display="flex" sx={{ width: '100%', mb: 2 }} >
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mr: 2 }}
                                onClick={handleQ1Click}
                            >
                                AWS
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mr: 2 }}
                            >
                                IT
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mr: 2 }}
                            >
                                Communication
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mr: 2 }}
                            >
                                Flow Design
                            </Button>
                        </Box>

                        <Typography variant='h5'>Question 2</Typography>
                        <TextField label="Enter" sx={{ width: '100%', mb: 1 }} value={autofillQ2Value}  />
                        <Typography variant='body2'>Recommended Questions:</Typography>
                        <Box display="flex">
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mr: 2 }}
                            >
                                AWS
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mr: 2 }}
                                onClick={handleQ2Click}
                            >
                                IT
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mr: 2 }}
                            >
                                Communication
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mr: 2 }}
                            >
                                Flow Design
                            </Button>
                        </Box>

                        <Button
                            variant="contained"
                            color="success"
                            size="large"
                            onClick={handleFinishClick}
                            sx={{ mt: 2 }}
                        >
                            Finish
                        </Button>
                    </Container>
                </Paper>
            </Box>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="lg">
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Paper sx={{ p: 2, textAlign: 'center', width: '100%' }}>
                        <Typography variant='h4'>
                            Questions have been generated. The link is as below:
                        </Typography>
                        <a
                            href='http://localhost:3000/candQues'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textAlign: 'center' }}
                        >
                            http://localhost:3000/candQues
                        </a>
                    </Paper>
                </DialogContent>
            </Dialog>

        </div>
    );
}

export default CreateQuestionForm;

import { useNavigate } from 'react-router-dom';
import CustomAppBar from './AppBar/AppBar';
import { Container, Grid, Paper, Typography, Button, Box, TextField } from '@mui/material';
import { Fragment, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function PostJobForm() {
    const navigate = useNavigate();

    const handleFinishClick =()=>{
        toast.success("successfully posted job");
    };

    const handleAutoFill =()=>{
        setJobTitleTF("Business analyst");
        setCompanyName("hackerCom sdn bhd");
        setCompanyIndustryType("IT");
        setJD("    Establish processes to collect and analyse internal and relevant external data to derive value-added observations and insights /n        Manage and work extensively with large amounts of data and provide data-driven insights to support the business teams in executing strategic planning, driving improvements and making sound business decisions /n Be the oracle that can spot dangers and pitfalls down the road by monitoring and analysing trends, and taking a critical view of existing business strategy Setup, maintain and automate reports, dashboards and various business processes required by different stakeholders and the company Establish processes to identify and keep track of appropriate indicators to monitor performance and progress Work and collaborate with internal stakeholders to identify and define problem statements and pain points, gather requirements, prioritise and implement sustainable solutions that will meet business needs");
    };
    const [jobTitleTF, setJobTitleTF] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyIndustryType, setCompanyIndustryType] = useState("");
    const [jd, setJD] = useState("");

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
                        <Button onClick={handleAutoFill}>Use Saved Post Description</Button>
                        <Typography variant='h4'>
                            Job Title
                        </Typography>
                        <TextField label="Enter" sx={{ width: '100%', mb: 2 }} value={jobTitleTF}/>

                        <Typography variant='h4'>
                            Company Name
                        </Typography>
                        <TextField label="Company Name" sx={{ width: '100%', mb: 2 }} value={companyName} />

                        <Typography variant='h4'>
                            Company Industry Type
                        </Typography>
                        <TextField label="Company Industry Type" sx={{ width: '100%', mb: 2 }} value={companyIndustryType}/>

                        <Typography variant='h4'>
                            Job Description
                        </Typography>
                        <TextField
                            label="Description"
                            sx={{ width: '100%', mb: 2 }}
                            maxRows={30}
                            multiline
                            value={jd}
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

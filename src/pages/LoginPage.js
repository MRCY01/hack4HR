import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Paper, Typography } from '@mui/material';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate('/mainPage');
  };

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">

        <Typography variant='h2' marginTop={"20px"}>
          Welcome to Hack4HR
        </Typography>
        <Typography variant='h4' marginBottom={"70px"}>
          where employer meets candidate
        </Typography>

      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography variant='h3' fontWeight={'bold'} >
          Log in
        </Typography>
        <Typography variant='body1' fontWeight={'bold'} color={"gray"}>
          Please insert your details below
        </Typography>
      </Box>
      <Box display={'flex'} justifyContent={'center'}>

      <Paper elevation={3} sx={{ p: 2, alignContent:'center', display: 'flex', flexDirection: 'column', width: '70%', marginTop: '20px' }}>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="loginEmail"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Login
          </Button>
        </form>
      </Paper>
            </Box>
      <ToastContainer position="top-center" hideProgressBar />
    </div>
  );
}

export default LoginPage;

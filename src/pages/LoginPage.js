import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate('/mainPage');
  };

  return (
    <div>
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
      <ToastContainer position="top-center" hideProgressBar />
    </div>
  );
}

export default LoginPage;

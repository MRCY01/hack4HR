import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';

function CustomAppBar({ title }) {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate('/profile');
  };
  const handleLogoutClick = () => {
    navigate('/');
  };
  const handleHomeClick = () => {
    navigate('/mainPage');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>

        <IconButton color="inherit" onClick={handleHomeClick}>
          <HomeIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleProfileClick}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleLogoutClick}>
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;

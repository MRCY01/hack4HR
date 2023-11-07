import { useNavigate } from 'react-router-dom';
import CustomAppBar from './AppBar/AppBar';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { Fragment } from 'react';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div>
      <CustomAppBar title="Hack4HR" />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Grid item xs={12}>
            <h3>Hello ADMIN</h3>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={6}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                   navigate('/postJobForm');
                  }}
                  style={{ width: '100%' }}
                >
                 Post Job
                </Button>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    navigate('/recommCandidate');
                  }}
                  style={{ width: '100%' }}
                >
                  Show recommended Candidate
                </Button>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    navigate('/createQuestion');
                  }}
                  style={{ width: '100%' }}
                >
                  Create Interview Question
                </Button>
              </Grid>

            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default MainPage;

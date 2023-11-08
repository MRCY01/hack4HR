import { useNavigate } from 'react-router-dom';
import CustomAppBar from '../pages/AppBar/AppBar';
import { Container, Paper, Typography, Button, Card } from '@mui/material';

function RecommCandidate() {
    const navigate = useNavigate();

    const handlePaperClick = (jobTitle,matchCandidate) => {
        navigate(`/recommCandidate/${jobTitle}/${matchCandidate}`);
        // navigate('/');
    };

    return (
        <div>
            <CustomAppBar title="Hack4HR" />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <h2>Hey! We Found some candidates for these jobs!</h2>
                <Card
                    elevation={3}
                    sx={{ p: 2, mb: 2, display: 'flex', flexDirection: 'column' }}
                    onClick={() => handlePaperClick("Business Analyst","10")}
                >
                    <Typography variant='h4'>Business Analyst</Typography>
                    <Typography variant='body1'> matched candidate : 10</Typography>
                </Card>
                <Card
                    elevation={3}
                    sx={{ p: 2, mb: 2, display: 'flex', flexDirection: 'column' }}
                    onClick={() => handlePaperClick("Junior Java Programmer","8")}
                >
                    <Typography variant='h4'>Junior Java Programmer</Typography>
                    <Typography variant='body1'> matched candidate : 8</Typography>
                </Card>
                <Card
                    elevation={3}
                    sx={{ p: 2, mb: 2, display: 'flex', flexDirection: 'column' }}
                    onClick={() => handlePaperClick("Junior Java Programmer","10")}
                >
                    <Typography variant='h4'>Human Resource on Finiance</Typography>
                    <Typography variant='body1'> matched candidate : 10</Typography>
                </Card>
            </Container>
        </div>
    );
}

export default RecommCandidate;

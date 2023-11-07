import { useNavigate } from 'react-router-dom';
import CustomAppBar from './AppBar/AppBar';
import { Container, Paper, Typography, Button, Card } from '@mui/material';

function CreateQuestionPage() {
    const navigate = useNavigate();

    const handlePaperClick = (jobTitle) => {
        navigate(`/createQuestion/${jobTitle}`);
    };

    return (
        <div>
            <CustomAppBar title="Hack4HR" />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <h2>Select the job below to start creating quetions</h2>
                <Card
                    elevation={3}
                    sx={{ p: 2, mb: 2, display: 'flex', flexDirection: 'column' }}
                    onClick={() => handlePaperClick("Senior Illustrator")}
                >
                    <Typography variant='h4'>Senior Illustrator</Typography>
                </Card>
                <Card
                    elevation={3}
                    sx={{ p: 2, mb: 2, display: 'flex', flexDirection: 'column' }}
                    onClick={() => handlePaperClick("Junior Java Programmer")}
                >
                    <Typography variant='h4'>Junior Java Programmer</Typography>
                </Card>
                <Card
                    elevation={3}
                    sx={{ p: 2, mb: 2, display: 'flex', flexDirection: 'column' }}
                    onClick={() => handlePaperClick("Human Resource on Finiance")}
                >
                    <Typography variant='h4'>Human Resource on Finiance</Typography>
                </Card>
            </Container>
        </div>
    );
}

export default CreateQuestionPage;

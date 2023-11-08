import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import MicNoneIcon from '@mui/icons-material/MicNone';

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    'Question 1: What do you do when the Google Cloud server is down?',
    'Question 2: What are the various kinds of diagrams you use as a business analyst? How do they impact the work?',
    'Thank you for joining! Our Interviewer will evaluate your answer and reach out to you when the evaluation is complete.',
  ];

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setCurrentQuestionIndex(0);
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Close the dialog when all questions are answered.
      closeDialog();
    }
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Typography variant="h5">
        Are You Ready??
      </Typography>
      <Typography variant="h5" marginBottom={"10px"}>
        Click on The "Start Interview" Button to start the interview Question
      </Typography>
      <Button variant="contained" color="primary" onClick={openDialog}>
      Start Interview
      </Button>
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="body1">
            {questions[currentQuestionIndex]}
          </Typography>
          {!isLastQuestion && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '8px' }}>
              <IconButton style={{ background: 'red', borderRadius: '50%' }}>
                <MicNoneIcon style={{ color: 'white' }} />
              </IconButton>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNextClick} color="primary" variant="contained">
            {isLastQuestion ? 'Finish' : 'Next'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;

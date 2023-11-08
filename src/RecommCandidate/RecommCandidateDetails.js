import { useParams } from 'react-router-dom';
import CustomAppBar from '../pages/AppBar/AppBar';
import { Grid, Paper, Typography, Box, Table, TableHead, TableRow, TableCell, TableBody, Button, DialogTitle, DialogActions, Dialog, TextField, DialogContent, IconButton, colors } from '@mui/material';
import React, { useState } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function JobDetails() {
    const { jobTitle, matchCandidate } = useParams();
    const [isDialogOpen, setDialogOpen] = useState(false);

    let tableBody = null;

    const handleViewButtonClick = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };


    if (jobTitle === "Senior Illustrator") {
        tableBody = (
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Lim Ah Keong</TableCell>
                    <TableCell>
                        <a href='https://www.google.com/' target="_blank" rel="noopener noreferrer">
                            linkedIn.com/LimAhKeong
                        </a>
                    </TableCell>
                    <TableCell>80%</TableCell>
                    <TableCell>YES</TableCell>
                    <TableCell>
                        <Button onClick={handleViewButtonClick}>
                            View
                        </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        );
    }

    return (
        <div>
            <CustomAppBar title="Hack4HR" />
            <Box display="flex" justifyContent="center">
                <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', width: '70%', marginTop: '20px' }}>
                    <Typography variant='h4'>{jobTitle}</Typography>
                    <Typography variant='body1' color="text.secondary">
                        matched candidate: {matchCandidate}
                    </Typography>

                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>No</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Profile Link</TableCell>
                                <TableCell>Matched Rate</TableCell>
                                <TableCell>Agree?</TableCell>
                                <TableCell>Interview Answer</TableCell>
                            </TableRow>
                        </TableHead>
                        {tableBody}
                    </Table>
                </Paper>
            </Box>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="lg">
                <DialogTitle>Candidate Name: Lim Ah Keong</DialogTitle>
                <DialogContent>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Typography variant="h6">Question 1: What do you do when the AWS server is down?</Typography>
                            
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <TextField
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                disabled
                                value={"I would go and ask for the support team in AWS to help me with"}
                            />
                            <IconButton style={{ background: "#3A83D8", borderRadius: '50%' }}>
                                <PlayCircleOutlineIcon style={{color:'white'}}/>
                            </IconButton>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Typography variant="h6">Question 2: Another question here?</Typography>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <TextField
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                disabled
                            />
                            <IconButton style={{ background: "#3A83D8", borderRadius: '50%' }}>
                                <PlayCircleOutlineIcon style={{color:'white'}}/>
                            </IconButton>
                        </div>

                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default JobDetails;

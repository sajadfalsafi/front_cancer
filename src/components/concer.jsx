import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, Paper, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem, Grid } from '@mui/material';

const Cancer = () => {
    const [formData, setFormData] = useState({
        GENDER: '',
        AGE: '',
        SMOKING: '',
        YELLOW_FINGERS: '',
        ANXIETY: '',
        PEER_PRESSURE: '',
        CHRONIC_DISEASE: '',
        FATIGUE: '',
        ALLERGY: '',
        WHEEZING: '',
        ALCOHOL_CONSUMING: '',
        COUGHING: '',
        SHORTNESS_OF_BREATH: '',
        SWALLOWING_DIFFICULTY: '',
        CHEST_PAIN: ''
    });

    const [prediction, setPrediction] = useState(null);
    const [open, setOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        for (const [key, value] of Object.entries(formData)) {
            if (!value) {
                return `Fill out ${key.replace(/_/g, ' ').toLowerCase().replace(/^\w/, c => c.toUpperCase())} field`;
            }
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setErrorMessage(validationError);
            setErrorOpen(true);
            return;
        }
        try {
            const response = await axios.post('https://sajadf.pythonanywhere.com/cancer/predict/', formData);
            setPrediction(response.data.prediction);
            setOpen(true);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    const handleClear = () => {
        setFormData({
            GENDER: '',
            AGE: '',
            SMOKING: '',
            YELLOW_FINGERS: '',
            ANXIETY: '',
            PEER_PRESSURE: '',
            CHRONIC_DISEASE: '',
            FATIGUE: '',
            ALLERGY: '',
            WHEEZING: '',
            ALCOHOL_CONSUMING: '',
            COUGHING: '',
            SHORTNESS_OF_BREATH: '',
            SWALLOWING_DIFFICULTY: '',
            CHEST_PAIN: ''
        });
        setPrediction(null);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleErrorClose = () => {
        setErrorOpen(false);
    };

    const yesNoOptions = [
        { value: 1, label: 'YES' },
        { value: 2, label: 'NO' }
    ];

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>               
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                select
                                label="Gender"
                                name="GENDER"
                                value={formData.GENDER}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                margin="normal"
                            >
                                <MenuItem value="M">Male</MenuItem>
                                <MenuItem value="F">Female</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Age"
                                name="AGE"
                                value={formData.AGE}
                                onChange={handleChange}
                                type="number"
                                fullWidth
                                variant="outlined"
                                margin="normal"
                            />
                        </Grid>
                        {['SMOKING', 'YELLOW_FINGERS', 'ANXIETY', 'PEER_PRESSURE', 'CHRONIC_DISEASE', 'FATIGUE', 'ALLERGY', 'WHEEZING', 'ALCOHOL_CONSUMING', 'COUGHING', 'SHORTNESS_OF_BREATH', 'SWALLOWING_DIFFICULTY', 'CHEST_PAIN'].map(field => (
                            <Grid item xs={12} sm={4} key={field}>
                                <TextField
                                    select
                                    label={field.replace(/_/g, ' ').toLowerCase().replace(/^\w/, c => c.toUpperCase())}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"
                                >
                                    {yesNoOptions.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        ))}
                    </Grid>
                    <Box display="flex" justifyContent="space-between" mt={3}>
                        <Button variant="contained" color="primary" type="submit">
                            Predict
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleClear}>
                            Clear Form
                        </Button>
                    </Box>
                </form>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Prediction Result</DialogTitle>
                    <DialogContent>
                        <Typography variant="h6">
                            Prediction: {prediction}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={errorOpen} onClose={handleErrorClose}>
                    <DialogTitle>Enter data</DialogTitle>
                    <DialogContent>
                        <Typography variant="h6">
                            {errorMessage}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleErrorClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Paper>
        </Container>
    );
};

export default Cancer;

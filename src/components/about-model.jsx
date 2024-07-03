import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
<Box
            sx={{
              bgcolor: '#ffffff',
              borderRadius: 2,
              boxShadow: 3,
              p: 3,
              mt: 5,
              mx: 'auto',
              maxWidth: 800,
            }}
          >
            <Typography variant="body1" color="textPrimary">
              Lung cancer remains one of the most pervasive and deadly forms of cancer worldwide, claiming millions of lives each year. Early detection is crucial for improving survival rates, and advancements in technology have paved the way for more accurate and timely diagnoses. Lung cancer prediction leverages sophisticated algorithms and machine learning techniques to analyze a multitude of risk factors, including genetic predispositions, environmental exposures, and lifestyle choices. By integrating data from medical imaging, such as CT scans, and patient history, predictive models can identify patterns and anomalies that might be indicative of lung cancer at its nascent stage. This approach not only enhances the precision of early diagnosis but also aids in tailoring personalized treatment plans, ultimately aiming to reduce mortality rates and improve the quality of life for patients. As research continues to evolve, lung cancer prediction stands at the forefront of oncological advancements, offering hope for a future where early intervention can significantly alter the course of the disease.
            </Typography>
          </Box>

  );
};

export default About;

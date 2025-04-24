import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        About Us
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Our Story
            </Typography>
            <Typography paragraph>
              Founded in 2024, we've been passionate about creating unforgettable travel experiences
              for our customers. Our mission is to make travel accessible, enjoyable, and
              transformative for everyone.
            </Typography>
            <Typography paragraph>
              We believe that travel has the power to broaden horizons, create connections,
              and inspire personal growth. That's why we carefully curate our destinations
              and experiences to ensure the highest quality for our travelers.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Why Choose Us
            </Typography>
            <Typography paragraph>
              • Expert travel planning and guidance
            </Typography>
            <Typography paragraph>
              • Carefully selected accommodations
            </Typography>
            <Typography paragraph>
              • Local expertise and authentic experiences
            </Typography>
            <Typography paragraph>
              • 24/7 customer support
            </Typography>
            <Typography paragraph>
              • Best price guarantee
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <Typography variant="h5" gutterBottom align="center">
              Our Values
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Quality
                </Typography>
                <Typography>
                  We never compromise on quality, ensuring the best experiences for our travelers.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Sustainability
                </Typography>
                <Typography>
                  We're committed to sustainable travel practices and supporting local communities.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Innovation
                </Typography>
                <Typography>
                  We constantly innovate to provide cutting-edge travel experiences.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 
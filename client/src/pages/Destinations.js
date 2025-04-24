import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, Paper, Chip, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const destinations = [
  {
    id: 1,
    title: 'Rajgad Fort, Maharashtra',
    image: 'https://th.bing.com/th/id/OIP.6q3ur7gIwjIEJW1G387CoQHaEL?rs=1&pid=ImgDetMain',
    description: 'Experience the majestic Rajgad Fort with enhanced safety tracking and guided tours. This historic fort offers breathtaking views and rich cultural heritage.',
    price: 'From ₹4,999',
    duration: '2 days',
    safety: 'High',
    features: ['Fort trekking', 'Historical tour', 'Local guides', 'Sunset view'],
    rating: 4.8,
    reviews: 128
  },
  {
    id: 2,
    title: 'Harihar Fort Trek',
    image: 'https://go4explore.com/trips/harihar-fort-trek',
    description: 'Conquer the challenging Harihar Fort trek with safety monitoring and expert guides. A thrilling adventure for experienced trekkers.',
    price: 'From ₹3,999',
    duration: '1 day',
    safety: 'High',
    features: ['Trekking gear', 'Safety equipment', 'Expert guides', 'Rock climbing'],
    rating: 4.6,
    reviews: 95
  },
  {
    id: 3,
    title: 'Devkund Waterfall',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFknnwGfO58lm20D0DOsgRe1kYaVuw9CLVTaXIsWbq8tY0IWAhOHzUPL-guKiGl7TpTDc&usqp=CAU',
    description: 'Discover the hidden Devkund Waterfall with safety monitoring and local support. A pristine natural wonder in Maharashtra.',
    price: 'From ₹2,999',
    duration: '1 day',
    safety: 'High',
    features: ['Waterfall trek', 'Safety gear', 'Local guides', 'Swimming'],
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    title: 'Kalu Waterfall',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5e8PTPtTkq5fjTWQLvljRnYlUVi85D0aAA&s',
    description: 'Experience the scenic Kalu Waterfall with enhanced safety features. Perfect for nature lovers and photography enthusiasts.',
    price: 'From ₹2,499',
    duration: '1 day',
    safety: 'High',
    features: ['Waterfall visit', 'Safety monitoring', 'Local support', 'Photography'],
    rating: 4.5,
    reviews: 89
  },
  {
    id: 5,
    title: 'Tourist Places in Kokan',
    image: 'https://images.tpointtech.com/tourist-places/images/tourist-places-in-kokan16.png',
    description: 'Explore the beautiful Konkan region with guided tours and safety features. Discover pristine beaches and coastal culture.',
    price: 'From ₹5,999',
    duration: '3 days',
    safety: 'High',
    features: ['Beach visits', 'Cultural tour', 'Local guides', 'Seafood'],
    rating: 4.8,
    reviews: 142
  },
  {
    id: 6,
    title: 'Konkan Region',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8SJGvx_-mBCF_O3ebx4tjzTEt68bRmIpyQ&s',
    description: 'Discover the coastal beauty of Konkan with enhanced safety features. Experience the perfect blend of nature and culture.',
    price: 'From ₹6,999',
    duration: '4 days',
    safety: 'High',
    features: ['Coastal tour', 'Beach safety', 'Local support', 'Cultural experience'],
    rating: 4.9,
    reviews: 178
  },
  {
    id: 7,
    title: 'Wet n Joy Water Park',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtWp3rzddKH8ghbGS8l2ezK75qApUpQNIHA&s',
    description: 'Enjoy water activities with enhanced safety monitoring and lifeguards. Perfect for family fun and adventure.',
    price: 'From ₹1,999',
    duration: '1 day',
    safety: 'High',
    features: ['Water safety', 'Lifeguards', 'First aid', 'Family activities'],
    rating: 4.4,
    reviews: 167
  },
  {
    id: 8,
    title: 'Kalsubai Trek',
    image: 'https://www.thrillophilia.com/tours/day-trek-to-kalsubai-igatpuri',
    description: 'Conquer the highest peak in Maharashtra with safety equipment and guides. A challenging trek with rewarding views.',
    price: 'From ₹3,499',
    duration: '1 day',
    safety: 'High',
    features: ['Mountain trek', 'Safety gear', 'Expert guides', 'Sunrise view'],
    rating: 4.7,
    reviews: 134
  }
];

const safetyFeatures = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
    title: 'Real-time Tracking',
    description: 'Track your location and share with trusted contacts'
  },
  {
    icon: <SafetyCheckIcon sx={{ fontSize: 40 }} />,
    title: 'Safety Alerts',
    description: 'Get instant alerts about safety concerns in your area'
  },
  {
    icon: <LiveTvIcon sx={{ fontSize: 40 }} />,
    title: 'Live Monitoring',
    description: '24/7 monitoring of your travel route and destination'
  }
];

const Destinations = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container sx={{ py: 8 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 6, 
            mb: 8, 
            textAlign: 'center',
            borderRadius: 3,
            background: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url(https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg)',
              opacity: 0.1,
              zIndex: 1
            }
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                mb: 3
              }}
            >
              Safe Destinations in Maharashtra
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                opacity: 0.9,
                maxWidth: 800,
                mx: 'auto',
                mb: 4
              }}
            >
              Explore Maharashtra with enhanced safety features and real-time tracking
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ 
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1.1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 8px rgba(0,0,0,0.2)'
                }
              }}
            >
              Start Exploring
            </Button>
          </Box>
        </Paper>

        {/* Safety Features Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center" 
            color="primary"
            sx={{ 
              fontWeight: 'bold',
              mb: 4
            }}
          >
            Safety Features
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {safetyFeatures.map((feature, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Paper 
                  elevation={2} 
                  sx={{ 
                    p: 4, 
                    textAlign: 'center',
                    height: '100%',
                    transition: 'all 0.3s',
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 3 }}>
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    color="text.secondary"
                    sx={{ fontSize: '1.1rem' }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        <Divider sx={{ my: 6 }} />
        
        {/* Destinations Grid */}
        <Grid container spacing={4}>
          {destinations.map((destination) => (
            <Grid item key={destination.id} xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  borderRadius: 3,
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="280"
                  image={destination.image}
                  alt={destination.title}
                  sx={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2" 
                    color="primary"
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 2
                    }}
                  >
                    {destination.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    paragraph
                    sx={{ 
                      mb: 3,
                      fontSize: '1.1rem',
                      lineHeight: 1.6
                    }}
                  >
                    {destination.description}
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      mb: 3 
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      color="primary"
                      sx={{ fontWeight: 'bold' }}
                    >
                      {destination.price}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ mr: 1 }}
                      >
                        {destination.rating} ★
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                      >
                        ({destination.reviews} reviews)
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    <Chip 
                      label={`Safety: ${destination.safety}`} 
                      color={destination.safety === 'High' ? 'success' : 'warning'}
                      size="small"
                      sx={{ 
                        mr: 1,
                        mb: 1,
                        fontWeight: 'bold',
                        px: 2,
                        py: 1
                      }}
                    />
                    {destination.features.map((feature, index) => (
                      <Chip
                        key={index}
                        label={feature}
                        size="small"
                        sx={{ 
                          mr: 1, 
                          mb: 1,
                          backgroundColor: 'primary.light',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'primary.main'
                          }
                        }}
                      />
                    ))}
                  </Box>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    sx={{ 
                      mt: 2,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s',
                      background: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: 3
                      }
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Destinations; 
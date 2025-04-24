import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaStar, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedPackageType, setSelectedPackageType] = useState('all');

  const backgroundImages = [
    '/image.png',
    '/image11.png',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  ];

  const featuredDestinations = [
    {
      id: 1,
      title: 'Rajgad Fort',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Explore the majestic Rajgad Fort with breathtaking views and rich cultural heritage.',
      price: '₹3,999',
      safety: 'High',
      rating: 4.8,
      reviews: 128,
      features: ['Expert Guides', 'Safety Equipment', 'Emergency Support']
    },
    {
      id: 2,
      title: 'Harihar Fort Trek',
      image: '/image.png',
      description: 'Conquer the challenging Harihar Fort trek with safety monitoring and expert guides. A thrilling adventure for experienced trekkers.',
      price: '₹2,999',
      safety: 'High',
      rating: 4.6,
      reviews: 95,
      features: ['Expert Guides', 'Safety Equipment', 'Emergency Support']
    },
    {
      id: 3,
      title: 'Devkund Waterfall',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Discover the pristine Devkund Waterfall, a hidden gem in Maharashtra\'s Sahyadri range.',
      price: '₹2,999',
      safety: 'High',
      rating: 4.7,
      reviews: 156,
      features: ['Expert Guides', 'Safety Equipment', 'Emergency Support']
    },
    {
      id: 4,
      title: 'Kalu Waterfall',
      image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Experience the beauty of Kalu Waterfall, perfect for nature lovers and photographers.',
      price: '₹2,499',
      safety: 'High',
      rating: 4.5,
      reviews: 89,
      features: ['Expert Guides', 'Safety Equipment', 'Emergency Support']
    },
    {
      id: 5,
      title: 'Tourist Places in Kokan',
      image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Explore the beautiful coastal region of Kokan with its pristine beaches and rich culture.',
      price: '₹5,999',
      safety: 'High',
      rating: 4.8,
      reviews: 112,
      features: ['Expert Guides', 'Safety Equipment', 'Emergency Support']
    },
    {
      id: 6,
      title: 'Kalsubai Trek',
      image: '/image11.png',
      description: 'Challenge yourself with the highest peak in Maharashtra, offering stunning views and a rewarding experience.',
      price: '₹3,499',
      safety: 'High',
      rating: 4.7,
      reviews: 134,
      features: ['Expert Guides', 'Safety Equipment', 'Emergency Support']
    }
  ];

  const tourPackages = [
    {
      id: 1,
      title: 'Luxury Konkan Getaway',
      type: 'luxury',
      price: '₹15,999',
      duration: '3 Days / 2 Nights',
      highlights: ['Private Beach Villa', 'Gourmet Dining', 'Spa Services', 'Water Sports'],
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      title: 'Adventure Trek Package',
      type: 'adventure',
      price: '₹8,999',
      duration: '2 Days / 1 Night',
      highlights: ['Multiple Treks', 'Camping', 'Bonfire', 'Expert Guides'],
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      title: 'Honeymoon Special',
      type: 'honeymoon',
      price: '₹12,999',
      duration: '4 Days / 3 Nights',
      highlights: ['Private Cottages', 'Romantic Dinners', 'Couple Spa', 'Sunset Cruises'],
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 4,
      title: 'Budget Explorer',
      type: 'budget',
      price: '₹5,999',
      duration: '2 Days / 1 Night',
      highlights: ['Comfortable Stay', 'Local Cuisine', 'Guided Tours', 'Transport Included'],
      image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      rating: 5,
      comment: 'Amazing experience! The guides were professional and the safety measures were top-notch.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      name: 'Priya Patel',
      rating: 4,
      comment: 'Great service and well-organized trips. Would definitely recommend to others.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 3,
      name: 'Amit Desai',
      rating: 5,
      comment: 'The best travel experience I\'ve had in Maharashtra. Everything was perfect!',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(reviewInterval);
  }, [testimonials.length]);

  const filteredPackages = selectedPackageType === 'all' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.type === selectedPackageType);

  return (
    <div className="home">
      {/* Header/Navbar */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">Travel Maharashtra</Link>
          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background" style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}>
          <div className="overlay"></div>
          <div className="hero-content">
            <h1>Discover Your Next Adventure</h1>
            <p>Your next adventure begins here. Explore breathtaking destinations, discover hidden gems, and turn your travel dreams into unforgettable memories. Let the journey inspire you</p>
            <Link to="/destinations" className="btn btn-primary">Explore Now</Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="popular-destinations">
        <div className="container">
          <h2>Popular Destinations</h2>
          <div className="destinations-grid">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                <div className="card-image">
                  <img src={destination.image} alt={destination.title} />
                  <div className="rating">
                    <FaStar className="star-icon" />
                    <span>{destination.rating}</span>
                    <span>({destination.reviews} reviews)</span>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{destination.title}</h3>
                  <p>{destination.description}</p>
                  <div className="card-footer">
                    <span className="price">{destination.price}</span>
                    <Link to={`/destinations/${destination.id}`} className="btn btn-outline">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="tour-packages">
        <div className="container">
          <h2>Tour Packages</h2>
          <div className="package-filters">
            <button 
              className={`filter-btn ${selectedPackageType === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedPackageType('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${selectedPackageType === 'budget' ? 'active' : ''}`}
              onClick={() => setSelectedPackageType('budget')}
            >
              Budget
            </button>
            <button 
              className={`filter-btn ${selectedPackageType === 'luxury' ? 'active' : ''}`}
              onClick={() => setSelectedPackageType('luxury')}
            >
              Luxury
            </button>
            <button 
              className={`filter-btn ${selectedPackageType === 'honeymoon' ? 'active' : ''}`}
              onClick={() => setSelectedPackageType('honeymoon')}
            >
              Honeymoon
            </button>
            <button 
              className={`filter-btn ${selectedPackageType === 'adventure' ? 'active' : ''}`}
              onClick={() => setSelectedPackageType('adventure')}
            >
              Adventure
            </button>
          </div>
          <div className="packages-grid">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="card-image">
                  <img src={pkg.image} alt={pkg.title} />
                </div>
                <div className="card-content">
                  <h3>{pkg.title}</h3>
                  <div className="package-details">
                    <span className="price">{pkg.price}</span>
                    <span className="duration">{pkg.duration}</span>
                  </div>
                  <ul className="highlights">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Travelers Say</h2>
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-card ${index === currentReviewIndex ? 'active' : ''}`}
              >
                <div className="testimonial-content">
                  <div className="user-info">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <div className="rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="star-icon" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p>{testimonial.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="about-us">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <p>We are passionate about showcasing the beauty and diversity of Maharashtra. Our team of experienced guides and travel experts are dedicated to providing you with unforgettable experiences.</p>
              <div className="stats">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Happy Travelers</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Destinations</p>
                </div>
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Travel Maharashtra</h3>
              <p>Discover the beauty of Maharashtra with us. Your trusted travel partner for unforgettable experiences.</p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/destinations">Destinations</Link></li>
                <li><Link to="/packages">Packages</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact Info</h3>
              <ul>
                <li>123 Travel Street, Mumbai</li>
                <li>+91 9876543210</li>
                <li>info@travelmaharashtra.com</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Travel Maharashtra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 
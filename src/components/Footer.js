import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaStar, FaStarHalf, FaEnvelope } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';


const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={3}>
            <h2>Contact Us</h2>
            <div className="social-media-icons">
              <a href="#"><FaFacebook size={22} /></a>
              <a href="#"><FaInstagram size={22}/></a>
              <a href="#"><FaTwitter size={22}/></a>
              <a href="#"><FaWhatsapp size={22}/></a>
              <a href="#"><FaEnvelope size={22}/></a>
              
            </div>
            <br />
            <h5>The Tasty House</h5>
            
            <p>
            Indulge in a culinary journey of flavors at The Tasty House, where delicious food meets exceptional hospitality. We are passionate about delivering an unforgettable dining.</p>
            
          </Col>
          <Col md={3}>
            <h2>Address</h2>
            <p>123 Main Street, City, State</p>
            <p>Email: info@example.com</p>
            <p>123 Main Street, City, State</p>
            
         
          </Col>
          <Col md={3}>
            <h2>Opening Hours</h2>
            <p>Monday - Friday: 9am - 10pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
            <p>1:00 PM to 11:00 AM (7 days a week)</p>
         
           
          </Col>
          <Col md={3}>
            <h2>Explore</h2>
         <p>Menu</p>
         <p>Reservations</p>
         
         <p>Events</p>
         
         
         <FaStar size={24} className='stars' />
              <FaStar size={24} />
              <FaStar size={24} className='stars'/>
              <FaStar size={24} />
              <FaStarHalf size={24} className='stars' />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

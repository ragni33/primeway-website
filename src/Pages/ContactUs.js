import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../App.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your own email handling logic
    const { name, email, message } = formData;
    const emailContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    window.open(`mailto:clearbusinessbyadrian@gmail.com?subject=Contact%20Form%20Submission&body=${encodeURIComponent(emailContent)}`);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    
    <section className='contactus'>
    <section style={{backgroundColor: "lightblue"}} >
      <Container className="mt-4 p-4" >
        <Row>
          <Col md={6}>
            <h2>Contact Us</h2>
            <p>Please fill out the form below to get in touch with us.</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Your Email address</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Enter your message" required />
              </Form.Group>
<br />
<div className="d-grid gap-2">
                <Button variant="outline-dark" size="lg" type="submit" disabled={!formData.name || !formData.email || !formData.message}>Reach to Us</Button>
              </div>
            
            </Form>

          </Col>
          
          <Col md={6}>
            <h2>Contact Information</h2>
            <p>Contact Number: 0141 611 1231</p>
            <p>Customer Email: clearbusinessbyadrian@gmail.com</p>
            <p>Online Order Email: clearbusinessbyadrian@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </section>
    <br />
<Footer />
    </section>
  );
};

export default ContactUs;

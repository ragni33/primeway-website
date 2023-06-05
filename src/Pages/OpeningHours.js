import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import openingHoursImage1 from '../assets/openingHoursImage1.jpg';
import openingHoursImage2 from '../assets/openingHoursImage2.jpg';
import openingHoursImage3 from '../assets/openingHoursImage3.jpg';
import '../App.css'
import Footer from '../components/Footer';



const OpeningHours = () => {
  return (
  <section className='opening'>
  <section className="opening-hours">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center"> Our Opening Hours</h2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={openingHoursImage1} alt="Slide 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={openingHoursImage2} alt="Slide 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={openingHoursImage3} alt="Slide 3" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6}>
            <div className="opening-hours-info">
              <h3>Restaurant Hours</h3>
              <ul>
                <li>Monday: 9am - 10pm</li>
                <li>Tuesday: 9am - 10pm</li>
                <li>Wednesday: 9am - 10pm</li>
                <li>Thursday: 9am - 10pm</li>
                <li>Friday: 9am - 11pm</li>
                <li>Saturday: 10am - 11pm</li>
                <li>Sunday: 10am - 11pm</li>
              </ul>
              <h3>Delivery Hours</h3>
              <ul>
                <li>Monday - Friday: 11am - 9pm</li>
                <li>Saturday - Sunday: 12pm - 9pm</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
 
      </section>
      <br />

      <Footer />
    </section>


  
  );
};

export default OpeningHours;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutUsImage from '../assets/aboutUsImage.jpg'
import Footer from '../components/Footer';


const AboutUs = () => {
  return (
   
   <section>
   <section className="about-us" style={{marginTop: "5%"}}>
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="section-title">About Us</h2>
            <p className="section-description"style={{marginTop: "5%", textAlign: "justify"}}>
              The Tasty House is a renowned restaurant that has been serving delectable meals to food enthusiasts for over a decade. We take pride in our commitment to quality, authenticity, and exceptional customer service.
            </p>
            <p>
              Our passion for food is reflected in every dish we create. We source the finest ingredients from local farmers and use traditional cooking techniques to ensure the flavors are robust and memorable.
            </p>
            <p>
              At The Tasty House, we believe that dining is not just about eating but also about creating memorable experiences. Our elegant ambiance, attentive staff, and attention to detail ensure that every visit is exceptional.
            </p>
          </Col>
          <Col md={6}>
            <img
              src={aboutUsImage}
              alt="About Us"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>

<Footer />
    </section>
  );
};

export default AboutUs;

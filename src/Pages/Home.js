import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import tastyHouseImage from '../assets/tasty-house.jpg';
import '../App.css';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (

  <section>
  
   <section className="home">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1 className="text-center">Welcome to The Tasty House</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <img src={tastyHouseImage} alt="The Tasty House" className="img-fluid mt-3" />
          </Col>
          <Col xs={12} md={6}>
            <h2>About Us</h2>
            <p style={{textAlign: "justify"}}>
              The Tasty House is a premier restaurant serving delicious and flavorful dishes that will tantalize your taste buds.
              With our carefully crafted menu, excellent service, and inviting atmosphere, we strive to create a memorable dining experience for our customers.
            </p>
            <h2 style={{textAlign: "justify"}}>Our Features</h2>
            <ul style={{textAlign: "justify"}}>
              <li>Wide variety of cuisines to choose from</li>
              <li>Fresh and locally sourced ingredients</li>
              <li>Experienced and talented chefs</li>
              <li>Warm and welcoming ambiance</li>
              <li>Attentive and friendly staff</li>
              <li>Takeaway and delivery options</li>
              <li>Special offers and promotions</li>
            </ul>
          </Col>
        </Row>
      </Container>
      </section>

      <section className="testimonials" style={{marginTop: "2%", backgroundColor: "#2b8eb3"}}>
<Testimonials />

    </section>
    <br />
<Footer />
      
    </section>
  );
};

export default Home;

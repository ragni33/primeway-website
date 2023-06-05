import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import customer1Image from '../assets/customer1Image.jpg';
import customer2Image from '../assets/customer2Image.jpg';
import customer3Image from '../assets/customer3Image.jpg';

import {FaStar, FaStarHalf } from 'react-icons/fa';

const Testimonials = () => {
  const testimonialsData = [
    {
      image: customer1Image,
      name: "John Doe",
      review: "The Tasty House is my go-to restaurant for a delightful dining experience. The food is always fresh, flavorful, and beautifully presented. The staff is attentive and friendly, making each visit memorable."
    },
    {
      image: customer2Image,
      name: "Jane Smith",
      review: "I absolutely love the ambiance at The Tasty House. It's cozy, elegant, and perfect for a special occasion. The menu offers a great variety of dishes to suit different tastes, and the service is top-notch."
    },
    {
      image: customer3Image,
      name: "Mike Johnson",
      review: "The Tasty House never disappoints! From the moment I step in, I'm greeted with warm smiles and a welcoming atmosphere. The food is consistently delicious, and the attention to detail in every dish is commendable."
    }
  ];

  return (
    <section className="testimonials">
      <Container>
        <h2 className="text-center" style={{marginBottom: "5%", paddingTop: "3%"}}>Customer Testimonials</h2>
        <Row className="justify-content-center">
          {testimonialsData.map((testimonial, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-4">
              <div className="testimonial-box" style={{textAlign: "justify"}}>
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image img-fluid" />
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-review">{testimonial.review}</p>

                <div className="star-icons">
                    <FaStar className="star-icon" size={23} style={{color: "rgb(216, 122, 122)" }} />
                    <FaStar className="star-icon" size={23} />
                    <FaStar className="star-icon" size={23} style={{color: "rgb(216, 122, 122)" }} />
                    <FaStar className="star-icon" size={23} />
                    <FaStarHalf className="star-icon" size={23}  style={{color: "rgb(216, 122, 122)" }} />
                  </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;

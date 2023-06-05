import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import menu1 from '../assets/menu1.jpg'
import menu2 from '../assets/menu2.jpg'
import menu3 from '../assets/menu3.jpg'
import menu4 from '../assets/menu4.jpg'
import menu5 from '../assets/menu5.jpg'
import menu6 from '../assets/menu6.jpeg'
import menu7 from '../assets/menu7.jpg'
import Footer from '../components/Footer'

const MenuPricing = () => {
  return (
   
   <section className='main-menu'>
   <section className="menu" style={{margin: "3%", padding: "1%"}}>
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Our Menu & Pricing</h2>

            <br /> 

            <p className="text-center" style={{textAlign: "justify"}}>
            Food categories offer a diverse array of culinary experiences, each with its own unique flavors and characteristics. 
            From appetizers that awaken the palate to salads bursting with freshness and vitality, the world of food categories is a delightful 
            journey of taste. Sandwiches, with their endless combinations of ingredients, satisfy hunger with a satisfying crunch. Soups warm the 
            soul and offer comfort in every spoonful. Pizzas, adorned with a symphony of toppings, Burgers, whether traditional or plant-based, provide a hearty and indulgent experience
            </p>
          </Col>
        </Row>
        <Row style={{marginTop: "5%"}}>
          <Col xs={12} md={6} lg={4}>
            <div className="menu-item">
              <h3>Burger Combo</h3>
              <img src={menu1} alt="burger" width={300} height={200} /> 
              <p>A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.</p>
              <span className='price'>$10.99</span>
            </div>
          </Col>

         

          <Col xs={12} md={6} lg={4}>
            <div className="menu-item">
              <h3>Salmon Fillet</h3>
              
              <img src={menu2} alt="pizza" width={300} height={200} /> 
              <p>A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.</p>
              <span className="price">$12.99</span>
            </div>
          </Col>


          <Col xs={12} md={6} lg={4}>
            <div className="menu-item">
              <h3>Pizza Margherita</h3>
              <img src={menu3} alt="pizza" width={300} height={200} /> 
              <p>A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.</p>
              <span className="price">$15.99</span>
            </div>
          </Col>
          {/* Add more menu items */}
        </Row>
        <br />



        <Row style={{marginTop: "5%"}}>
          <Col xs={12} md={6} lg={4}>
            <div className="menu-item">
              <h3>Turbo Tacos</h3>
              
              <img src={menu4} alt="RapidRolls" width={300} height={200} /> 
             
              <p>A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.</p>
              <span className="price">$10.99</span>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="menu-item">

              
              <h3>Rapid Rolls</h3>
              <img src={menu5} alt="RapidRolls" width={300} height={200} /> 
             
              <p>A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.</p>
              
              <span className="price">$12.99</span>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="menu-item">
              <h3>Swift Sandwiches</h3>
              <img src={menu6} alt="RapidRolls" width={300} height={200} /> 
             
              <p>A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.</p>
              <span className="price">$15.99</span>
            </div>
          </Col>
          
        </Row>

        <br />
        <Row style={{marginTop: "5%"}}>
          <Col xs={12} md={6} lg={4}>
            <div className="menu-item">
              <h3>Rapid Rolls</h3>
              <img src={menu5} alt="RapidRolls" width={300} height={200} /> 
             
              <p>A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.</p>
              <span className="price">$10.99</span>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="menu-item">
            
    
              <h3>Speedy Eats</h3>
              <img src={menu6} alt="RapidRolls" width={300} height={200} /> 
             
              <p>A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.</p>
              <span className="price">$12.99</span>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="menu-item">
              <h3>Fast Fries</h3>
              <img src={menu7} alt="RapidRolls" width={300} height={200} /> 
             
              <p>A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.</p>
              <span className="price">$15.99</span>
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

export default MenuPricing;

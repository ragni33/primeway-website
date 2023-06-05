import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';



function Header() {
  return (
    <section>
    <section>
    <Navbar expand="lg" style={{ backgroundColor: "white" }}>
    <Navbar.Brand>
  <a href="/home">
    <img
      src={logo}
      width="100"
      height="70"
      className="d-inline-block align-top"
      alt="logo"
    />
  </a>
</Navbar.Brand>

<b>THE PRIME WAY</b>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{margin : "2%"}} />
    
        <Navbar.Collapse id="basic-navbar-nav">
         

        <Nav style={{ marginLeft: "auto" }}>

  <Nav.Link as={Link} to="/home"><b>Home</b></Nav.Link>
  <Nav.Link as={Link} to="/openinghours"><b>Opening Hours</b></Nav.Link>

  <Nav.Link as={Link} to="/menupricing"><b>Our Menu & Pricing</b></Nav.Link>
  <Nav.Link as={Link} to="/aboutus"><b>About US</b></Nav.Link>
  
  <Nav.Link as={Link} to="/contactus"><b>Contact Us</b></Nav.Link>
  
</Nav>

        </Navbar.Collapse>
      


    </Navbar>


  <br />

  
    
    </section>


    </section>



  );
}

export default Header;
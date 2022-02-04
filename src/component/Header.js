import '../App.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube, faShopify } from '@fortawesome/free-brands-svg-icons';



function Header() {
  const [addcardt_counter, setAddcardt_counter] = useState(0);



  useEffect(() => {
    setInterval(function () {
      var item = JSON.parse(localStorage.getItem("item") || "[]");
      setAddcardt_counter(item.length);
    }, 100);
  }, []);







  return (
    <>
      <Navbar collapseOnSelect expand="lg md" bg="light">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-auto">
              <Nav.Link href="#features">FAQs |</Nav.Link>
              <Nav.Link href="#features">Help |</Nav.Link>
              <Nav.Link href="#features">Support</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="#deets"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
              <Nav.Link href="#deets"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
              <Nav.Link href="#deets"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
              <Nav.Link href="#deets"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
              <Nav.Link href="#deets"><FontAwesomeIcon icon={faYoutube} /></Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar collapseOnSelect expand="lg md">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav" style={{ height: '50px' }}>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <span className="r">R</span><span className="page_name">Ajon</span>
                </Link>
              </Nav.Link>
            </Nav>

            <Nav>
              <NavDropdown title="Login" id="collasible-nav-dropdown" style={{ marginTop: '8px' }}>
                <NavDropdown.Item>Login</NavDropdown.Item>
                <NavDropdown.Item >Registration</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link style={{ fontSize: '25px' }}>
                <Link to="/addcard_item" style={{ textDecoration: 'none', color: "#d19c97", }}>
                  <FontAwesomeIcon icon={faShopify} />
                  <span className="add_count">{addcardt_counter}</span>
                </Link>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </>
  );
}

export default Header;




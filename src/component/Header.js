import '../App.css';
import { Navbar, Container, Nav, NavDropdown, Modal, Form, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube, faShopify } from '@fortawesome/free-brands-svg-icons';
import axios from "axios";



function Header() {
  const [addcardt_counter, setAddcardt_counter] = useState(0);
  const [logintab, setLogintab] = useState(false);
  const [logedin, setLogedin] = useState(false);

  const [registration, setRegistration] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logpass, setLogpass] = useState("password");





  useEffect(() => {
    setInterval(function () {
      var item = JSON.parse(localStorage.getItem("item") || "[]");
      setAddcardt_counter(item.length);
    }, 100);
  }, []);



  useEffect(() => {
    setInterval(function () {
      if (localStorage.getItem("username").length) {
        setLogedin(true);
      }
    }, 100);
  }, []);






  function emailchange(event) {
    setEmail(event.target.value);
  }

  function passchang(event) {
    setPassword(event.target.value);
  }


  const authinticate = (token) => {
    console.log(token)
    var index = token.length;
    var y = token.substring(0, 8);
    var x = token.substring(8, index);
    const auth_token = x + y;
    localStorage.setItem("auth_token", auth_token);
  }




  const sinin = () => {

    fetch("http://127.0.0.1:8000/api/login", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ email: email, password: password })
    })
      .then(function (res) {
        res.json()
          .then((result) => {
            authinticate(result.token);
            localStorage.setItem("username", result.data.name);
            localStorage.setItem("email", result.data.email);
            setEmail("");
            setPassword("");
            setLogintab(false);
          })
      })
      .catch(function (res) { console.log(res) })
  }


  const signout = () => {
    var token = "132|HZ2waqaKVorytikB3FbJBC02GyMcx7tG2eELGmtg";
    fetch("http://127.0.0.1:8000/api/logout", {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({})
    })
      .then(function (res) {
        res.json()
          .then((result) => {
            console.log(result);
            localStorage.removeItem("username");
            localStorage.removeItem("email");
            localStorage.removeItem("auth_token");
            setLogedin(false);
          })
      })
      .catch(function (res) { console.log(res) })



  }


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
              {logedin != 0 ?
                <NavDropdown title={localStorage.getItem("username") ? localStorage.getItem("username") : "Sign in"} id="collasible-nav-dropdown" style={{ marginTop: '8px' }}>
                  <NavDropdown.Item onClick={() => signout()}>Sign Out</NavDropdown.Item>
                </NavDropdown>
                :
                <NavDropdown title="Sign In" id="collasible-nav-dropdown" style={{ marginTop: '8px' }}>
                  <NavDropdown.Item onClick={() => setLogintab(true)}>Sign In</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setRegistration(true)}>Sign Up</NavDropdown.Item>
                </NavDropdown>
              }
              <Nav.Link style={{ fontSize: '25px' }}>
                <Link to={"/addcard_item"} style={{ textDecoration: 'none', color: "#d19c97", }}>
                  <FontAwesomeIcon icon={faShopify} />
                  <span className="add_count">{addcardt_counter}</span>
                </Link>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />



      {/* registration */}
      <Modal size="lg" show={registration} onHide={() => setRegistration(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton className='text-light bg-info'>
          <Modal.Title id="example-modal-sizes-title-lg" className="">Rregistration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3"> Your Name </Form.Label>
              <Col sm="9">
                <Form.Control type="text" placeholder="Your Name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3"> E-mail Address </Form.Label>
              <Col sm="9">
                <Form.Control type="text" placeholder="Email address" />
              </Col>
            </Form.Group>



            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">Password</Form.Label>
              <Col sm="9">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>


            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3"> Confirm Password</Form.Label>
              <Col sm="9">
                <Form.Control type="password" placeholder="Confirm Password" />
                <br />
                <ButtonGroup size="lg">
                  <Button className="bg-info" style={{ width: '200px' }}>Sign Up</Button>

                </ButtonGroup>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>






      {/* Login */}
      <Modal size="lg" show={logintab} onHide={() => setLogintab(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton className='text-light bg-info'>
          <Modal.Title id="example-modal-sizes-title-lg">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2"> Email </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Email address" value={email} onChange={emailchange} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">

              <Form.Label column sm="2">Password</Form.Label>
              <Col sm="10">
                <span className='passwordshow' onClick={() => setLogpass(logpass == "text" ? "password" : "text")}>{logpass == "text" ? " show " : " hide "}</span>
                <Form.Control type={logpass} placeholder="Password" value={password} onChange={passchang} style={{ paddingLeft: "60px" }} />
                <br />
                <ButtonGroup size="lg">
                  <Button className="bg-info" style={{ width: '200px' }} onClick={() => sinin()}>Sign In</Button>
                </ButtonGroup>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>


    </>
  );
}

export default Header;




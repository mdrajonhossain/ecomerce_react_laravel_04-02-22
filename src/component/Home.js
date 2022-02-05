import '../App.css';
import {
  Navbar, Container, Nav, Card, Col, Row
} from 'react-bootstrap';
import Header from './Header';
import Fooder from './Fooder';
import Allproduct from './Allproduct';
import Carouseldiv from './Carousel';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faShippingFast, faExchangeAlt, faPhoneAlt, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Link } from "react-router-dom";





function Home() {
  const [catagoryname, setCatagoryname] = useState([]);
  const [catsitebar, setCatsitebar] = useState(true);


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/cataroutapi')
      .then(res => {
        setCatagoryname(res.data);
      });
  }, []);



  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center">
            <div className='catagory_title' onClick={() => setCatsitebar(false)}>Catagories</div>
            {catsitebar ?
              <div className='catagory_list'>
                {catagoryname.map((data) => {
                  return (
                    <>
                      <Link to={`/items/${data.slug}`}>
                        <div className='list'>
                          <span>
                            <img style={{ width: '20px', height: '20px' }} src={data.api_photo} alt="cata" />
                          </span> &nbsp;{data.name}</div>
                      </Link>
                    </>
                  )
                })}
              </div>
              :
              <div className='h6 text-light' style={{ background: '#d19c97', cursor: 'pointer' }} onClick={() => setCatsitebar(true)}><FontAwesomeIcon icon={faCaretDown} /></div>
            }
          </div>


          <div className="col-md-9">
            <Navbar collapseOnSelect expand="lg">
              <Container>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto text-auto" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#features">Shop</Nav.Link>
                    <Nav.Link href="#features">Shop Detail</Nav.Link>
                    <Nav.Link href="#features">Pages</Nav.Link>
                    <Nav.Link href="#features">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Carouseldiv />
          </div>
        </div>

        <div className="container text-center">
          <div className="row" style={{ fontSize: '20px' }}>
            <div className="col-md-3 p-5"> <FontAwesomeIcon icon={faCheck} /> Quality Product</div>
            <div className="col-md-3 p-5"> <FontAwesomeIcon icon={faShippingFast} /> Free Shipping</div>
            <div className="col-md-3 p-5"> <FontAwesomeIcon icon={faExchangeAlt} />14-Day Return</div>
            <div className="col-md-3 p-5"> <FontAwesomeIcon icon={faPhoneAlt} /> 24/7 Support</div>
          </div>
        </div>



        <div className='container h4 p-3 text-center' style={{ color: '#d19c97' }}>-Catagory View-</div>

        <div className='row'>
          {catagoryname.map((data) => {
            return (
              <>

                <div className='col-md-3' style={{ cursor: 'pointer' }}>
                  <Link to={`/items/${data.slug}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Product 15-</Card.Title>
                      </Card.Body>
                      <Card.Img variant="center" width="100%" height="220" src={data.api_photo} />
                      <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                  <br />
                </div>

              </>
            )
          })}
        </div>
      </div>


      <br /> <br />
      <Container className='text-light p-4'>
        <Row>
          <Col>
            <Row className='bg-secondary p-4'>
              <Col md={2}>
              </Col>
              <Col md={8}>
                <div>20% OFF THE ALL ORDER</div>
                <h1>Spring Collection</h1>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row className='bg-success p-4'>
              <Col md={2}>
              </Col>
              <Col md={8}>
                <div style={{ textAlign: 'right' }}>20% OFF THE ALL ORDER</div>
                <h1 className='text-warning' style={{ textAlign: 'right' }}>Spring Collection</h1>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <br />
      <div className='container h4 p-3 text-center' style={{ color: '#d19c97' }}>All Product View</div>
      <Allproduct />
      <Fooder />
    </>
  );
}

export default Home;




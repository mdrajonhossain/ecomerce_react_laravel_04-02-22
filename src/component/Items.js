import '../App.css';
import { Navbar, Container, Nav, Card, Button, Col, Row, ButtonGroup, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faShippingFast, faExchangeAlt, faPhoneAlt, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import Header from './Header';
import Fooder from './Fooder';



function Items({ match }) {
  const [itemlist, setItemlist] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [single_item, setSingle_item] = useState([]);

  const [addcart_localstorage, setAddcart_localstorage] = useState([]);


  useEffect(() => {
    const slug = { slug: match.params.slug };
    axios.post('http://127.0.0.1:8000/api/caproduct', slug)
      .then((response) => {
        setItemlist(response.data)
      })
  }, []);


  useEffect(() => {
    setInterval(function () {
      var cart = JSON.parse(localStorage.getItem("item") || "[]");
      setAddcart_localstorage(cart);
    }, 100);
  }, []);

  const viewdetail = (e) => {
    setLgShow(true);
    setSingle_item(e);
  }

  const addcardt = (e) => {

    var id = e.id;
    var item_name = e.name;
    var api_photo = e.api_photo;
    var price = e.discount_price;

    var a = 1;
    var item = JSON.parse(localStorage.getItem("item") || "[]");

    if (item.length === 0) {
      var item = JSON.parse(localStorage.getItem("item") || "[]");
      item.push({ id: id, item_name: item_name, api_photo: api_photo, qnt: a, price: price });
      localStorage.setItem("item", JSON.stringify(item));
    } else {
      var mach = item.filter((dt) => {
        return dt.item_name.match(item_name)
      })
      if (mach.length === 0) {
        var item = JSON.parse(localStorage.getItem("item") || "[]");
        item.push({ id: id, item_name: item_name, api_photo: api_photo, qnt: a, price: price });
        localStorage.setItem("item", JSON.stringify(item));
      } else {
        var item = JSON.parse(localStorage.getItem("item") || "[]");
        var index = item.findIndex(x => x.item_name === item_name);
        item[index].qnt = item[index].qnt + 1;
        localStorage.setItem("item", JSON.stringify(item));
      }
    }
  }


  const increment = (e) => {
    var item = JSON.parse(localStorage.getItem("item") || "[]");
    var index = item.findIndex(x => x.id === e);
    if (item[index].qnt != 10) {
      item[index].qnt = item[index].qnt + 1;
      localStorage.setItem("item", JSON.stringify(item));
    }
  }


  const derement = (e) => {
    var item = JSON.parse(localStorage.getItem("item") || "[]");
    var index = item.findIndex(x => x.id === e);
    if (item[index].qnt > 1) {
      item[index].qnt = item[index].qnt - 1;
      localStorage.setItem("item", JSON.stringify(item));
    } else {
      const item = JSON.parse(localStorage.getItem("item"));
      var index = item.findIndex(x => x.id === e);
      item.splice(index, 1);
      localStorage.setItem('item', JSON.stringify(item));
    }
  }


  return (
    <>
      <Header />


      <div className='container h5 p-3 text-center'>{itemlist.length == 0 ? 'Wait Please No Product' :
        <div className='container h4 p-3 text-center' style={{ color: '#d19c97' }}>-Product View-</div>
      }</div>


      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Item Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <div className='row'>

              <div className='col-md-3'>
                <img src={single_item.api_photo} width="100%" height="250" />
              </div>

              <div className='col-md-4'>
                <div className='h4'>{single_item.name}</div>
                <div className='h5 text-danger'>Price ৳{single_item.discount_price} <span className='discount'>৳{single_item.previoust_price}</span></div>
                <Button style={{ fontSize: '16px' }} variant="danger text-light"> Buy Now </Button> &nbsp;  &nbsp;
                <Button style={{ fontSize: '16px' }} variant="info text-light" onClick={() => addcardt(single_item)}> Add To Cart</Button>
                <div className='pt-4'>Color Family color</div>
                <div className=''>Quantity</div>
              </div>

              <div className='col-md-4'>
                <div className=''><b>Delivery</b></div>
                <div className=''>Dhaka, Dhaka North, Banani Road No. 12 - 19</div>
                <div className='pt-4'><b>Home Delivery</b></div>
                <div className=''>rajon Cash on Delivery Available</div>
              </div>

            </div>
          </div>
        </Modal.Body>
      </Modal>




      <div className='container'>
        <Container className='row'>
          {itemlist.map((data, i) => {
            return (
              <>
                <div className='col-md-3 p-2 item_tab'>
                  <Card>

                    {addcart_localstorage.map((cart) => {
                      return (
                        <>
                          {cart.id == data.id ?
                            <div className='display_top_qnt'>
                              <span className='text-light itemtopqnt' onClick={() => derement(cart.id)} style={{ cursor: 'pointer' }}>-</span>
                              <span className='text-light h1 p-4 text-center'>{cart.qnt}</span>
                              <span className='text-light itemtopqnt' onClick={() => increment(cart.id)} style={{ cursor: 'pointer' }}>+</span>
                              <br /><span>৳{cart.price * cart.qnt}</span>
                            </div>
                            : ''}
                        </>
                      )
                    })}

                    <Card.Img variant="top" width="100%" height="250" src={data.api_photo} />
                    <Card.Body className="" style={{ background: '#c4cbc0' }}>
                      <Card.Title style={{ fontSize: '14px' }}> {data.name}</Card.Title>
                      <div className='' style={{ color: 'rgb(245, 114, 36)' }} ><span>৳{data.discount_price}</span> &nbsp; <span className='discount'>৳{data.previoust_price}</span></div>
                      <ButtonGroup>
                        <Button style={{ fontSize: '12px' }} variant="danger text-light" onClick={() => viewdetail(data)}> <FontAwesomeIcon icon={faEye} /> View Details</Button>
                        <Button style={{ fontSize: '12px' }} variant="info text-light" onClick={() => addcardt(data)}><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</Button>
                      </ButtonGroup>
                    </Card.Body>
                  </Card>
                </div>
              </>
            )
          })}
        </Container>
      </div>
      <br /><br />
      <Fooder />
    </>
  );
}

export default Items;




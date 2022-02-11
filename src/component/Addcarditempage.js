import '../App.css';
import React, { useState, useEffect } from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap';
import Header from './Header';
import Fooder from './Fooder';
import Userinfo from './Userinfo';



const Addcarditempage = () => {
  const [addcard, setAddcard] = useState([]);
  const [addcardtotal, setAddcardtotal] = useState(0);


  useEffect(() => {
    setInterval(function () {
      var item = JSON.parse(localStorage.getItem("item") || "[]");
      setAddcard(item);

      var total = item.reduce((accum, item) => accum + item.qnt * item.price, 0)
      setAddcardtotal(total);
    }, 100);
  }, [setAddcard]);




  const delte = (e) => {
    const item = JSON.parse(localStorage.getItem("item"));
    var index = item.findIndex(x => x.id === e);
    item.splice(index, 1);
    localStorage.setItem('item', JSON.stringify(item));
  }


  const increment = (e) => {
    var item = JSON.parse(localStorage.getItem("item") || "[]");
    var index = item.findIndex(x => x.id === e);
    if (item[index].qnt !== 10) {
      item[index].qnt = item[index].qnt + 1;
      localStorage.setItem("item", JSON.stringify(item));
    }
  }


  const derement = (e) => {
    var item = JSON.parse(localStorage.getItem("item") || "[]");
    var index = item.findIndex(x => x.id === e);

    if (item[index].qnt !== 1) {
      item[index].qnt = item[index].qnt - 1;
      localStorage.setItem("item", JSON.stringify(item));
    }
  }


  return (
    <>
      <Header />

      <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            {localStorage.getItem("username") ? <Userinfo /> : ""}
          </div>
          <div className='col-md-7'>
            <Button className="text-light" size="lg" style={{background: "#d19c97"}}>Buy Now </Button><br /><br />
            <div className='h5 text-danger'>Total ৳{addcardtotal} </div>
            <Table striped bordered hover>
              <thead>
                <tr className='text-center'>
                  <th>Images</th>
                  <th>Item Name</th>
                  <th>Quntity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              {addcard.map((data) => {
                return (
                  <tbody>
                    <tr className='text-center'>
                      <td><img src={data.api_photo} width="50px" height="50px" /></td>
                      <td>{data.item_name}</td>
                      <td>

                        <ButtonGroup>
                          <Button className="bg-success text-light" onClick={() => derement(data.id)}> - </Button>
                          <span className='p-2'> {data.qnt} </span>
                          <Button className="bg-success text-light" onClick={() => increment(data.id)}> + </Button>
                        </ButtonGroup>

                      </td>
                      <td>৳{data.price}</td>
                      <td>৳{data.qnt * data.price}</td>
                      <td><Button style={{ fontSize: '16px' }} variant="danger light" onClick={() => delte(data.id)}> Delete</Button></td>
                    </tr>
                  </tbody>
                )
              })}

            </Table>

          </div>
        </div>
      </div>
      <Fooder />
    </>
  );
}

export default Addcarditempage;




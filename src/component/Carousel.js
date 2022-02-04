import '../App.css';
import { Carousel } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from "axios";


function Carouseldiv() {
  const [carousel, setCarousel] = useState([]);


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/sliderroutapi')
      .then(res => {
        setCarousel(res.data);
      });
  }, []);

 


  return (
    <>
      <Carousel>
        {carousel.map((data) => {
          return (
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={data.api_photo} alt="Second slide" />
              <Carousel.Caption>
                <h1>{data.description}</h1>
                <h4>{data.title}</h4>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  );
}

export default Carouseldiv;




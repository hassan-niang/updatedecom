import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
var carosel = [
  { img: "/Users/hassanniang/ecomFrontEnd/ecom/src/carousel-img/img1.jpg" },
  { img: "../../carousel-img/img2.jep" },
  { img: "../carousel-img/img3.jep" },
  { img: "../carousel-img/img4.jep" },
  { img: "../carousel-img/img5.jep" },
  { img: "../carousel-img/img6.jep" },

]
const about = () => {
  return (
    <div> 
      <h1>hey</h1> 
      <br />
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src="https://www.pexels.com/video/streets-at-night-19811275/" alt="" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src="" alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="" alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default about

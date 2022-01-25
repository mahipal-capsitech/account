import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Pic from "../images/bck.png";
import { Stack } from "@fluentui/react";
import comma1 from '../images/comma1.png'
import comma2 from '../images/comma2.png'
export default function Carousel_fst() {
  return (
    <>
    <Stack className="car_head">
      <a>Setting up your account in the blink of an eye.</a>
    </Stack>
      <Stack className="carousel">
        <Carousel
          variant="dark"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:"center",
            height:"300px",
     
          }}
         
        >
          <Carousel.Item >
            <div className="textSet">
              <span className="span1"><img src={comma1}/></span>
            <p>
             
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              dolore molestias perspiciatis dicta amet et eum dolorem asperiores
              quibusdam a! 
            </p>
            <span className="span2"><img src={comma2}/></span>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div  className="textSet">
          <span className="span1"><img src={comma1}/></span>
            <p>
             
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              dolore molestias perspiciatis dicta amet et eum dolorem asperiores
              quibusdam a! 
            </p>
            <span className="span2"><img src={comma2}/></span>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="textSet">
          <span className="span1"><img src={comma1}/></span>
            <p>
             
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              dolore molestias perspiciatis dicta amet et eum dolorem asperiores
              quibusdam a! 
            </p>
            <span className="span2"><img src={comma2}/></span>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Stack>
    </>
  );
}

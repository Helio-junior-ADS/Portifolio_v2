import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Caro = () => {
  return (
    <>
     <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="dist/assets/images/flex01.png"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="dist/assets/images/imdb.png"
            alt="Third slide"
          
          />
          <Carousel.Caption>
       
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="dist/assets/images/jogo01.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="dist/assets/images/tempo01.png"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="dist/assets/images/todolist01.png"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="dist/assets/images/validaCpf.png"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
     </Carousel>
 
    </>
  );
};

export default Caro;

import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Caro = () => {
  return (
    <>
     <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="src/assets/flex01.png"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="src/assets/imdb.png"
            alt="Third slide"
          
          />
          <Carousel.Caption>
       
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="src/assets/jogo01.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="src/assets/tempo01.png"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="src/assets/todolist01.png"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="src/assets/validaCpf.png"
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

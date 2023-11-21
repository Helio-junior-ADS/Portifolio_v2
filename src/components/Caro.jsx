import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Caro = () => {
  return (
    <>
     <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="https://github.com/Helio-junior-ADS/Fotos_Portifolio/blob/main/assets/Flex.png?raw=true"
           
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="https://github.com/Helio-junior-ADS/Fotos_Portifolio/blob/main/assets/Imdb.png?raw=true"
            alt="Third slide"
          
          />
          <Carousel.Caption>
       
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="https://github.com/Helio-junior-ADS/Fotos_Portifolio/blob/main/assets/Jogo.jpg?raw=true"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="https://github.com/Helio-junior-ADS/Fotos_Portifolio/blob/main/assets/Tempo.png?raw=true"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="https://github.com/Helio-junior-ADS/Fotos_Portifolio/blob/main/assets/Todolist.png?raw=true"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="https://github.com/Helio-junior-ADS/Fotos_Portifolio/blob/main/assets/Valida.png?raw=true"
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

import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Caro = () => {
  return (
    <>
     <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="https://github.com/Helio-junior-ADS/Portifolio_v2/blob/main/src/components/img/Flex.png?raw=true"
           
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="https://github.com/Helio-junior-ADS/Portifolio_v2/blob/main/src/components/img/Imdb.png?raw=true"
            alt="Third slide"
          
          />
          <Carousel.Caption>
       
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="https://github.com/Helio-junior-ADS/Portifolio_v2/blob/main/src/components/img/Jogo.jpg?raw=true"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="https://github.com/Helio-junior-ADS/Portifolio_v2/blob/main/src/components/img/Tempo.png?raw=true"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="https://github.com/Helio-junior-ADS/Portifolio_v2/blob/main/src/components/img/Todolist.png?raw=true"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="https://github.com/Helio-junior-ADS/Portifolio_v2/blob/main/src/components/img/Valida.png?raw=true"
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

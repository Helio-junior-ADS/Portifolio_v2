import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Caro = () => {
  return (
    <>
     <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="src/img/165848159-beb955cf-5973-4ad7-9b4e-5260556699d1.png"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-fulld mx-auto img-responsive"
            src="src/img/168440005-aaa6bbd9-2772-4866-bc27-f152271b0429.png" 
            alt="Second slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="src/img/Captura de Tela 2023-11-21 às 14.19.36.png"
            alt="Third slide"
          
          />
          <Carousel.Caption>
       
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="src/img/163488806-f3affe22-17b9-45b7-b698-8e4745fb6a16.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="src/img/233659409-1eb2dd68-b716-44d2-9d11-6eef3b7a9a9b.png"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-96 w-full mx-auto img-responsive"
            src="src/img/233672230-56dae12e-cdaf-4724-b5cd-bfa4ed0fe608.png"
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

import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { Container, Shelf, Product, Colors, Slide, Button } from "./styles";

import prod03 from "../../assets/prod03.png";
import prod04 from "../../assets/prod04.png";
import prod02 from "../../assets/prod02.png";
import prod01 from "../../assets/prod01.png";

function ProductShelf({ shelf }) {
  const images = [prod03, prod04, prod02, prod01];

  return (
    <Container>
      <h2>Quem viu, viu também</h2>

      <Shelf>
        {shelf.map((item, index) => {
          return (
            <Product>
              <img src={images[index]} key={item.image} alt="" />
              <div>
                <p>{item.price}</p>

                <Colors>
                  {item.colors.map((color) => (
                    <Button key={color.cod} color={color.cod}></Button>
                  ))}
                </Colors>
              </div>
            </Product>
          );
        })}
      </Shelf>

      <Slide>
        <div>
          <MdKeyboardArrowLeft size={24} color="#2a5a75" />
        </div>
        <p>1 de 3</p>
        <div>
          <MdKeyboardArrowRight size={24} color="#2a5a75" />
        </div>
      </Slide>
    </Container>
  );
}

export default ProductShelf;

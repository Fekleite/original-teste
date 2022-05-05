import React from "react";
import { MdClose, MdAdd, MdRemove } from "react-icons/md";

import {
  Container,
  Content,
  Close,
  Title,
  Products,
  Product,
  Info,
  Amount,
  Controll,
  Image,
  Promotion,
  Total,
} from "./styles";

import prod03 from "../../assets/prod03.png";
import prod04 from "../../assets/prod04.png";
import prod02 from "../../assets/prod02.png";
import prod01 from "../../assets/prod01.png";

function Minicart({ visibility, close, products }) {
  const images = [prod02, prod01, prod03, prod04, prod02];

  return (
    <Container visibility={visibility}>
      <Content>
        <Close onClick={close(!visibility)}>
          <MdClose size={24} color="#5F75AA" />
        </Close>

        <Title>
          <h2>Sacola</h2>
          <p>5 itens</p>
        </Title>

        <Products>
          {products.map((product, index) => {
            return (
              <Product>
                <Image>
                  <img src={images[index]} alt="" />
                  <Info>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                  </Info>
                </Image>

                <Controll>
                  <Amount>
                    <MdRemove size={16} color="#AEB6C1" />
                    <span>01</span>
                    <MdAdd size={16} color="#AEB6C1" />
                  </Amount>

                  <MdClose size={16} color="#CCCCCC" />
                </Controll>
              </Product>
            );
          })}
        </Products>

        <Promotion>
          <p>
            Faltam R$ xx,xx para você <strong>Ganhar Frete Grátis</strong>
          </p>
        </Promotion>

        <Total>
          <div>
            <strong>Total: R$ 149,00</strong>
            <p>até 3x de R$ 49,90 sem juros</p>
          </div>

          <button onClick={close(!visibility)}>Finalizar compra</button>
        </Total>
      </Content>
    </Container>
  );
}

export default Minicart;

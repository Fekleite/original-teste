import React from "react";
import { MdClose } from "react-icons/md";

import {
  Container,
  Content,
  ImageContainer,
  Confirm,
  Link,
  Close,
} from "./styles";

import prod02 from "../../assets/prod02.png";

function Lightbox({ visibility, close }) {
  return (
    <Container visibility={visibility}>
      <Content>
        <Close onClick={close(!visibility)}>
          <MdClose size={24} color="#5F75AA" />
        </Close>

        <ImageContainer>
          <img src={prod02} alt="" />
        </ImageContainer>

        <h2>Produto adicionado com sucesso!</h2>

        <Confirm onClick={close(!visibility)}>Finalizar compra</Confirm>

        <Link onClick={close(!visibility)}>Continuar Comprando </Link>
      </Content>
    </Container>
  );
}

export default Lightbox;

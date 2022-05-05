import React from "react";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";

import logoLight from "../../assets/logo-light.svg";
import ebit from "../../assets/selo-ebit.png";
import vtex from "../../assets/vtex-pci-200.png";

import {
  Container,
  Circle,
  InputItem,
  Line,
  Content,
  Copy,
  Social,
  Links,
  Stamps,
  Item,
} from "./styles";

function Footer() {
  return (
    <Container>
      <Line />
      <Content>
        <Social>
          <FaFacebookF size={26} color="#DE8F75" />
          <FaInstagram size={32} color="#DE8F75" />
          <FaPinterest size={28} color="#DE8F75" />
        </Social>

        <Links>
          <Stamps>
            <img src={vtex} alt="" />
            <img src={ebit} alt="" />
          </Stamps>

          <Item>
            <h4>Institucional</h4>
            <ul>
              <li>A Marca</li>
              <li>Lojas</li>
              <li>Contato</li>
            </ul>
          </Item>

          <Item>
            <h4>Informações</h4>
            <ul>
              <li>Formas de Pagamento</li>
              <li>Trocas e Devoluções</li>
              <li>Cuidados Com o Produto</li>
            </ul>
          </Item>

          <Item>
            <h4>Conheça</h4>
            <ul>
              <li>Franquias e Multimarcas</li>
              <li>Trabalhe com a Gente</li>
              <li>Procon-RJ</li>
            </ul>
          </Item>
        </Links>
      </Content>
      <Copy>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          molestie massa in nunc condimentum, vel placerat lacus pulvinar.
          Suspendisse vel nisl eu tortor feugiat tempus vel in tortor. Nunc
          semper leo nec tellus gravida faucibus.
        </p>

        <img src={logoLight} alt="" />
      </Copy>
      <Circle>
        <h3>Assine nossa news</h3>
        <InputItem>
          <label>Nome</label>
          <input type="text" value="Renata" />
        </InputItem>

        <InputItem>
          <label>Email</label>
          <input type="text" />
        </InputItem>

        <button>Enviar</button>
      </Circle>
    </Container>
  );
}

export default Footer;

import React, { useState } from "react";

import {
  Container,
  HeaderImg,
  Navbar,
  Register,
  NavLinks,
  UserActions,
} from "./styles";

import logo from "../../assets/logo.svg";
import iconSearch from "../../assets/ic_search.svg";
import iconShoppingCart from "../../assets/ic_shopping_cart.svg";

import Minicart from "../../components/Minicart";

import data from "../../data/data.json";

function Header() {
  const [visibility, setVisibility] = useState(false);

  function handleMinicart() {
    setVisibility(!visibility);
  }

  function handleClose(v) {
    setVisibility(!v);
  }

  return (
    <>
      <Container>
        <HeaderImg>
          <img src={logo} alt="Logomarca da Original.io" />
        </HeaderImg>

        <Navbar>
          <Register>
            <a href="/">Entrar</a>
            <span>|</span>
            <a href="/">Cadastrar-se</a>
          </Register>

          <NavLinks>
            <a href="/">Sapatos</a>
            <a href="/">Bolsas</a>
            <a href="/">Acessórios</a>
            <a href="/">Off</a>
          </NavLinks>

          <UserActions>
            <div>
              <img src={iconSearch} alt="" />
              <p>Busca</p>
            </div>

            <div>
              <img onClick={handleMinicart} src={iconShoppingCart} alt="" />
              <p>0</p>
            </div>
          </UserActions>
        </Navbar>
      </Container>

      <Minicart
        visibility={visibility}
        close={(v) => handleClose}
        products={data.cart}
      />
    </>
  );
}

export default Header;

import React, { useState } from "react";

import {
  Container,
  Prices,
  Colors,
  SizeContainer,
  TitleSize,
  Sizes,
  Description,
  Button,
  Buy,
} from "./styles";

import Lightbox from "../../components/Lightbox";

function InfoProducts({ products }) {
  const [sizeProduct, setSizeProduct] = useState("escolha uma cor");
  const [colorProduct, setColorProduct] = useState("escolha um tamanho");
  const [visibility, setVisibility] = useState(false);

  function handleSize(size) {
    setSizeProduct(size);
  }

  function handleColor(color) {
    setColorProduct(color);
  }

  function handleLightbox() {
    setVisibility(!visibility);
  }

  function handleClose(v) {
    setVisibility(!v);
  }

  return (
    <>
      <Container>
        {products.map((product, index) => {
          return (
            <>
              <h1>{product.name}</h1>
              <p>{product.cod}</p>

              <Prices>
                <div>
                  <p>{product.price} </p> | <p>{product.price_sale}</p>
                </div>
                <span>Ou {product.installments} </span>
              </Prices>

              <h3>
                Cor: <strong>({colorProduct})</strong>
              </h3>
              <Colors>
                {product.colors.map((color, index) => (
                  <Button
                    onClick={() => handleColor(color.name)}
                    key={index}
                    color={color.cod}
                  ></Button>
                ))}
              </Colors>

              <SizeContainer>
                <TitleSize>
                  <h3>
                    Tamanho: <strong>({sizeProduct})</strong>
                  </h3>

                  <p>Guia de medidas</p>
                </TitleSize>

                <Sizes>
                  {product.sizes.map((size, index) => (
                    <button onClick={() => handleSize(size)} key={index}>
                      {size}
                    </button>
                  ))}
                </Sizes>
              </SizeContainer>

              <Buy onClick={handleLightbox}>Adicionar à sacola</Buy>

              <Description>{product.description}</Description>
            </>
          );
        })}
      </Container>

      <Lightbox visibility={visibility} close={(v) => handleClose} />
    </>
  );
}

export default InfoProducts;

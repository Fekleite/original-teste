import React, { useState, useEffect } from "react";

import { Container, PhotoGrid } from "./styles";

import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";
import Photo from "../../components/Photo";
import InfoProducts from "../../components/InfoProducts";
import ProductShelf from "../../components/ProductShelf";
import Footer from "../../components/Footer";

import data from "../../data/data.json";

function Product() {
  const [products, setProducts] = useState([]);
  const [shelf, setShelf] = useState([]);

  useEffect(() => {
    setProducts(data.products);
    setShelf(data.shelf);
  }, []);

  return (
    <Container>
      <Header />
      <BreadCrumb />
      <PhotoGrid>
        <Photo />
        <InfoProducts products={products} />
      </PhotoGrid>

      <ProductShelf shelf={shelf} />

      <Footer />
    </Container>
  );
}

export default Product;

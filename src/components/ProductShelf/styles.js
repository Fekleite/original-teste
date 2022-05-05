import styled from "styled-components";

export const Container = styled.div`
  margin: 0 4rem;

  h2 {
    font-weight: normal;
    font-size: 2.6rem;
    line-height: 3.8rem;
    text-align: center;
    text-transform: uppercase;
    color: #de8f75;
    margin-bottom: 18px;
  }
`;

export const Shelf = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  margin-bottom: 2rem;
`;

export const Product = styled.div`
  width: 96%;

  img {
    width: 100%;
    margin-bottom: 6px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Colors = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: none;
  margin-left: 0.7rem;
`;

export const Slide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  div {
    width: 35px;
    height: 35px;
    border: 2px solid #2a5a75;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  p {
    font-family: "Open Sans", sans-serif;
    margin: 0 3.2rem;
    font-size: 1.4rem;
    line-height: 2.3rem;
    color: #2a5a75;
  }
`;

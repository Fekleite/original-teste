import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.visibility ? "flex" : "none")};
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba(32, 32, 32, 0.6);
`;

export const Content = styled.div`
  height: 100%;
  width: 36%;
  background: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px;
  padding-right: 16px;
`;

export const Close = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Title = styled.div`
  padding-left: 1.2rem;
  padding-bottom: 1.2rem;
  margin-right: 1.6rem;
  color: black;
  border-bottom: 1px solid #e3e3e3;

  h2 {
    font-weight: normal;
    font-size: 2.2rem;
    line-height: 3.2rem;
    text-transform: uppercase;
    color: #de8f75;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: #aeb6c1;
  }
`;

export const Products = styled.div`
  overflow-y: scroll;
  height: 40rem;
  margin-top: 2rem;
  padding-top: 1rem;

  &::-webkit-scrollbar {
    width: 0.6rem;
    background-color: #e2e2e2;
  }

  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: #e2e2e2;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #de8f75;
  }
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 3.6rem;
`;

export const Image = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 25%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #202020;
  }

  p {
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #000000;
    margin-top: 0.4rem;
  }
`;

export const Controll = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Amount = styled.div`
  display: flex;

  span {
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: #5f75aa;
    margin: 0 16px;
  }
`;

export const Promotion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 80px;
  left: 0;
  width: 100%;
  height: 40px;
  background: #aeb6c1;

  p {
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 2.3rem;
    color: #ffffff;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #e3e3e3;

  div {
    strong {
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 2.3rem;
      color: #202020;
    }

    p {
      font-weight: normal;
      font-size: 1.2rem;
      line-height: 1.8rem;
      color: #000000;
    }
  }

  button {
    background: #32917b;
    border-radius: 3px;
    border: none;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    padding: 0.8rem 4rem;
    cursor: pointer;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  height: fit-content;
  padding: 2rem;
  border: 2px solid #d2e1df;
  border-radius: 3px;
  margin-top: 1.1rem;

  h1 {
    font-weight: bold;
    font-size: 2.6rem;
    line-height: 100%;

    display: flex;
    align-items: center;
    text-transform: uppercase;

    color: #202020;
  }

  > p {
    margin-top: 0.6rem;
    margin-bottom: 2.4rem;
    font-size: 1.4rem;
    line-height: 2rem;

    color: #202020;
  }

  h3 {
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #202020;
    margin-bottom: 1.6rem;

    strong {
      margin-left: 0.8rem;
      font-weight: normal;
      color: #5f75aa;
    }
  }

  button {
    cursor: pointer;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--color-sucess);
  border-radius: 3px;
  border: none;
  color: #fff;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.6rem;
  text-transform: uppercase;
  padding: 16px 0;
  margin-bottom: 2.4rem;
`;

export const Prices = styled.div`
  margin-bottom: 5.6rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    color: #e35442;

    p {
      margin-right: 0.4rem;
      font-weight: normal;
      font-size: 1.4rem;
      line-height: 2rem;
      text-decoration: line-through;
      color: #e35442;
    }

    p + p {
      margin-left: 0.4rem;
      font-weight: bold;
      font-size: 2rem;
      color: var(--color-gray-text3);
      text-decoration: none;
    }
  }

  span {
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: var(--color-gray-complement2);
  }
`;

export const Colors = styled.div`
  margin-bottom: 2.4rem;
`;

export const Button = styled.button`
  box-sizing: content-box;
  width: 22px;
  height: 22px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: 2px solid #fff;
  margin-right: 1.2rem;

  &:focus {
    border: 2px solid #de8f75;
  }
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const TitleSize = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2rem;
    text-decoration: underline;
    color: var(--color-primary);
  }
`;

export const Sizes = styled.div`
  margin-bottom: 5.6rem;
  display: flex;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    margin-right: 0.4rem;
    color: #5f75aa;
    font-size: 1.4rem;
  }

  button:focus {
    background: var(--color-primary);
    border: 1px solid #ebebeb;
    border-radius: 2px;
    color: #fff;
    font-weight: bold;
  }
`;

export const Description = styled.div`
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 200%;
  color: #202020;
`;

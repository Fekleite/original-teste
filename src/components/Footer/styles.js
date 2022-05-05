import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const Line = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 104px;
  border-bottom: 2px solid #aeb6c1;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 104px;
  height: 229px;
`;

export const Circle = styled.div`
  position: absolute;
  width: 32rem;
  height: 32rem;
  right: 0px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #aeb6c1;
  margin: 0 3.2rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.6rem;
    text-transform: uppercase;
    color: #202020;
    margin-bottom: 1rem;
  }

  button {
    padding: 16px 32px;
    background: #de8f75;
    border-radius: 3px;
    font-family: "Open Sans", sans-serif;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2.3rem;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.7rem;

  label {
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: rgba(32, 32, 32, 0.5);
  }

  input {
    padding-bottom: 4px;
    border: none;
    outline: none;
    border-bottom: 2px solid #aeb6c1;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #202020;
  }
`;

export const Copy = styled.div`
  position: absolute;
  width: 100%;
  top: calc(104px + 229px);
  width: 100%;
  height: 60px;
  background: #de8f75;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.2rem;
  padding: 0 10rem 0 12rem;

  p {
    width: 720px;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #ffffff;
  }
`;

export const Social = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 0 7rem;
`;

export const Links = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.8rem 0 0 7rem;
`;

export const Stamps = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.div`
  h4 {
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 2rem;
    text-transform: uppercase;
    color: #aeb6c1;
    margin-bottom: 0.4rem;
  }

  ul {
    li {
      list-style: none;
      font-size: 1.4rem;
      line-height: 2.8rem;
      color: #202020;
      cursor: pointer;
      margin-bottom: 0.4rem;
    }
  }
`;

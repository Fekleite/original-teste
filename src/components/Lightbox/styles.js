import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.visibility ? "flex" : "none")};
  justify-content: center;
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
  height: 90%;
  width: 33%;
  background: #ffffff;
  border-radius: 3px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    width: 64%;
    font-weight: normal;
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;
    text-transform: uppercase;
    margin-top: 1rem;
    color: #de8f75;
  }
`;

export const Close = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  margin-top: 4.8rem;
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 64%;
  }
`;

export const Confirm = styled.button`
  width: 64%;
  background: var(--color-sucess);
  border-radius: 3px;
  border: none;
  color: #fff;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.6rem;
  text-transform: uppercase;
  padding: 12px 0;
  margin-top: 1rem;
  cursor: pointer;
`;

export const Link = styled.a`
  font-size: 1.4rem;
  line-height: 2rem;
  margin-top: 1rem;
  text-decoration-line: underline;
  color: #aeb6c1;
  cursor: pointer;
`;

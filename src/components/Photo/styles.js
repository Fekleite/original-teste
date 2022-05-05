import styled from "styled-components";
import prod02 from "../../assets/prod02.png";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 8.2rem 1fr;
  gap: 5.6rem;
  margin-top: 1.1rem;

  > img {
    width: 90%;
  }
`;

export const Gallery = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: normal;
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 1.6rem;
    color: var(--color-primary);
  }

  #primary {
    opacity: 1;
    margin-top: 0.9rem;
  }

  img {
    width: 100%;
    margin-bottom: 0.9rem;
    opacity: 0.5;
  }
`;

export const Video = styled.div`
  width: 100%;
  height: 45px;
  margin-bottom: 0.8rem;
  position: relative;

  &::before {
    content: "";
    background-image: url(${prod02});
    background-position: center;
    background-size: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
  }

  img {
    position: absolute;
    height: 100%;
    opacity: 1;
  }
`;

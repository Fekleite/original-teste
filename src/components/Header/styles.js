import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const HeaderImg = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-lighter);

  img {
    margin-left: 4rem;
  }
`;

export const Navbar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  border-bottom: 1px solid rgba(104, 104, 104, 0.4);
`;

export const Register = styled.div`
  a {
    color: var(--color-gray-text3);
    font-size: 1.2rem;
    text-decoration: none;
  }

  span {
    margin: 0 0.8rem;
  }
`;

export const NavLinks = styled.nav`
  a {
    color: var(--color-gray-text3);
    font-size: 1.4rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  > a {
    margin-right: 4rem;
  }

  a + a {
    margin-right: 4rem;
  }
`;

export const UserActions = styled.div`
  display: flex;

  div:first-child {
    margin-right: 3rem;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid var(--color-gray-lighter);

    p {
      margin-left: 1.7rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: var(--color-gray-text3);

    p {
      margin-left: 0.4rem;
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../fonts/GlobalStyles'; // Certifique-se de ajustar o caminho do arquivo conforme necessário

// Defina seu estilo para o header usando styled-components
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 20px;
`;

const Logo = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 24px;
  margin: 0;
`;

const NavLinks = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;
  }

  li {
    font-size: 18px;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

// Crie o componente de header
function Header() {
  return (
    <>
      <GlobalStyles />
      <HeaderWrapper>
        <Logo>PASSBY</Logo>
        <NavLinks>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Produto</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </NavLinks>
      </HeaderWrapper>
    </>
  );
}

export default Header;
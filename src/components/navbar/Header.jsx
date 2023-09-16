import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../fonts/GlobalStyles'; // Certifique-se de ajustar o caminho do arquivo conforme necessário


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
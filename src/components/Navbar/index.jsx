import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SvgLogo } from '../Logo';
import { MenuMobile } from '../Menu';
import { useState } from 'react';
export function Navbar() {
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  return (
    <>
      <NavContainer>
        <Logo />
        <MenuMobile />
        <Nav>
          <NavLinks>Sobre</NavLinks>
          {/* <NavLinks>Experiências</NavLinks> */}
          <NavLinks>Projetos</NavLinks>
          <NavLinks>Contato</NavLinks>

          <Linkbtn to="/resumo">Curriculo</Linkbtn>
        </Nav>
      </NavContainer>
    </>
  );
}

const Logo = styled(SvgLogo)`
  display: block;
  margin: auto;
  @media only screen and (max-width: 960px) {
    stroke: ${(props) => (props.stroke ? '#f53d53' : '#fff')};
  }
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 960px) {
    display: none;
    text-align: center;
  }
`;

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.5em;
`;

const NavLinks = styled.li`
  padding: 0.4em 1.5em;
  font-weight: 800;
  list-style: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Linkbtn = styled(Link)`
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  width: 110px;
  height: 35px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 30px;
  background-color: #333;
  border: none;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    transform: translateY(-5px);
  }
  text-decoration: none;
  color: unset;
`;

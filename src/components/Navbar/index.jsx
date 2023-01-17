import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SvgLogo } from '../Logo';
import { Link as Linkto, animateScroll as scroll } from 'react-scroll';
// import { MenuMobile } from '../Menu';

export function Navbar() {
  return (
    <>
      <NavContainer>
        <Logo />
        <Nav>
          <NavLinks to="sobre" spy={true} smooth={true} duration={500}>
            Sobre
          </NavLinks>
          {/* <NavLinks>Experiências</NavLinks> */}
          <NavLinks to="projetos" spy={true} smooth={true} duration={500}>
            Projetos
          </NavLinks>
          <NavLinks to="contato" spy={true} smooth={true} duration={500}>
            Contato
          </NavLinks>
          <Linkbtn to="/resumo">Curriculo</Linkbtn>
        </Nav>
      </NavContainer>
    </>
  );
}

const Logo = styled(SvgLogo)`
  margin: auto;
  @media only screen and (max-width: 960px) {
    stroke: ${(props) => (props.stroke ? '#f53d53' : '#fff')};
  }
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 960px) {
    display: none;
    text-align: center;
  }
`;

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 2em;
`;

const NavLinks = styled(Linkto)`
  margin: 0.4em 1.5em;
  text-decoration: none;
  color: unset;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Linkbtn = styled(Link)`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 30px;
  background-color: #f53d53;
  border: none;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    transform: translateY(-5px);
  }
  text-decoration: none;
  color: unset;
`;

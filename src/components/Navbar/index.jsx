import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SvgLogo } from '../Logo';
export const Navbar = () => {
  return (
    <Navigation>
      <SvgLogo />
      <NavContainer>
        <NavLinks>Sobre</NavLinks>
        {/* <NavLinks>Experiências</NavLinks> */}
        <NavLinks>Projetos</NavLinks>
        <NavLinks>Contato</NavLinks>
        <Btn>
          <Linkbtn to="/resumo">Curriculo</Linkbtn>
        </Btn>
      </NavContainer>
    </Navigation>
  );
};

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 30%,
    rgba(245, 61, 83, 1) 20%
  );
`;

const NavContainer = styled.ul`
  display: flex;
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

const Btn = styled.button`
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
    transform: scale(0.95);
  }
`;

const Linkbtn = styled(Link)`
  text-decoration: none;
  color: unset;
`;

import styled from 'styled-components';

export const Navbar = () => {
  return (
    <Navigation>
      <h3>Logo</h3>
      <NavContainer>
        <NavLinks>Sobre</NavLinks>
        <NavLinks>Experiências</NavLinks>
        <NavLinks>Projetos</NavLinks>
        <NavLinks>Contato</NavLinks>
        <Curriculum>Resumo</Curriculum>
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
  transition: all 0.4s;

  &:hover {
    opacity: 0.8;
  }
`;

const Curriculum = styled.button`
  margin: auto;
  padding: 8px 10px;
  background-color: #020024;
  font-weight: 800;
  border: none;
  border-radius: 10px;

  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    opacity: 0.8;
  }
`;

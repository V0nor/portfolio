import styled from 'styled-components';
import { SocialBar } from '../SocialBar';
import { About } from '../About';
import { Experience } from '../Experience';
import { Projects } from '../Projects';
export const Home = () => {
  return (
    <>
      <Navbar>
        <h3>Logo</h3>
        <NavContainer>
          <NavLinks>1. Sobre</NavLinks>
          <NavLinks>2. Experiências</NavLinks>
          <NavLinks>3. Projetos</NavLinks>
          <NavLinks>4. Contato</NavLinks>
          <button>Resumo</button>
        </NavContainer>
      </Navbar>
      <Container>
        <SocialBar />
        <p>Oi, meu nome é</p>
        <Nome> Victor de Carli.</Nome>
        <Bio>E eu sou desenvolvedor Front-end</Bio>
        <Desc>
          Sou um especialista em construir e elaborar interfaces usando React,
          com experiências digitais excepcionais. Atualmente, estou focado em
          melhorar minhas habilidades atuais e aprender novas.
        </Desc>
        <button>Meu Linkedin!</button>
      </Container>
      <About />
      <Experience />
      <Projects />
    </>
  );
};
const Navbar = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2em;
  justify-content: space-between;
`;

const NavContainer = styled.ul`
  display: flex;
  padding: 0.5em;
`;

const NavLinks = styled.li`
  padding: 0.4em 1.5em;
  list-style: none;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  margin-top: 3em;
  margin-bottom: 15em;
`;

const Nome = styled.h2`
  font-size: 5em;
  color: orangered;
  line-height: 1;
  margin: 0;
`;
const Bio = styled.h2`
  font-size: 5em;
  max-width: 1000px;
  margin: 0;
  line-height: 1;
  color: #f2f2f266;
`;

const Desc = styled.p`
  font-size: 1.2em;
  max-width: 600px;
`;

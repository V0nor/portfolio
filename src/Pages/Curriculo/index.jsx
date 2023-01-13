import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Curriculo = () => {
  return (
    <>
      <Header>
        <Nome>VICTOR DE CARLI</Nome>
        <SubTitle>Desenvolvedor Front-end Júnior</SubTitle>

        <Links href="mailto:vonorvictor@gmail.com">vonorvictor@gmail.com</Links>

        <Links href="https://www.linkedin.com/in/devvictor/">Linkedin</Links>
        <Links href="https://github.com/V0nor">Github</Links>
        <Links href="https://v0nor.github.io/">v0nor.github.io</Links>
      </Header>
      <BodyResume>
        <Container>
          <Title>Objetivo</Title>
          <p>
            Having spent my life in New York's Jewish community, I have used my
            time to bring visually aesthetic, responsive, and accessible
            websites to my community. After cutting my teeth at Spherical, I
            have a proven history of a strong ethics and passion for web design.
            Excited to pursue new companies to grow my skills while facilitating
            the empowerment and vocalization of marginalized communities.
          </p>
        </Container>
        <Container>
          <Title>Formação</Title>
          <p>
            Having spent my life in New York's Jewish community, I have used my
            time to bring visually aesthetic, responsive, and accessible
            websites to my community. After cutting my teeth at Spherical, I
            have a proven history of a strong ethics and passion for web design.
            Excited to pursue new companies to grow my skills while facilitating
            the empowerment and vocalization of marginalized communities.
          </p>
        </Container>
        <Container>
          <Title>Experiências</Title>
          <p>
            Having spent my life in New York's Jewish community, I have used my
            time to bring visually aesthetic, responsive, and accessible
            websites to my community. After cutting my teeth at Spherical, I
            have a proven history of a strong ethics and passion for web design.
            Excited to pursue new companies to grow my skills while facilitating
            the empowerment and vocalization of marginalized communities.
          </p>
        </Container>
        <Container>
          <Title>Projetos</Title>
          <p>
            Having spent my life in New York's Jewish community, I have used my
            time to bring visually aesthetic, responsive, and accessible
            websites to my community. After cutting my teeth at Spherical, I
            have a proven history of a strong ethics and passion for web design.
            Excited to pursue new companies to grow my skills while facilitating
            the empowerment and vocalization of marginalized communities.
          </p>
        </Container>
        <Container>
          <Title>Cursos Relevantes</Title>
          <Lista>
            <li>Lógica de Programação</li>
            <li>Desenvolvedor web</li>
            <li>Introdução ao React.js</li>
            <li>Introdução ao Next.js</li>
          </Lista>
        </Container>
        <Container>
          <Title>SKILLS</Title>
          <Lista>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>Styled Components</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next</li>
            <li>Vite</li>
            <li>Git</li>
          </Lista>
        </Container>
      </BodyResume>
      <BackToHome to="../">Página Inicial</BackToHome>
    </>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  align-items: center;
  margin: auto;
  padding: 0 1em;
`;

const Nome = styled.h2`
  font-size: 3em;
  line-height: 0;
`;

const SubTitle = styled.h3`
  margin: 0;
  font-size: 1.4em;
  color: red;
  line-height: 1em;
`;

const BodyResume = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

const Container = styled(Header)`
  width: 400px;
  margin: auto;
  height: auto;
`;

const Links = styled.a`
  padding: 5px;
  color: unset;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.h3`
  font-size: 1.5em;
`;

const Lista = styled.ul`
  display: flex;
  text-align: center;
  list-style-type: none;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const BackToHome = styled(Link)`
  display: block;
  margin: 1em auto;
  margin-bottom: 1em;
  font-size: 1.2em;
  text-align: center;
  text-decoration: none;
  line-height: 3em;
  color: #fff;
  width: 150px;
  border-radius: 30px;
  background-color: red;
`;

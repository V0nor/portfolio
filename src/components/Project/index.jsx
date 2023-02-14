import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Backdrop from '../../assets/imgs/scattered-forcefields.png';

export const Project = () => {
  return (
    <Container id="projetos">
      <Title>Projetos</Title>
      <Desc>Desenvolvidos seguindo as normas de design responsivo e otimização da perfomance</Desc>
      <ContainerProject>
      
        <Link to="/projetos">
        <Projetos>
        <Text>Calculadora de IMC</Text>
        </Projetos>
        </Link>

        <Link to="/projetos">
        <Projetos>
        <Text>Landing Page Netflix</Text>
        </Projetos>
        </Link>

        <Link to="/projetos">
        <Projetos>
        <Text>Todo List</Text>
        </Projetos>
        </Link>

      </ContainerProject>
    </Container>
  );
};

const Title = styled.h2`
  font-size: 2em;
  text-align: center;
`;
const Desc = styled.p`
  font-size: 1em;
  text-align: center;
`;

const Container = styled.div`
  max-width: 950px;
  height: auto;
  margin: auto;
  background-color: #020024;
`;

const ContainerProject = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 3em auto;

`;

const Projetos = styled.div`
  width: 250px;
  height: 150px;
  border-radius: 15px;
  background-color: #f53d53;
  background-image: url(${Backdrop});
  background-size: contain;
  background-position: center;
  cursor: pointer;
  transition: all .4s ease-out;

  &:hover {
    background-position: left;
    opacity: 1;
  }

`;

const Text = styled.div`
opacity: 0;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.2em;
text-align: center;
transition: all .4s;
width: 100%;
height: 100%;

${Projetos}:hover & {
  opacity: 1;
}
`
export default Project
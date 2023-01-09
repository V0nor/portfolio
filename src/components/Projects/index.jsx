import styled from 'styled-components';
import Backdrop from '../../assets/imgs/scattered-forcefields.png';

export const Projects = () => {
  return (
    <Container>
      <Title>Projetos</Title>
      <ContainerProject>
        <Projetos>
          <Aviso>EM BREVE</Aviso>
        </Projetos>
        <Projetos>
          <Aviso>EM BREVE</Aviso>
        </Projetos>
        <Projetos>
          <Aviso>EM BREVE</Aviso>
        </Projetos>
      </ContainerProject>
      {/* <GithubRepositores />git */}
    </Container>
  );
};

const Title = styled.h2`
  font-size: 2em;
  /* padding-top: 2em; */
  text-align: center;
`;

const Container = styled.div`
  height: 70vh;
  margin: auto;
  background-color: #020024;
`;

const ContainerProject = styled.div`
  display: flex;
  justify-content: center;
  margin: 3em auto;
`;

const Projetos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  line-height: 1;
  margin: 1em;
  width: 250px;
  height: 150px;
  border-radius: 15px;
  background-color: #f53d53;
  background-image: url(${Backdrop});
  background-size: contain;
  background-position: center center;
  overflow: hidden;
`;

const Aviso = styled.p`
  display: flex;
  justify-content: center;
  padding: 6px;
  width: 100%;
  background-color: #020024;
  transform: rotate(45deg);
`;

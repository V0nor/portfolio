import styled from 'styled-components';

export const Projects = () => {
  return (
    <Container>
      <Desc>
        <h2>03. Algumas coisas que construí</h2>
        Projetos
      </Desc>
      {/* <GithubRepositores />git */}
    </Container>
  );
};

const Container = styled.div`
  margin: 3em auto;
  max-width: 1000px;
  background-color: red;
`;

const Desc = styled.div`
  font-size: 1.2em;
  line-height: 1;
  margin: 1em;
  max-width: 600px;
`;

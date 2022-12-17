import styled from 'styled-components';

export const Experience = () => {
  return (
    <Container>
      <Desc>
        <h2>02. Onde já trabalhei</h2>
        <p>Em busca da primeira oportunidade!</p>
        <p>Mais informações em breve...</p>
      </Desc>
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

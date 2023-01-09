import styled from 'styled-components';

export const Experience = () => {
  return (
    <Container>
      <Desc>
        <AvisoContainer>
          <h2>Onde já trabalhei</h2>
          <Aviso>Em breve!</Aviso>
        </AvisoContainer>
      </Desc>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;

  margin: auto;
  background: rgba(245, 61, 83, 1);
`;
const Desc = styled.div`
  font-size: 1.2em;
  line-height: 1;
`;

const Aviso = styled.span`
  padding: 15px;
  background-color: #000;
  border-radius: 15px;
`;

const AvisoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 400px;
  height: 200px;
  background-color: blue;
  border-radius: 15px;
`;

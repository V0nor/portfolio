import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Curriculo = () => {
  return (
    <Container>
      <Title>Curriculo</Title>
      <Link to="../">Voltar</Link>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  margin: auto;
`;
const Title = styled.h2`
  text-align: center;
`;

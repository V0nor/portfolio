import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const errorPage = () => {
  return (
    <Container>
      <Logo>
        <Text>Ocorreu um Erro!</Text>
        <LinkStyled to="/">Página Inicial</LinkStyled>
      </Logo>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: red;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #333;
`;

const LinkStyled = styled(Link)`
  color: unset;
  transition: all 0.4s;

  &:hover {
    color: red;
  }
`;
const Text = styled.h2`
  max-width: 200px;
  text-align: center;
  font-size: 2em;
  font-weight: 700;
  color: red;
`;

export default errorPage;

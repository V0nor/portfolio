import styled from 'styled-components';
import { ContactForm } from './Form';
export const Contact = () => {
  return (
    <Container id="contato">
      <Title>Entre em Contato</Title>
      <ContactForm />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 5em;
  color: #000;
  background: #fff;
`;

const Title = styled.h2`
  font-size: 2em;
`;

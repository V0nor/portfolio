import styled from 'styled-components';
import { ContactForm } from './Form';
export const Contact = () => {
  return (
    <Container id="contato">
      <Title>Entre em Contato por Email</Title>
      <ContactForm />
      <Title>Ou pelo Whatsapp</Title>
      <Button href="https://wa.me/5569992326914? text=Olá!%20Vi%20o%20seu%20portfólio%20e%20gostei%20muito%20do%20seu%20trabalho.%20Você%20poderia%20me%20dar%20mais%20informações%20sobre%20os%20serviços%20que%20você%20oferece?%20">Fale Comigo!</Button>
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
  text-align: center;
`;

const Button = styled.a`
  padding: 20px 20px;
  font-size: 1.3em;
  font-weight: 700;
  color: #fff;
  border-radius: 30px;
  border: none;
  background-color:black;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    transform: scale(0.95);
    opacity: 0.8;
  }
`;

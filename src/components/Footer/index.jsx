import styled from 'styled-components';
import {FaDev} from 'react-icons/fa'
export const Footer = () => {
  return (
    <Container>
    <Title>Portfólio <Icon/></Title>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
`;

const Icon = styled(FaDev)`
font-size: 45px;
margin: .15em;
color:#f53d53;
`
const Title = styled.h1`
display: flex;
align-items: center;
justify-content: center;
padding: 1em;
margin: 0;
color:#f53d53;`

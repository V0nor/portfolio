import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const calcIMC = () => {
    return (
        <Container>
            <Title>Calculadora de IMC</Title>
            <Projetos>
                <h1>Calculadora de IMC</h1>
                <Desc>Permite aos usuários calcular seu IMC com base em sua altura e peso. Utilizei HTML, CSS e JavaScript para criar uma interface intuitiva e fácil de usar. O cálculo do IMC é realizado dinamicamente com base nas informações do usuário, e a classificação do IMC é exibida de forma clara e precisa.</Desc>
            </Projetos>
            <Link to="/">Página Inicial</Link>
        </Container>
    );
};
const Container = styled.div`
display:block;`

const Projetos = styled.div`
display: block;
/* Centering the element. */

width: 400px;
text-align: center;
background-color:blue;`

const Title = styled.h2`
  font-size: 2em;
  text-align: center;
`;
const Desc = styled.p`
  font-size: 1;
  max-width: 400px;
  margin: auto;
  text-align: center;
`;


export default calcIMC;
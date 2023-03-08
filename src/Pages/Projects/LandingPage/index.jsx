import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RiHome4Line } from 'react-icons/ri'

export const LandingPage = () => {
    return (
        <Container>
            <Title>
                Encontre o Livro!
            </Title>

            <Desc>
                Ficar e permanecer saudável requer uma combinação de equilíbrio mental, exercício e nutrição. O objetivo do aplicativo Calorie Counter é ajudar o usuário a atender às necessidades nutricionais contando calorias para vários alimentos.

                Este aplicativo fornece o número de calorias com base no resultado de uma pesquisa do usuário por um tipo de alimento. Os dados crus de alimentos MyPyramid do Departamento de Agricultura dos EUA serão pesquisados ​​para determinar os valores de calorias.
                <br />
                <br />
                Em resumo, o site tem como objetivo fornecer recursos e
                informações valiosas para ajudar os usuários a melhorar sua
                qualidade de vida e se tornarem mais saudáveis e em forma 💪.
            </Desc>
            <Voltar to="/">
                Voltar para a Página Inicial{' '}
                <RiHome4Line className="icon__home" />
            </Voltar>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    text-align: center;
`
const Voltar = styled(Link)`
    display: flex;
    align-items: center;
    margin: 2em auto;
    padding: 1rem;
    font-size: 1.1em;
    font-weight: 800;
    color: #000;
    background-color: #fff;
    border-radius: 20px;
    transition: all 0.4s;
    &:hover {
        color: #fff;
        background-color: #f53d53;
    }
`
const Desc = styled.p`
    margin: auto;
    padding: 1rem;
    max-width: 85vw;
    font-size: 1em;
    text-align: justify;
    background-color: #f53d53;
    border-radius: 10px;

`
export default LandingPage

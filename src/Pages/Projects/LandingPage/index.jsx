import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RiHome4Line, RiPagesFill } from 'react-icons/ri'
export const LandingPage = () => {
    return (
        <Container>
            <Title>
                Landing Page
                <Icon />
            </Title>

            <Desc>
                Este site fitness oferece uma série de recursos para ajudar os
                usuários a alcançarem seus objetivos de saúde e fitness,
                incluindo exercícios ilustrados, calculadora de IMC,
                temporizador integrado e conteúdo educativo sobre exercícios,
                nutrição e saúde. Além disso, pode oferecer funcionalidades
                adicionais, como um sistema de rastreamento de progresso e
                programas de treinamento personalizados.
                <br />
                <br />
                Em resumo, o site tem como objetivo fornecer recursos e
                informações valiosas para ajudar os usuários a melhorar sua
                qualidade de vida e se tornarem mais saudáveis e em forma 💪.
            </Desc>
            <Voltar exact to="/">
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
    font-size: 2.2em;
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

    .icon__home {
        font-size: 1.2em;
        padding:4px;
    }
`

const Icon = styled(RiPagesFill)`
    font-size: 2em;
    padding: 0.65rem;
`

const Desc = styled.p`
    margin: auto;
    padding: 1rem;
    max-width: 650px;
    font-size: 1em;
    text-align: justify;
    background-color: #f53d53;
    border-radius: 10px;
`

export default LandingPage

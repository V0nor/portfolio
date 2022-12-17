import styled from 'styled-components';
import { BiRightArrow } from 'react-icons/bi';

export const About = () => {
  return (
    <>
      <ContainerDesc>
        <Desc>
          <h2>01. Sobre Mim</h2>
          Sou um especialista em construir e elaborar interfaces usando React,
          com experiências digitais excepcionais. Atualmente, estou focado em
          melhorar minhas habilidades atuais e aprender novas.
          <br />
          <br />
          Sou um especialista em construir e elaborar interfaces usando React,
          com experiências digitais excepcionais. Atualmente, estou focado em
          melhorar minhas habilidades atuais e aprender novas.
          <br />
          <br />
          Sou um especialista em construir e elaborar interfaces usando React,
          com experiências digitais excepcionais. Atualmente, estou focado em
          melhorar minhas habilidades atuais e aprender novas.
          <br />
          <br /> Aqui estão algumas tecnologias com as quais tenho trabalhado
          recentemente:
          <List>
            <ListTech>
              <Icons /> Javascript (ES6+)
            </ListTech>
            <ListTech>
              <Icons /> TypeScript
            </ListTech>
            <ListTech>
              <Icons /> React
            </ListTech>
            <ListTech>
              <Icons /> Next
            </ListTech>
            <ListTech>
              <Icons /> Node.js
            </ListTech>
          </List>
        </Desc>
        <Photo src="../../../imgs/fotoperfil.jpg" />
      </ContainerDesc>
    </>
  );
};

const ContainerDesc = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 3em auto;
  align-items: center;
  max-width: 1000px;
  background-color: red;
`;

const Desc = styled.p`
  font-size: 1.2em;
  line-height: 1;
  max-width: 600px;
`;

const List = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 1fr;
`;

const ListTech = styled.li`
  font-size: 0.7em;
  list-style: none;
  padding: 1em 0;
`;

const Photo = styled.img`
  max-width: 300px;
  min-width: 180px;
  width: 20vw;
  max-height: 340px;
  margin-bottom: 8em;
  border-radius: 10px;
  object-fit: cover;
`;

const Icons = styled(BiRightArrow)`
  font-size: 1.15em;
  margin-bottom: -3px;
`;

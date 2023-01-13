import styled from 'styled-components';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/Ai';
export const SocialBar = () => {
  return (
    <>
      <Container>
        <Icons>
          <AiFillGithub />
        </Icons>
        <Icons>
          <AiFillInstagram />
        </Icons>
        <Icons>
          <AiFillLinkedin />
        </Icons>
      </Container>
      <Title>
        Projetado e construído por{' '}
        <Gitlink href="https://github.com/V0nor">Victor de Carli</Gitlink>
      </Title>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 100%;
  height: 25vh;
`;

const Icons = styled.a`
  font-size: 3em;
  margin: 0 10px;
  padding-top: 1em;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #f53d53;
    transform: translateY(-3px);
  }

  @media only screen and (max-width: 960px) {
    font-size: 2.3em;
  }
`;

const Title = styled.h3`
  font-size: 1.3em;
  max-width: 250px;
  text-align: center;
`;

const Gitlink = styled(Icons)`
  color: unset;
  margin: 0;
  font-size: 1em;
`;

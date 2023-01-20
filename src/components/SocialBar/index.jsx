import styled from 'styled-components';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/Ai';
export const SocialBar = () => {
  return (
    <>
      <Container>
        <Link href="https://github.com/V0nor">
          <AiFillGithub />
        </Link>
        <Link href="https://www.instagram.com/dev.vict0r/">
          <AiFillInstagram />
        </Link>
        <Link href="https://www.linkedin.com/in/dev-victor/">
          <AiFillLinkedin />
        </Link>
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

const Link = styled.a`
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

const Gitlink = styled(Link)`
  color: unset;
  margin: 0;
  font-size: 1em;
`;

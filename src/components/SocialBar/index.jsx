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
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 972px) {
    justify-content: center;
  }
`;

const Link = styled.a`
  font-size: 2.5em;
  cursor: pointer;
  transition: all 0.3s;
  color:#fff;

  &:hover {
    color: rgb(2, 0, 36);
    transform: translateY(-3px);
  }

  @media only screen and (max-width: 960px) {
    font-size: 2.3em;

    &:hover {
      color:rgba(245, 61, 83, 1);
    }
  }
`;
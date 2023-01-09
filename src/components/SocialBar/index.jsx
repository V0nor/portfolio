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
      <h3>
        Projetado e construído por{' '}
        <Gitlink href="https://github.com/V0nor">Victor de Carli</Gitlink>
      </h3>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25vh;
`;

const Icons = styled.a`
  font-size: 3em;
  margin: 0 1em;
  padding-top: 1em;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #f53d53;
    transform: translateY(-3px);
  }
`;

const Gitlink = styled(Icons)`
  color: unset;
  margin: 0;
  font-size: 1em;
`;

import styled from 'styled-components';
import { SocialBar } from '../SocialBar';

export const Footer = () => {
  return (
    <Container>
      <SocialBar />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 1em;
`;

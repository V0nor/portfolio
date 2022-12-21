import styled from 'styled-components';

export const Header = () => {
  return (
    <Container>
      <Bio>Olá, eu me Chamo Victor, e sou programador Front-end</Bio>
      <Image src="../imgs/fotoperfil.jpg" />
    </Container>
  );
};

const Container = styled.div`
  height: 95vh;
  display: flex;
  flex-flow: row-reverse wrap;
  align-items: center;
  justify-content: space-evenly;

  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 30%,
    rgba(245, 61, 83, 1) 20%
  );
`;

const Bio = styled.h2`
  text-align: left;
  font-size: 3.8em;
  max-width: 600px;
  line-height: 1;
  color: #fff;
`;

const Image = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  border: 4px solid #f53d53;
`;

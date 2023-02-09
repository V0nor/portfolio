import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Header = () => {
  return (
    <>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Bio>Olá, eu me Chamo Victor, e sou programador Front-end</Bio>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image src="../imgs/fotoperfil.jpg" />
        </motion.div>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 85vh;
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
  @media only screen and (max-width: 972px) {
    margin-top: 2em;
    background: rgb(2, 0, 36);
    flex-flow: row-reverse wrap;
  }
`;

const Bio = styled.h2`
  text-align: left;
  font-size: 3.8em;
  max-width: 600px;
  line-height: 1;
  color: #fff;
  @media only screen and (max-width: 972px) {
    font-size: 3.2em;
    max-width: 280px;
    text-align: center;
    justify-content: center;
  }
  @media only screen and (max-width: 451px) {
    font-size: 2.4em;
    max-width: 340px;
  }
`;

const Image = styled.img`
  min-width: 200px;
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  border: 4px solid #f53d53;

  @media only screen and (max-width: 490px) {
    width: 250px;
    text-align: center;
    margin: 0;
  }
`;

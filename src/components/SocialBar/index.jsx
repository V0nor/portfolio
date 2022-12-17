import styled from 'styled-components';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillCodepenSquare,
} from 'react-icons/Ai';
export const SocialBar = () => {
  return (
    <>
      <NavFixed>
        <Icons>
          <AiFillGithub />
        </Icons>
        <Icons>
          <AiFillInstagram />
        </Icons>
        <Icons>
          <AiFillLinkedin />
        </Icons>
        <Icons>
          <AiFillCodepenSquare />
        </Icons>
        <Border></Border>
      </NavFixed>
      <EmailFixed>
        <Email>vonorvictor@gmail.com</Email>
        <BorderEmail></BorderEmail>
      </EmailFixed>
    </>
  );
};

const NavFixed = styled.div`
  display: flex;
  position: fixed;
  bottom: 7em;
  margin: 0 3em;
  flex-direction: column;
  line-height: 2.4;
`;

const Border = styled.div`
  position: absolute;
  top: 19em;
  left: -4em;
  rotate: 90deg;
  height: 1.7px;
  width: 150px;
  background-color: #fff;
`;
const BorderEmail = styled.div`
  position: absolute;
  top: 13px;
  right: -8em;
  height: 1.7px;
  width: 150px;
  rotate: 180deg;
  background-color: #fff;
`;

const EmailFixed = styled.a`
  position: fixed;
  right: 0;
  bottom: 10em;
  rotate: 90deg;
  font-size: 1.3em;
`;

const Email = styled.a`
  font-size: 0.8em;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: orangered;
    transform: translateY(-3px);
  }
`;

const Icons = styled.a`
  font-size: 1.5em;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: orangered;
    transform: translateY(-3px);
  }
`;

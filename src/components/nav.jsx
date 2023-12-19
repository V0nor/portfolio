/* eslint-disable react/jsx-no-bind */
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-scroll';
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from 'framer-motion';
import { useState } from 'react';

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  background-color: #0c1d1a;
  width: 100%;
  margin: auto;
  height: 80px;
  color: #fff;
  z-index: 2;
  @media screen and (max-width: 980px) {
    justify-content: center;
    gap: 40px;
  }
  @media screen and (max-width: 590px) {
    display: none;
  }
`;

const NavLinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    opacity: 0.7;
  }
`;

const NavLink = styled.p`
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.4s ease-out;
`;

const SvgIcon = styled.svg`
  fill: #fff;
`;

const NavMobileContainer = styled.div`
  display: flex;
  max-width: 1190px;
  align-items: center;
  margin-bottom: 2em;
  justify-content: flex-end;
`;

const NavMobileButton = styled.button`
  display: none;
  cursor: pointer;
  background-color: #7362f3;
  border: 0;
  border-bottom: ${(props) => (props.isMenuOpen ? 'none' : '3px solid #fff')};
  top: 0;
  z-index: 12;
  padding: 1em 2em;
  width: 100%;
  height: auto;
  position: fixed;
  transition: all 0.4s;

  @media screen and (max-width: 590px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    color: #fff;
    font-family: 'Montserrat';
    font-size: 18px;
  }

  svg {
    opacity: ${(props) => (props.isMenuOpen ? '0' : '1')};
    transition: all 0.4s;
  }
`;

const NavMobileMenu = styled.div`
  transform: translateY(${(props) => (props.isMenuOpen ? '0' : '-900px')});
  display: flex;
  gap: 40px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #7362f3;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  z-index: 10;

  transition: all 0.4s ease-out;
`;

const NavMobileLink = styled(Link)`
  position: relative;
  font-size: 35px;
  text-align: left;
  font-weight: 800;

  &.active {
    position: relative;
    transition: all 0.4s;
    transform: translateX(8px);
    opacity: 1;
    color: #61f2aa;

    &::after {
      content: 'Você está aqui';
      position: absolute;
      right: -2%;
      font-weight: 500;
      color: #0c1d1a;
      background-color: #61f2aa;
      height: auto;
      padding: 0 5px;
      border-radius: 5px;
      font-size: 16px;
      bottom: 8px;
    }
  }
`;

const SvgText = styled.svg`
  position: absolute;
  width: 160px;
  height: auto;
  left: 0;
  stroke: #fff;
  top: -25px;
  opacity: 0.6;
`;
const SvgTextAlternative = styled.svg`
  position: absolute;
  width: 240px;
  height: auto;
  left: 0;
  stroke: #fff;
  top: -22px;
  opacity: 0.6;
`;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function HandleChange() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <Nav as={motion.nav} variants={item}>
        <h2>Menu</h2>
        <NavLinkContainer
          activeClass="active"
          to="inicio"
          spy
          smooth="easeInOutCubic"
          duration={1000}
          delay={200}
        >
          <SvgIcon xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path
              fillRule="evenodd"
              d="M1.078 6.032c-.494.9-.494 1.987-.494 4.16v1.447c0 3.705 0 5.558 1.113 6.71C2.81 19.5 4.602 19.5 8.184 19.5h3.8c3.582 0 5.374 0 6.487-1.151 1.113-1.152 1.113-3.004 1.113-6.71v-1.445c0-2.175 0-3.262-.494-4.162-.492-.902-1.394-1.46-3.196-2.58l-1.9-1.178C12.09 1.09 11.137.5 10.084.5s-2.005.59-3.91 1.774l-1.9 1.179C2.472 4.572 1.57 5.13 1.078 6.032Zm6.58 7.196a.713.713 0 1 0-.849 1.144 5.478 5.478 0 0 0 3.275 1.09 5.478 5.478 0 0 0 3.275-1.09.714.714 0 0 0-.316-1.288.712.712 0 0 0-.534.144c-.7.524-1.55.808-2.425.81a4.054 4.054 0 0 1-2.425-.81Z"
              clipRule="evenodd"
            />
          </SvgIcon>
          <NavLink>Início</NavLink>
        </NavLinkContainer>
        <NavLinkContainer
          activeClass="active"
          to="projetos"
          spy
          smooth="easeInOutCubic"
          offset={10}
          duration={1000}
          delay={200}
        >
          <SvgIcon xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path d="M17.069 5.836 13.307 2.45C12.236 1.487 11.7 1.004 11.043.752l-.009 2.598c0 2.239 0 3.359.696 4.054.695.696 1.815.696 4.054.696h3.401c-.344-.67-.961-1.224-2.116-2.264Z" />
            <path
              fillRule="evenodd"
              d="M8.184 19.5h3.8c3.582 0 5.374 0 6.487-1.113 1.113-1.113 1.113-2.905 1.113-6.487v-.415c0-.83 0-1.453-.04-1.96h-3.85c-1.042 0-1.964 0-2.706-.1-.804-.108-1.61-.356-2.266-1.012-.657-.658-.905-1.463-1.013-2.267-.1-.742-.1-1.663-.1-2.706l.01-2.692c0-.079.006-.156.018-.232C9.25.5 8.788.5 8.212.5 4.611.5 2.81.5 1.697 1.613.584 2.726.584 4.518.584 8.1v3.8c0 3.582 0 5.374 1.113 6.487C2.81 19.5 4.602 19.5 8.184 19.5Zm.921-6.204a.713.713 0 0 1 1.008 0l.95.95a.713.713 0 0 1 0 1.008l-.95.95a.713.713 0 1 1-1.008-1.008l.447-.446-.447-.447a.713.713 0 0 1 0-1.007Zm-.254-1.146a.712.712 0 1 0-1.334-.5l-1.425 3.8a.713.713 0 1 0 1.334.5l1.425-3.8Zm-3.014-.754a.713.713 0 0 1 0 1.007l-.446.447.446.447a.712.712 0 1 1-1.007 1.006l-.95-.95a.713.713 0 0 1 0-1.006l.95-.95a.713.713 0 0 1 1.007 0Z"
              clipRule="evenodd"
            />
          </SvgIcon>
          <NavLink>Projetos</NavLink>
        </NavLinkContainer>
        <NavLinkContainer
          activeClass="active"
          to="sobre"
          spy
          smooth="easeInOutCubic"
          offset={40}
          duration={1000}
          delay={200}
        >
          <SvgIcon xmlns="http://www.w3.org/2000/svg" width="20" height="16">
            <path
              fillRule="evenodd"
              d="M8.184 0h3.8c3.582 0 5.374 0 6.487 1.172C19.584 2.343 19.584 4.229 19.584 8c0 3.771 0 5.657-1.113 6.828C17.358 16 15.566 16 11.984 16h-3.8c-3.582 0-5.374 0-6.487-1.172C.584 13.657.584 11.771.584 8c0-3.771 0-5.657 1.113-6.828C2.81 0 4.602 0 8.184 0Zm3.088 5a.77.77 0 0 1 .208-.53.695.695 0 0 1 .504-.22h4.75c.189 0 .37.079.504.22a.77.77 0 0 1 .209.53.77.77 0 0 1-.21.53.695.695 0 0 1-.503.22h-4.75a.695.695 0 0 1-.504-.22.77.77 0 0 1-.209-.53Zm.95 3a.77.77 0 0 1 .208-.53.695.695 0 0 1 .504-.22h3.8c.189 0 .37.079.504.22a.77.77 0 0 1 .209.53.77.77 0 0 1-.21.53.695.695 0 0 1-.503.22h-3.8a.695.695 0 0 1-.504-.22.77.77 0 0 1-.208-.53Zm.95 3a.77.77 0 0 1 .208-.53.695.695 0 0 1 .504-.22h2.85c.189 0 .37.079.504.22a.77.77 0 0 1 .209.53.77.77 0 0 1-.21.53.695.695 0 0 1-.503.22h-2.85a.695.695 0 0 1-.504-.22.77.77 0 0 1-.209-.53ZM9.133 5c0 .53-.2 1.04-.557 1.414-.356.375-.84.586-1.343.586-.504 0-.987-.21-1.344-.586A2.055 2.055 0 0 1 5.334 5c0-.53.2-1.04.556-1.414C6.247 3.21 6.73 3 7.234 3c.504 0 .987.21 1.343.586.357.375.557.884.557 1.414Zm-1.9 8c3.8 0 3.8-.895 3.8-2s-1.7-2-3.8-2c-2.1 0-3.8.895-3.8 2s0 2 3.8 2Z"
              clipRule="evenodd"
            />
          </SvgIcon>
          <NavLink>Sobre</NavLink>
        </NavLinkContainer>
        <NavLinkContainer
          activeClass="active"
          to="contato"
          spy
          smooth="easeInOutCubic"
          duration={1000}
          delay={200}
        >
          <SvgIcon xmlns="http://www.w3.org/2000/svg" width="17" height="16">
            <path d="m10.524 10.81-.36.38s-.858.901-3.197-1.561c-2.34-2.463-1.482-3.365-1.482-3.365l.227-.24c.56-.589.612-1.534.124-2.225l-.998-1.411c-.605-.855-1.772-.967-2.465-.238L1.131 3.457c-.343.361-.572.83-.545 1.35.071 1.33.64 4.19 3.81 7.528 3.362 3.539 6.517 3.68 7.806 3.552.409-.04.764-.26 1.05-.56l1.123-1.185c.76-.8.547-2.17-.425-2.728l-1.512-.871a1.548 1.548 0 0 0-1.914.266Z" />
            <path d="M12.459 8a3.958 3.958 0 1 0-3.545-2.195c.072.14.091.301.053.454l-.236.881a.515.515 0 0 0 .63.63l.881-.236a.647.647 0 0 1 .455.053c.547.273 1.15.414 1.762.414Z" />
          </SvgIcon>
          <NavLink>Contato</NavLink>
        </NavLinkContainer>
      </Nav>
      <NavMobileContainer>
        <NavMobileButton onClick={HandleChange}>
          <h3>Menu</h3>
          {isMenuOpen ? (
            <svg
              width="42"
              height="41"
              viewBox="0 0 42 41"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.12062 0.880363C5.55192 0.350443 4.79973 0.0619498 4.02252 0.0756627C3.24532 0.0893756 2.50378 0.404224 1.95413 0.953876C1.40448 1.50353 1.08963 2.24507 1.07591 3.02227C1.0622 3.79948 1.35069 4.55166 1.88061 5.12036L16.7606 20.0004L1.88061 34.8804C1.58587 35.155 1.34946 35.4862 1.18549 35.8542C1.02152 36.2222 0.933355 36.6195 0.926248 37.0223C0.919141 37.4251 0.99324 37.8252 1.14412 38.1988C1.29501 38.5723 1.51959 38.9116 1.80446 39.1965C2.08934 39.4814 2.42867 39.706 2.80222 39.8569C3.17578 40.0077 3.57589 40.0818 3.9787 40.0747C4.38152 40.0676 4.77877 39.9795 5.14677 39.8155C5.51476 39.6515 5.84597 39.4151 6.12062 39.1204L21.0006 24.2404L35.8806 39.1204C36.1553 39.4151 36.4865 39.6515 36.8545 39.8155C37.2225 39.9795 37.6197 40.0676 38.0225 40.0747C38.4253 40.0818 38.8255 40.0077 39.199 39.8569C39.5726 39.706 39.9119 39.4814 40.1968 39.1965C40.4816 38.9116 40.7062 38.5723 40.8571 38.1988C41.008 37.8252 41.0821 37.4251 41.075 37.0223C41.0679 36.6195 40.9797 36.2222 40.8157 35.8542C40.6518 35.4862 40.4154 35.155 40.1206 34.8804L25.2406 20.0004L40.1206 5.12036C40.6505 4.55166 40.939 3.79948 40.9253 3.02227C40.9116 2.24507 40.5968 1.50353 40.0471 0.953876C39.4974 0.404224 38.7559 0.0893756 37.9787 0.0756627C37.2015 0.0619498 36.4493 0.350443 35.8806 0.880363L21.0006 15.7604L6.12062 0.880363Z"
                fill="#fff"
              />
            </svg>
          ) : (
            <svg
              width="45"
              height="32"
              viewBox="0 0 45 32"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M42.88 12.8H1.92C0.1536 12.8 0 14.2304 0 16C0 17.7696 0.1536 19.2 1.92 19.2H42.88C44.6464 19.2 44.8 17.7696 44.8 16C44.8 14.2304 44.6464 12.8 42.88 12.8ZM42.88 25.6H1.92C0.1536 25.6 0 27.0304 0 28.8C0 30.5696 0.1536 32 1.92 32H42.88C44.6464 32 44.8 30.5696 44.8 28.8C44.8 27.0304 44.6464 25.6 42.88 25.6ZM1.92 6.4H42.88C44.6464 6.4 44.8 4.9696 44.8 3.2C44.8 1.4304 44.6464 0 42.88 0H1.92C0.1536 0 0 1.4304 0 3.2C0 4.9696 0.1536 6.4 1.92 6.4Z" />
            </svg>
          )}
        </NavMobileButton>
        {isMenuOpen && (
          <NavMobileMenu isMenuOpen={isMenuOpen ? 'true' : 'false'}>
            <NavMobileLink
              activeClass="active"
              to="inicio"
              onClick={HandleChange}
              spy
              smooth="easeInOutCubic"
              duration={1000}
              delay={200}
            >
              Inicio
              <SvgText
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 166.3 49.5"
              >
                <g opacity=".8">
                  <g
                    fill="none"
                    strokeMiterlimit="10"
                    strokeWidth=".75"
                    opacity=".31"
                  >
                    <path d="M.4 6.6h11.9v42H.4v-42zM54.2 30v18.6H42.8V31.9c0-4.7-2-6.7-5.3-6.7-3.7 0-6.5 2.3-6.5 7.7v15.7H19.5V16.1h10.9v3.5c2.6-2.7 6.2-4.1 10.3-4.1 7.6.1 13.5 4.4 13.5 14.5zM59.1 6.4c0-3.4 2.8-6.1 7-6.1s7 2.5 7 5.9c0 3.6-2.8 6.2-7 6.2-4.2.1-7-2.5-7-6zm1.3 9.7h11.4v32.5H60.4V16.1zM76 32.3c0-9.8 7.7-16.7 18.7-16.7 7.4 0 13 3.3 15.2 8.9l-8.8 4.5c-1.6-3.1-3.8-4.4-6.5-4.4-4 0-7.1 2.8-7.1 7.7 0 5 3.1 7.8 7.1 7.8 2.6 0 4.9-1.3 6.5-4.4l8.8 4.5c-2.2 5.6-7.9 8.9-15.2 8.9-11 .1-18.7-6.9-18.7-16.8zM112.3 6.4c0-3.4 2.8-6.1 7-6.1s7 2.5 7 5.9c0 3.6-2.8 6.2-7 6.2-4.2.1-7-2.5-7-6zm1.3 9.7H125v32.5h-11.4V16.1zM129.2 32.3c0-9.8 7.7-16.7 18.4-16.7s18.4 7 18.4 16.7c0 9.8-7.6 16.9-18.4 16.9-10.6 0-18.4-7.1-18.4-16.9zm25.2 0c0-4.9-2.9-7.7-6.8-7.7-3.8 0-6.8 2.8-6.8 7.7 0 5 3 7.8 6.8 7.8 3.9 0 6.8-2.8 6.8-7.8z" />
                  </g>
                </g>
              </SvgText>
            </NavMobileLink>
            <NavMobileLink
              activeClass="active"
              to="projetos"
              spy
              onClick={HandleChange}
              smooth="easeInOutCubic"
              duration={1000}
              delay={200}
            >
              Projetos
              <SvgTextAlternative
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 261.7 61.2"
              >
                <g
                  fill="none"
                  strokeMiterlimit="10"
                  strokeWidth=".75"
                  opacity=".31"
                >
                  <path d="M38.2 22.2c0 9.5-7.2 15.5-18.7 15.5h-7.3v11H.4v-42h19.2c11.4-.1 18.6 5.9 18.6 15.5zm-12 0c0-3.9-2.5-6.2-7.4-6.2h-6.6v12.3h6.6c5 0 7.4-2.3 7.4-6.1zM65.5 15.6v10.3c-1-.1-1.7-.2-2.6-.2-4.6 0-7.8 2.3-7.8 8v14.9H43.8V16.1h10.9V20c2.3-2.9 6-4.4 10.8-4.4zM67.9 32.3c0-9.8 7.7-16.7 18.4-16.7s18.4 7 18.4 16.7c0 9.8-7.6 16.9-18.4 16.9-10.7 0-18.4-7.1-18.4-16.9zm25.2 0c0-4.9-2.9-7.7-6.8-7.7-3.8 0-6.8 2.8-6.8 7.7 0 5 3 7.8 6.8 7.8s6.8-2.8 6.8-7.8zM100.6 59.1l2.9-8.1c1 .6 2.2 1 3.5 1 2 0 3.4-1.3 3.4-4.3V16.1h11.4v31.7c0 7.9-4.9 13-13.3 13-3 0-5.9-.5-7.9-1.7zm8.5-52.7c0-3.4 2.8-6.1 7-6.1s7 2.5 7 5.9c0 3.6-2.8 6.2-7 6.2-4.2.1-7-2.5-7-6zM162.1 35.2h-23.6c1 3.3 3.8 5.2 8 5.2 3.2 0 5.3-.9 7.5-2.8l6 6.2c-3.1 3.5-7.7 5.3-13.9 5.3-11.6 0-19.1-7.1-19.1-16.9 0-9.8 7.6-16.7 17.9-16.7 9.6 0 17.4 6.1 17.4 16.9 0 .9-.1 1.9-.2 2.8zm-23.8-6h13.3c-.6-3.4-3.1-5.6-6.7-5.6-3.5.1-5.9 2.2-6.6 5.6zM190 47.3c-2 1.3-4.9 1.9-7.9 1.9-8.3 0-13.2-4.1-13.2-12.4v-11h-4.7v-8.5h4.7V8.8h11.4v8.5h7.4v8.5h-7.4v10.8c0 2.4 1.4 3.7 3.4 3.7 1.3 0 2.5-.4 3.5-1l2.8 8zM191.4 32.3c0-9.8 7.7-16.7 18.4-16.7s18.4 7 18.4 16.7c0 9.8-7.6 16.9-18.4 16.9-10.6 0-18.4-7.1-18.4-16.9zm25.2 0c0-4.9-2.9-7.7-6.8-7.7-3.8 0-6.8 2.8-6.8 7.7 0 5 3 7.8 6.8 7.8 3.9 0 6.8-2.8 6.8-7.8zM230.8 45.8l3.4-7.8c3 1.9 7.4 3 11.3 3 3.8 0 5.1-.8 5.1-2.2 0-4.4-19.2.6-19.2-12.4 0-6.1 5.6-10.8 15.8-10.8 4.6 0 9.6 1 12.8 2.8l-3.4 7.7c-3.2-1.8-6.5-2.4-9.4-2.4-3.8 0-5.2 1.1-5.2 2.3 0 4.5 19.1-.4 19.1 12.5 0 6-5.5 10.7-16.1 10.7-5.3 0-11-1.4-14.2-3.4z" />
                </g>
              </SvgTextAlternative>
            </NavMobileLink>
            <NavMobileLink
              onClick={HandleChange}
              activeClass="active"
              to="sobre"
              spy
              smooth="easeInOutCubic"
              duration={1000}
              delay={200}
            >
              Sobre
              <SvgText
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 183.1 46.1"
              >
                <g
                  fill="none"
                  strokeMiterlimit="10"
                  strokeWidth=".75"
                  opacity=".31"
                >
                  <path d="m.5 41.1 3.9-8.8c3.7 2.5 9 4.1 13.9 4.1s6.8-1.4 6.8-3.4c0-6.7-23.9-1.8-23.9-17.4C1.2 8.1 7.3 2 19.8 2 25.3 2 30.9 3.3 35 5.7l-3.7 8.8c-4-2.2-8-3.2-11.6-3.2-5 0-6.8 1.7-6.8 3.8 0 6.4 23.8 1.6 23.8 17.1 0 7.3-6.1 13.6-18.6 13.6-6.8-.1-13.7-1.9-17.6-4.7zM39.6 28.6c0-9.8 7.7-16.7 18.4-16.7s18.4 7 18.4 16.7c0 9.8-7.6 16.9-18.4 16.9-10.6-.1-18.4-7.1-18.4-16.9zm25.2 0c0-4.9-2.9-7.7-6.8-7.7-3.8 0-6.8 2.8-6.8 7.7 0 5 3 7.8 6.8 7.8 3.9 0 6.8-2.8 6.8-7.8zM118.1 28.6c0 10.4-7.1 16.9-16 16.9-4.3 0-7.4-1.2-9.6-3.8v3.2H81.6V.4H93v14.8c2.2-2.3 5.3-3.4 9.1-3.4 8.8 0 16 6.5 16 16.8zm-11.6 0c0-4.9-3-7.7-6.8-7.7s-6.8 2.8-6.8 7.7c0 5 3 7.8 6.8 7.8s6.8-2.8 6.8-7.8zM145.1 11.8v10.3c-1-.1-1.7-.2-2.6-.2-4.6 0-7.8 2.3-7.8 8v14.9h-11.4V12.4h10.9v3.9c2.3-3 6.1-4.5 10.9-4.5zM182.6 31.5H159c1 3.3 3.8 5.2 8 5.2 3.2 0 5.3-.9 7.5-2.8l6 6.2c-3.1 3.5-7.7 5.3-13.9 5.3-11.6 0-19.1-7.1-19.1-16.9 0-9.8 7.6-16.7 17.9-16.7 9.6 0 17.4 6.1 17.4 16.9-.1.8-.2 1.9-.2 2.8zm-23.9-6H172c-.6-3.4-3.1-5.6-6.7-5.6-3.4 0-5.9 2.2-6.6 5.6z" />
                </g>
              </SvgText>
            </NavMobileLink>
            <NavMobileLink
              activeClass="active"
              to="contato"
              spy
              onClick={HandleChange}
              smooth="easeInOutCubic"
              duration={1000}
              delay={200}
            >
              Contato
              <SvgTextAlternative
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 252.4 44.4"
              >
                <g
                  fill="none"
                  strokeMiterlimit="10"
                  strokeWidth=".75"
                  opacity=".31"
                >
                  <path d="M.4 22.2C.4 9.4 10.2.4 23.5.4c7.7 0 14 2.8 18.1 7.9L34 15.1c-2.6-3.2-5.9-4.9-9.9-4.9-6.9 0-11.7 4.8-11.7 12s4.8 12 11.7 12c4 0 7.3-1.7 9.9-4.9l7.6 6.8C37.5 41.2 31.3 44 23.5 44 10.2 44.1.4 35 .4 22.2zM43.2 26.9c0-9.8 7.7-16.7 18.4-16.7S80 17.2 80 26.9c0 9.8-7.6 16.9-18.4 16.9-10.6 0-18.4-7.1-18.4-16.9zm25.2 0c0-4.9-2.9-7.7-6.8-7.7-3.8 0-6.8 2.8-6.8 7.7 0 5 3 7.8 6.8 7.8 3.9 0 6.8-2.8 6.8-7.8zM119.8 24.6v18.6h-11.4V26.5c0-4.7-2-6.7-5.3-6.7-3.7 0-6.5 2.3-6.5 7.7v15.7H85.2V10.7h10.9v3.5c2.6-2.7 6.2-4.1 10.3-4.1 7.6.1 13.4 4.4 13.4 14.5zM149.4 41.9c-2 1.3-4.9 1.9-7.9 1.9-8.3 0-13.2-4.1-13.2-12.4v-11h-4.7v-8.5h4.7V3.4h11.4v8.5h7.4v8.5h-7.4v10.8c0 2.4 1.4 3.7 3.4 3.7 1.3 0 2.5-.4 3.5-1l2.8 8zM184.3 25.2v18.1h-10.6V39c-1.6 3.1-4.9 4.7-9.6 4.7-7.8 0-12.1-4.4-12.1-10 0-6 4.4-9.7 14.5-9.7h6.5c-.2-3.3-2.4-5.2-6.9-5.2-3.1 0-6.6 1.1-8.8 2.8l-3.8-7.7c3.7-2.5 9.2-3.8 14.3-3.8 10.4.1 16.5 4.7 16.5 15.1zm-11.4 7.6V30H168c-3.7 0-5 1.3-5 3.3 0 1.9 1.6 3.3 4.3 3.3 2.5 0 4.7-1.2 5.6-3.8zM213.9 41.9c-2 1.3-4.9 1.9-7.9 1.9-8.3 0-13.2-4.1-13.2-12.4v-11h-4.7v-8.5h4.7V3.4h11.4v8.5h7.4v8.5h-7.4v10.8c0 2.4 1.4 3.7 3.4 3.7 1.3 0 2.5-.4 3.5-1l2.8 8zM215.3 26.9c0-9.8 7.7-16.7 18.4-16.7s18.4 7 18.4 16.7c0 9.8-7.6 16.9-18.4 16.9-10.7 0-18.4-7.1-18.4-16.9zm25.2 0c0-4.9-2.9-7.7-6.8-7.7-3.8 0-6.8 2.8-6.8 7.7 0 5 3 7.8 6.8 7.8 3.9 0 6.8-2.8 6.8-7.8z" />
                </g>
              </SvgTextAlternative>
            </NavMobileLink>
          </NavMobileMenu>
        )}
      </NavMobileContainer>
    </>
  );
}

export default Navbar;
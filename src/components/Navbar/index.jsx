import styled from 'styled-components';
import { SvgLogo } from '../Logo';
import { Link } from 'react-scroll';
import { useEffect, useState, useRef } from 'react';
export function Navigation() {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener('mousedown', closeDrawer);
    return () => document.removeEventListener('mousedown', closeDrawer);
  }, []);
  return (
    <>
      <Navbar.Container>
        <Navbar.Logo>Logo</Navbar.Logo>
        <HamburgerButton.Container onClick={() => toggleDrawer(true)}>
          <HamburgerButton.Lines />
        </HamburgerButton.Container>
        <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
          <HamburgerButton.Close onClick={() => toggleDrawer(false)}>
            Esconder
          </HamburgerButton.Close>
          <Navbar.Item>
            <Link to="sobre" smooth={true} duration={400}>
              Quem eu sou
            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="projetos" smooth={true} duration={400}>
              Projetos
            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="contato" smooth={true} duration={400}>
              Fale comigo
            </Link>
          </Navbar.Item>
        </Navbar.Items>
      </Navbar.Container>
    </>
  );
}

const Navbar = {
  Container: styled.nav`
    flex: 1;
    align-self: flex-start;
    padding:2px 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(2, 0, 36);
  `,
  Logo: styled(SvgLogo)`
    padding: 0.5rem 1rem;
    min-width: 80px;
    margin: auto;
    @media only screen and (max-width: 960px) {
      stroke: ${(props) => (props.stroke ? '#f53d53' : '#fff')};
    }
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 40em) {
      position: fixed;
      z-index: 2;
      right: 0;
      top: 0;
      flex-direction: column;
      margin: 0;
      padding: 1rem 2rem;
      height: 100%;
      background-color: black;
      transition: 0.4s;
      transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Item: styled.li`
    margin: 0 1rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: scale(0.9);
    }
    @media only screen and (max-width: 40em) {
      padding: 1rem 0;
    }
  `,
};

const HamburgerButton = {
  Container: styled.button`
    position: relative;
    display: none;
    height: 3rem;
    width: 3rem;
    font-size: 12px;
    @media only screen and (max-width: 638px) {
      display: block;
    }

    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;

    &:after {
      content: '';
      top: -25%;
      left: -25%;
      position: absolute;
      display: block;
      width: 150%;
      height: 150%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &::after,
    &:before {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      background: #f53d53;
      pointer-events: none;
    }
    &:after {
      top: -0.8rem;
    }

    &:before {
      top: 0.8rem;
    }
  `,
  Close: styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 1em auto;
    padding: 10px;
    font-size: 1em;
    background-color: #f53d53;
    border-radius: 30px;

    @media only screen and (max-width: 638px) {
      display: flex;
    }
  `,
};

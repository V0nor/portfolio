import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
export function MenuMobile() {
  return (
    <Hamburger>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="black"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </Hamburger>
  );
}

const Hamburger = styled.button`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(17, 18, 17, 8.95);
  background: linear-gradient(
    34deg,
    rgba(25, 88, 24, 0.95) 0%,
    rgba(17, 17, 17, 0.95) 95%
  );

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  @media only screen and (max-width: 960px) {
    display: block;
  }
`;

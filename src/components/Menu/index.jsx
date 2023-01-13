import styled from 'styled-components';

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
  // removes default border on button element
  margin: auto;
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  // positions the icon to the right and center aligns it vertically

  display: none;
  &:hover {
    background-color: #f53d5399;
  }
  @media only screen and (max-width: 960px) {
    display: block;
  }
`;

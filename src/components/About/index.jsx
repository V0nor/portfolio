import styled from 'styled-components';
import { FaQuoteRight } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
export const About = () => {
  return (
    <>
      <ContainerDesc id="sobre">
        <Title>Sobre mim</Title>
        <Desc>
          Como desenvolvedor Front-end sou apaixonado por tecnologia, uso
          atualmente o React e algumas vezes apenas o Javascript nos meus
          projetos. Acredito que boas práticas é essencial para um melhor
          desempenho do projeto. Portanto, eu me esforço para o site ficar com o
          melhor desempenho possível. <br />
          <br />
          Estudando e desenvolvendo projetos sempre de maneira constante desde
          2021, tenho atualmente focado em projetos que ajudam a resolver
          problemas da sociedade.
          <br />
          <br /> Meu objetivo atual é entrar no mercado de programação na área
          de desenvolvimento Front-end. Pretendo mostrar ao mundo que estou
          pronto para assumir qualquer responsabilidade e exercer meu cargo com
          excelência!
          <Github href="https://github.com/V0nor?tab=repositories">
            Meus Projetos no Github
          </Github>
        </Desc>
        <Title>Ferramentas</Title>
        <Skills>
          <Skill>
            <SkillSVG
              xmlns="http://www.w3.org/2000/svg"
              width={46}
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                fill="rgba(245, 61, 83, 1)"
                d="M6 28 4 3h24l-2 25-10 3-10-3Z"
              />
              <path fill="rgba(245, 61, 83, 1)" d="M26 5H16v24.5l8-2.5 2-22Z" />
              <path
                fill="#020024"
                d="M9.5 17.5 8.5 8H24l-.5 3h-12l.5 3.5h11L22 24l-6 2-6-2-.5-5h3l.5 2.5 3 1 3-1 .5-4h-10Z"
              />
            </SkillSVG>
            HTML
          </Skill>
          <Skill>
            <SkillSVG
              xmlns="http://www.w3.org/2000/svg"
              width={46}
              viewBox="0 0 32 32"
            >
              <path
                d="M5.902 27.201 3.656 2h24.688l-2.249 25.197L15.985 30 5.902 27.201z"
                fill="rgba(245, 61, 83, 1)"
              />
              <path
                d="m16 27.858 8.17-2.265 1.922-21.532H16v23.797z"
                fill="rgba(245, 61, 83, 1)"
              />
              <path
                d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829-.759 8.518H16v-3.091z"
                fill="#020024"
              />
              <path
                d="m16.019 21.218-.014.004-3.442-.93-.22-2.465H9.24l.433 4.853 6.331 1.758.015-.004v-3.216z"
                fill="#020024"
              />
              <path
                d="m19.827 16.151-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007h-3.101z"
                fill="#020024"
              />
              <path
                d="M16.011 6.935v3.091H8.545l-.062-.695-.141-1.567-.074-.829h7.743zM16 13.191v3.091H12.601l-.062-.695-.14-1.567-.074-.829H16z"
                fill="#020024"
              />
            </SkillSVG>
            CSS
          </Skill>
          <Skill>
            <SkillSVG
              xmlns="http://www.w3.org/2000/svg"
              width={46}
              viewBox="0 0 32 32"
            >
              <path
                d="M16 2A14 14 0 1 1 2 16 14 14 0 0 1 16 2Z"
                fill="rgba(245, 61, 83, 1)"
              />
              <path
                d="M24.782 7.992c-.634-2.486-4.757-3.3-8.659-1.918a19.605 19.605 0 0 0-6.644 3.811c-2.149 2.01-2.492 3.76-2.351 4.491.5 2.58 4.033 4.266 5.486 5.517v.007c-.428.211-3.564 1.8-4.3 3.42-.774 1.712.123 2.94.718 3.105A4.4 4.4 0 0 0 13.78 24.5a4.824 4.824 0 0 0 .472-4.288 5.639 5.639 0 0 1 2.143-.123c2.456.287 2.938 1.82 2.846 2.462a1.62 1.62 0 0 1-.779 1.1c-.172.107-.225.143-.21.223.021.115.1.111.247.086a1.915 1.915 0 0 0 1.336-1.707c.059-1.5-1.382-3.186-3.934-3.143a6.736 6.736 0 0 0-2.189.3 5.844 5.844 0 0 0-.108-.12c-1.578-1.683-4.494-2.874-4.371-5.137.045-.823.331-2.989 5.6-5.617 4.32-2.153 7.778-1.56 8.376-.247.854 1.876-1.848 5.361-6.334 5.864a3.37 3.37 0 0 1-2.833-.718c-.236-.26-.271-.271-.359-.223-.143.079-.052.309 0 .445a2.659 2.659 0 0 0 1.621 1.274 8.592 8.592 0 0 0 5.258-.52c2.721-1.049 4.843-3.974 4.22-6.419ZM13.218 20.663a3.584 3.584 0 0 1-.029 2.092q-.035.106-.077.21t-.091.2a3.911 3.911 0 0 1-.647.943c-.813.887-1.95 1.223-2.437.94-.526-.305-.263-1.556.68-2.553a9.478 9.478 0 0 1 2.474-1.762Z"
                fill="#020024"
              />
            </SkillSVG>
            SCSS
          </Skill>
          <Skill>
            <SkillSVG
              xmlns="http://www.w3.org/2000/svg"
              aria-label="JavaScript"
              viewBox="0 0 512 512"
              width={46}
            >
              <rect
                width="512"
                height="512"
                fill="rgba(245, 61, 83, 1)"
                rx="15%"
              />
              <path d="M324 370c10 17 24 29 47 29 20 0 33-10 33-24 0-16-13-22-35-32l-12-5c-35-15-58-33-58-72 0-36 27-64 70-64 31 0 53 11 68 39l-37 24c-8-15-17-21-31-21s-23 9-23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76 0 43-34 67-80 67-45 0-74-21-88-49zm-170 4c8 13 14 25 31 25 16 0 26-6 26-30V203h48v164c0 50-29 72-72 72-39 0-61-20-72-44z" />
            </SkillSVG>
            Javascript
          </Skill>
          <Skill>
            <SkillSVG
              xmlns="http://www.w3.org/2000/svg"
              aria-label="TypeScript"
              viewBox="0 0 512 512"
              width={46}
            >
              <rect
                width="512"
                height="512"
                fill="rgba(245, 61, 83, 1)"
                rx="15%"
              />
              <path
                fill="#020024"
                d="M233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1 23-1.1 34-3.4 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6.31 13 .94 4.6.63 9.3 1.6 14 2.9 4.7 1.3 9.3 2.9 14 4.9 4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1-23 1.3-34 3.8-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-28.1-15.44z"
              />
            </SkillSVG>
            Typescript
          </Skill>
          <Skill>
            <SkillSVG
              xmlns="http://www.w3.org/2000/svg"
              width={46}
              preserveAspectRatio="xMidYMid"
              viewBox="0 -14 256 256"
            >
              <path
                fill="rgba(245, 61, 83, 1)"
                d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"
              />
            </SkillSVG>
            React
          </Skill>
          <Skill>
            <SkillSVG
              xmlns="http://www.w3.org/2000/svg"
              width={46}
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                fill="rgba(245, 61, 83, 1)"
                d="M2.585 17.413a1.999 1.999 0 0 1 0-2.826L14.587 2.585c.78-.78 2.046-.78 2.826 0l12.002 12.002c.78.78.78 2.046 0 2.826L17.413 29.415c-.78.78-2.046.78-2.826 0L2.585 17.413Z"
              />
              <path
                fill="#020024"
                d="m12.149 5.062-1.215 1.215 3.139 3.139A2.126 2.126 0 0 0 15.25 12.3v7.679a2.126 2.126 0 1 0 1.718.097v-7.765l3 3a2.125 2.125 0 1 0 1.283-1.147l-3.221-3.223a2.125 2.125 0 0 0-2.66-2.66l-3.221-3.22Z"
              />
            </SkillSVG>
            Git
          </Skill>
          <Skill>
            <SkillSVG
              xmlns="http://www.w3.org/2000/svg"
              width={46}
              fill="none"
              viewBox="0 0 15 15"
            >
              <path
                fill="rgba(245, 61, 83, 1)"
                fillRule="evenodd"
                d="M0 7.5a7.5 7.5 0 1 1 11.697 6.216L4.907 4.21A.5.5 0 0 0 4 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 0 1 0 7.5ZM10 10V4h1v6h-1Z"
                clipRule="evenodd"
              />
            </SkillSVG>
            Next
          </Skill>
          <Skill>
            <SkillSVG
              xmlns="http://www.w3.org/2000/svg"
              width={46}
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                fill="url(#a)"
                d="m29.884 6.146-13.142 23.5a.714.714 0 0 1-1.244.005L2.096 6.148a.714.714 0 0 1 .746-1.057l13.156 2.352a.714.714 0 0 0 .253 0l12.881-2.348a.714.714 0 0 1 .752 1.05z"
              />
              <path
                fill="url(#b)"
                d="M22.264 2.007 12.54 3.912a.357.357 0 0 0-.288.33l-.598 10.104a.357.357 0 0 0 .437.369l2.707-.625a.357.357 0 0 1 .43.42l-.804 3.939a.357.357 0 0 0 .454.413l1.672-.508a.357.357 0 0 1 .454.414l-1.279 6.187c-.08.387.435.598.65.267l.143-.222 7.925-15.815a.357.357 0 0 0-.387-.51l-2.787.537a.357.357 0 0 1-.41-.45l1.818-6.306a.357.357 0 0 0-.412-.45z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="6"
                  x2="235"
                  y1="33"
                  y2="344"
                  gradientTransform="translate(1.34 1.894) scale(.07142)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="rgba(245, 61, 83, 1)" />
                  <stop offset="1" stopColor="rgba(245, 61, 83, 1)" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="194.651"
                  x2="236.076"
                  y1="8.818"
                  y2="292.989"
                  gradientTransform="translate(1.34 1.894) scale(.07142)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#020024" />
                  <stop offset="0" stopColor="rgba(245, 61, 83, 1)" />
                  <stop offset=".95" stopColor="#020024" />
                </linearGradient>
              </defs>
            </SkillSVG>
            Vite
          </Skill>
        </Skills>
        <Frase>
          <QuoteLeft /> A melhor maneira de começar alguma coisa é parar de
          falar e dar o primeiro passo
          <QuoteRight />
        </Frase>
      </ContainerDesc>
    </>
  );
};

const ContainerDesc = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  margin-top: 2em;
  background: rgb(2, 0, 36);
  padding-bottom: 8em;
`;

const Title = styled.h2`
  font-size: 2em;
`;

const Desc = styled.p`
  font-size: 1.2em;
  line-height: 1;
  max-width: 600px;
  text-align: justify;
  line-height: 1.5em;

  @media only screen and (max-width: 768px) {
    width: 450px;
    text-align: center;
    margin: 0;
  }
  @media only screen and (max-width: 490px) {
    width: 250px;
    text-align: center;
    margin: 0;
  }
`;

const Github = styled.a`
  display: block;
  margin: 1em auto;
  padding: 15px 20px;
  width: 200px;
  border-radius: 30px;
  background-color: rgba(245, 61, 83, 1);
  text-decoration: none;
  font-weight: 700;
  color: unset;
  transition: all 0.4s;

  &:hover {
    opacity: 0.8;
  }
`;

const Skills = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  padding: 0;
  list-style: none;
  font-size: 2em;
  background-color: #f53d53;
  border-radius: 15px;

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Skill = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 10px;
  font-size: 1em;
  background-color: rgb(2, 0, 36);
  border-radius: 15px;
`;

const SkillSVG = styled.svg`
  width: 40px;
  padding-right: 10px;
`;
const Frase = styled.h2`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 60vw;
  margin-top: 5em;
  padding: 1em;
  font-size: 1.6em;
  border-radius: 15px;
  border: 4px solid #f53d53;
`;
const QuoteLeft = styled(FaQuoteLeft)`
  position: absolute;
  font-size: 30px;
  bottom: -15px;
  right: 15px;
`;
const QuoteRight = styled(FaQuoteRight)`
  position: absolute;
  font-size: 30px;
  top: -15px;
  left: 18px;
`;

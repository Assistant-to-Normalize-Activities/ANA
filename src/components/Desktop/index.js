import styled from "styled-components";
// Here are the components will be used only by desktop version
export const Main = styled.div`
  opacity: 1;
  animation: fadeInOpacity 300ms ease-in;

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background: url("/images/mainDesktop.svg") no-repeat;
  background-position: bottom center;
  background-size: cover;
`;

export const Content = styled.div`
  margin: 0 0 2em 0;
  padding: 0 2em;
  width: auto;
  min-height: 80vh;

  display: inherit;
  flex-direction: inherit;
  align-items: inherit;
  justify-content: inherit;
  text-align: inherit;

  background-color: #55328c;
  border-radius: 20px;

  @media (max-width: 763px) {
    width: 60%;
  }
`;

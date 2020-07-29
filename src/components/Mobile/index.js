import styled from "styled-components";
// Here are components will be used just on mobile
export const Splash = styled.div`
  opacity: 1;
  animation: fadeInOpacity 300ms ease-in;

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: ${(props) => (props.primary ? "#55328c" : "#FFF")};
  background-image: url("/images/mainMobile.svg");
  background-position: ${(props) => (props.primary ? "center" : "unset")};
  background-size: ${(props) => (props.primary ? "cover" : "unset")};
`;

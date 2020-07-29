import styled from "styled-components";

export const Main = styled.div`
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

export const Brand = styled.div`
  width: 193px;
  height: 193px;
  margin: 0 0 2em 0;

  background: url("/images/Brand.png") no-repeat;
  background-position: bottom center;
  background-size: cover;
`;

export const Title = styled.h2`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  color: #fcfaff;
`;

export const Description = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #55328c;
`;

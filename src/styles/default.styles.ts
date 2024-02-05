import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Onest", sans-serif;
    font-style: normal;
  }
  body {
    padding-left: 16px;
    padding-right: 16px;
    background: rgb(245, 245, 245);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }
  p {
    font-weight: 400;
  }
`;

export const GlobalTheme = {
  colors: {
    mainDark: "#10172A",
    secondaryDark: "#808080",
    mainGray: "#F5F5F5",
    secondaryGray: "#d2d2d2",
    white: "#FFFFFF",
    mainOrange: "#ff4700",
  },
};

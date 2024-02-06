import { createGlobalStyle, css } from "styled-components";
import { MQ_MEDIUM_DOWN } from "constants/style";

export const GlobalStyle = createGlobalStyle(
  ({ theme: { colors } }) => css`
    * {
      margin: 0;
      padding: 0;
      font-family: "Onest", sans-serif;
      font-style: normal;
    }

    body {
      padding: 0 16px;
      background-color: ${colors.mainGray};

      ${MQ_MEDIUM_DOWN(css`
        padding: 0;
        background-color: ${colors.white};
      `)}
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
  `
);

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

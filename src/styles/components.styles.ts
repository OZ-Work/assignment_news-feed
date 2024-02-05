import styled, { css } from "styled-components";

export const ArticleTitle = styled.h3`
  transition: 0.1s ease;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.mainOrange};
  }
`;
export const ImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const NoSourceLogo = styled.div`
  height: 10px;
  width: 10px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Spinner = styled.div<{ $size?: number }>(
  ({ theme: { colors }, $size }) => css`
    width: ${$size ?? 40}px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid #0000;
    border-right-color: ${colors.mainOrange};
    position: relative;
    animation: l24 1s infinite linear;

    &:after,
    &:before {
      content: "";
      position: absolute;
      inset: -8px;
      border-radius: 50%;
      border: inherit;
      animation: inherit;
      animation-duration: 2s;
    }

    &:after {
      animation-duration: 4s;
    }

    @keyframes l24 {
      100% {
        transform: rotate(1turn);
      }
    }
  `
);

export const ScrollToTopButtonStyled = styled.button(
  ({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: ${colors.secondaryGray};
    border-radius: 6px;
    position: sticky;
    margin-left: -60%;
    bottom: 50px;
    border: none;
    cursor: pointer;
  `
);

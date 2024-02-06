import styled, { css } from "styled-components";
import {
  MQ_LARGE_DOWN,
  MQ_LARGE_UP,
  MQ_SMALL_DOWN,
  MQ_SMALL_UP,
} from "constants/style";
import { ResponsiveSize } from "types/style";
import { ParagraphStyled } from "styles/typography.styles";

export const ArticleTitleStyled = styled(ParagraphStyled)`
  transition: 0.1s ease;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.mainOrange};
  }
`;

export const ImageContainerStyled = styled.div<{
  $width?: ResponsiveSize;
  $radius?: number;
}>(
  ({ $width, $radius }) => css`
    width: ${$width?.largeUp}${$width?.largeUp ?? "px"};
    border-radius: ${$radius ?? 0}px;

    ${MQ_SMALL_DOWN(css`
      width: ${$width?.smallDown}px;
    `)}
    ${MQ_SMALL_UP(css`
      width: ${$width?.smallUp}px;
    `)}
      ${MQ_LARGE_UP(css`
      width: ${$width?.largeUp}px;
    `)}
  `
);
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

export const ScrollToTopButtonStyled = styled.button(
  ({ theme: { colors } }) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: ${colors.secondaryGray};
    border-radius: 6px;
    border: none;
    cursor: pointer;
    bottom: 50px;
    margin-left: -5%;

    ${MQ_LARGE_DOWN(css`
      display: none;
    `)}
  `
);

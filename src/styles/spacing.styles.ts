import styled, { css } from "styled-components";

export const MarginStyled = styled.div<{ $size?: number }>(
  ({ $size }) => css`
    margin-top: ${$size}px;
  `
);

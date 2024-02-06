import { CssString } from "../../types/style";
import { css } from "styled-components";

export const mq =
  (breakpoint: string) =>
  (content: CssString | string): CssString =>
    css`
      @media ${breakpoint} {
        ${content}
      }
    `;

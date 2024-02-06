import { CssString } from "types/style";
import { css } from "styled-components";

export function mq(breakpoint: string) {
  return function (content: CssString | string): CssString {
    return css`
      @media ${breakpoint} {
        ${content}
      }
    `;
  };
}

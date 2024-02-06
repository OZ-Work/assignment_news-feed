import styled, { css } from "styled-components";
import { ColorSchema } from "enums/style";
import { replaceQuotes } from "utils/methods/string";
import { ResponsiveSize, SizeAndUnit } from "types/style";
import { MQ_LARGE_UP, MQ_MEDIUM_DOWN, MQ_MEDIUM_UP } from "constants/style";

export const ParagraphStyled = styled.p<{
  $fontSize?: ResponsiveSize & Pick<SizeAndUnit, "unit">;
  $fontWeight?: number;
  $color?: ColorSchema;
}>(
  ({ theme: { colors }, $fontSize, $fontWeight, $color }) => css`
    font-size: ${$fontSize?.largeUp}${$fontSize?.unit ?? "px"};
    font-weight: ${$fontWeight ?? 400};
    color: ${$color ? replaceQuotes(colors[$color]) : colors.mainDark};

    ${MQ_MEDIUM_DOWN(css`
      font-size: ${$fontSize?.mediumDown}px;
    `)}
    ${MQ_MEDIUM_UP(css`
      font-size: ${$fontSize?.mediumUp}px;
    `)}
      ${MQ_LARGE_UP(css`
      font-size: ${$fontSize?.largeUp}px;
    `)}
  `
);

export const LimitedParagraphStyled = styled(ParagraphStyled)<{
  $linesLimit?: number;
}>(
  ({ $linesLimit }) => css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${$linesLimit ?? "none"};
    line-clamp: ${$linesLimit ?? "none"};
    -webkit-box-orient: vertical;
  `
);

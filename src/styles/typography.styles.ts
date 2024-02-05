import styled, { css } from "styled-components";
import { ColorSchema } from "@enums/styleProperties";
import { replaceQuotes } from "@utils/methods/stringMutation";
import { SizeAndUnit } from "../types/style";

export const ParagraphStyled = styled.p<{
  $fontSize?: SizeAndUnit;
  $color?: ColorSchema;
}>(
  ({ theme: { colors }, $fontSize, $color }) => css`
    color: ${$color ? replaceQuotes(colors[$color]) : colors.mainDark};
    font-size: ${$fontSize?.size}${(props) => $fontSize?.unit ?? "px"};
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
    line-clamp: ${(props) => $linesLimit ?? "none"};
    -webkit-box-orient: vertical;
  `
);

export const Title = styled(ParagraphStyled)<{
  $fontWeight?: number;
}>(
  ({ $fontWeight }) => css`
    font-weight: ${$fontWeight ?? 500};
  `
);

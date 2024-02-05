import styled, { css } from "styled-components";
import {
  ColorSchema,
  FlexAlign,
  FlexDirection,
  FlexJustify,
  PositionsProperty,
} from "@enums/styleProperties";
import { replaceQuotes } from "@utils/methods/stringMutation";
import { SizeAndUnit } from "../types/style";

export const FlexStyled = styled.div<{
  $justify?: FlexJustify;
  $align?: FlexAlign;
  $direction?: FlexDirection;
  $gap?: number;
  $position?: PositionsProperty;
}>(
  ({ $justify, $align, $direction, $gap, $position }) => css`
  display: flex;
  flex-direction: ${$direction ?? FlexDirection.Row};
  justify-content: ${$justify ?? FlexJustify.Center};
  align-items: ${$align ?? FlexAlign.Start};
  gap: ${$gap ?? 0}px;
  flex: 1;
  position ${$position ?? PositionsProperty.Default}
`
);

export const ContainerStyled = styled.div<{
  $width?: SizeAndUnit;
  $height?: SizeAndUnit;
  $margin?: number[];
  $padding?: number[];
  $radius?: number;
  $backgroundColor?: ColorSchema;
  $position?: PositionsProperty;
}>(
  ({
    theme: { colors },
    $width,
    $height,
    $margin,
    $padding,
    $radius,
    $backgroundColor,
    $position,
  }) => css`
    width: ${$width?.size}${$width?.unit ?? "px"};
    height: ${$height?.size}${$width?.unit ?? "px"};
    margin: ${$margin?.map((size: number) => String(size)).join("px ")}px;
    padding: ${$padding?.map((size: number) => String(size)).join("px ")}px;
    background-color: ${$backgroundColor
      ? replaceQuotes(colors[$backgroundColor])
      : colors.white};
    border-radius: ${$radius ?? 0}px;
    position: ${$position ?? PositionsProperty.Default};
    overflow: hidden;
  `
);

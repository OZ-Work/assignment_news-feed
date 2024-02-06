import { css } from "styled-components";

export type SizeAndUnit = { size: number; unit?: string };
export type ResponsiveSize = {
  smallDown?: number;
  smallUp?: number;
  mediumUp?: number;
  mediumDown?: number;
  largeUp: number;
};
export type CssString = ReturnType<typeof css>;

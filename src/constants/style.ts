import { BreakpointValues } from "enums/style";
import { mq } from "utils/methods/style";

export const BREAKPOINTS = {
  smallUp: `(min-width: ${BreakpointValues.Small}px)`,
  smallDown: `(max-width: ${BreakpointValues.Small}px)`,
  mediumUp: `(min-width: ${BreakpointValues.Medium}px)`,
  mediumDown: `(max-width: ${BreakpointValues.Medium}px)`,
  largeUp: `(min-width: ${BreakpointValues.Large}px)`,
  largeDown: `(max-width: ${BreakpointValues.Large}px)`,
  xLargeUp: `(min-width: ${BreakpointValues.XLarge}px)`,
} as const;

export const MQ_SMALL_UP = mq(BREAKPOINTS.smallUp);
export const MQ_SMALL_DOWN = mq(BREAKPOINTS.smallDown);
export const MQ_MEDIUM_UP = mq(BREAKPOINTS.mediumUp);
export const MQ_MEDIUM_DOWN = mq(BREAKPOINTS.mediumDown);
export const MQ_LARGE_UP = mq(BREAKPOINTS.largeUp);
export const MQ_LARGE_DOWN = mq(BREAKPOINTS.largeDown);
export const MQ_X_LARGE_UP = mq(BREAKPOINTS.xLargeUp);

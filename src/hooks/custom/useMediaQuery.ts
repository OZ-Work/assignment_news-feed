import { useEffect, useState } from "react";
import { BREAKPOINTS } from "constants/style";
import { BreakpointList } from "enums/style";

export function useMediaQuery(breakpoint: BreakpointList) {
  const [isSizeMatch, setIsSizeMatchMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(BREAKPOINTS[breakpoint]);

    if (media.matches !== isSizeMatch) {
      setIsSizeMatchMatches(media.matches);
    }
    const listener = () => {
      setIsSizeMatchMatches(media.matches);
    };

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [isSizeMatch, breakpoint, setIsSizeMatchMatches]);

  return isSizeMatch;
}

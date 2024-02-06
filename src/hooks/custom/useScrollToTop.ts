import { useState } from "react";
import { SCROLL_THRESHOLD } from "constants/style";

export function useScrollToTop() {
  const [isScrollThreshold, setIsScrollThreshold] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsScrollThreshold(scrolled > SCROLL_THRESHOLD);
  };

  window.addEventListener("scroll", toggleVisible);

  return isScrollThreshold;
}

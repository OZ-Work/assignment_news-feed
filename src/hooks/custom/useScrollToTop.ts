import { useState } from "react";

export function useScrollToTop() {
  const [isInView, setIsInView] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setIsInView(scrolled > 100);
  };

  window.addEventListener("scroll", toggleVisible);

  return isInView;
}

import { ScrollToTopButtonStyled } from "styles/components.styles";
import { ArrowLogo } from "components/index";
import { useScrollToTop } from "hooks/custom/useScrollToTop";

export default function ScrollToTopButton() {
  const isScrollThreshold = useScrollToTop();

  if (!isScrollThreshold) return null;

  return (
    <ScrollToTopButtonStyled
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowLogo />
    </ScrollToTopButtonStyled>
  );
}

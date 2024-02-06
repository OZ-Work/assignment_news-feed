import { ScrollToTopButtonStyled } from "styles/components.styles";
import ArrowLogo from "components/Logos/ArrowLogo";
import { useScrollToTop } from "hooks/custom/useScrollToTop";

export default function ScrollToTopButton() {
  const isInView = useScrollToTop();

  if (!isInView) return null;

  return (
    <ScrollToTopButtonStyled
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowLogo />
    </ScrollToTopButtonStyled>
  );
}

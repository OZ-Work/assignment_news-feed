import { ScrollToTopButtonStyled } from "@styles/components.styles";
import { ArrowLogo } from "@components/index";

export default function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollToTopButtonStyled onClick={handleClick}>
      <ArrowLogo />
    </ScrollToTopButtonStyled>
  );
}

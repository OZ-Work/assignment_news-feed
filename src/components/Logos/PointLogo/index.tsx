import { MarginStyled } from "styles/spacing.styles";
import { ContainerStyled } from "styles/containers.styles";
import { BreakpointList, ColorSchema, PositionsProperty } from "enums/style";
import { ImageStyled } from "styles/components.styles";
import { POINT_LOGO } from "constants/url";
import { ParagraphStyled } from "styles/typography.styles";
import { LOGO_TITLE } from "constants/copy";
import { useMediaQuery } from "hooks/custom/useMediaQuery";

export default function PointLogo() {
  const mediumDownBP = useMediaQuery(BreakpointList.MediumDown);
  const backgroundColor = mediumDownBP
    ? ColorSchema.White
    : ColorSchema.MainGray;

  return (
    <ContainerStyled
      $position={PositionsProperty.Relative}
      $backgroundColor={backgroundColor}
    >
      <MarginStyled $size={mediumDownBP ? 30 : 50} />
      <ContainerStyled
        $backgroundColor={backgroundColor}
        $width={{ size: mediumDownBP ? 100 : 170 }}
        $height={{ size: mediumDownBP ? 28 : 48 }}
      >
        <ImageStyled src={POINT_LOGO} />
      </ContainerStyled>
      <MarginStyled $size={5} />
      {getSlogan(mediumDownBP)}
    </ContainerStyled>
  );
}

function getSlogan(mediumDownBP: boolean) {
  if (mediumDownBP) return null;

  return (
    <ParagraphStyled
      $fontSize={{ largeUp: 12 }}
      $color={ColorSchema.SecondaryDark}
    >
      {LOGO_TITLE}
    </ParagraphStyled>
  );
}

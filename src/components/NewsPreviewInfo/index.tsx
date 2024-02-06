import { ContainerStyled, FlexStyled } from "styles/containers.styles";
import {
  LimitedParagraphStyled,
  ParagraphStyled,
} from "styles/typography.styles";
import {
  ArticleTitleStyled,
  ImageStyled,
  NoSourceLogo,
} from "styles/components.styles";
import {
  ColorSchema,
  FlexAlign,
  FlexDirection,
  PositionsProperty,
} from "enums/styleProperties";
import { useMediaQuery } from "hooks/custom/useMediaQuery";
import { BreakpointList } from "../../enums/style";

type NewsPreviewInfoProps = {
  title: { long: string; short: string };
  description: string;
  timestamp: string;
  logo: string;
};

export default function NewsPreviewInfo({
  title,
  description,
  timestamp,
  logo,
}: NewsPreviewInfoProps) {
  const mediumUpBP = useMediaQuery(BreakpointList.MediumUp);

  return (
    <FlexStyled
      $direction={FlexDirection.Column}
      $align={FlexAlign.Start}
      $gap={10}
    >
      <ArticleTitleStyled
        $fontWeight={500}
        $fontSize={{ mediumDown: 14, mediumUp: 18, largeUp: 22 }}
      >
        {mediumUpBP ? title.long : title.short}
      </ArticleTitleStyled>
      {getDescription(mediumUpBP, description)}
      <FlexStyled $gap={5} $align={FlexAlign.Center}>
        <ContainerStyled
          $position={PositionsProperty.Relative}
          $backgroundColor={
            logo ? ColorSchema.White : ColorSchema.SecondaryDark
          }
          $radius={2}
          $width={{ size: 16 }}
          $height={{ size: 16 }}
        >
          {getLogo(logo)}
        </ContainerStyled>
        <ParagraphStyled
          $fontSize={{ mediumDown: 11, mediumUp: 11, largeUp: 12 }}
          $color={ColorSchema.SecondaryDark}
        >
          {timestamp} {getDayPlural(Number(timestamp))}
        </ParagraphStyled>
      </FlexStyled>
    </FlexStyled>
  );
}

function getLogo(logo: string) {
  if (!logo) return <NoSourceLogo />;

  return (
    <FlexStyled>
      <ImageStyled alt="logo" src={logo} />
    </FlexStyled>
  );
}

function getDayPlural(days: number) {
  if (days === 1) return <span>день назад</span>;

  return <span>дня назад</span>;
}

function getDescription(mediumUpBP: boolean, description: string) {
  if (!mediumUpBP) return null;

  return (
    <LimitedParagraphStyled
      $linesLimit={2}
      $fontSize={{ mediumDown: 12, mediumUp: 12, largeUp: 14 }}
    >
      {description}
    </LimitedParagraphStyled>
  );
}

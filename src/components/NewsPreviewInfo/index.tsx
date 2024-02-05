import { ContainerStyled, FlexStyled } from "@styles/containers.styles";
import {
  LimitedParagraphStyled,
  ParagraphStyled,
} from "@styles/typography.styles";
import {
  ArticleTitle,
  ImageStyled,
  NoSourceLogo,
} from "@styles/components.styles";
import {
  ColorSchema,
  FlexAlign,
  FlexDirection,
  PositionsProperty,
} from "@enums/styleProperties";

type NewsPreviewInfoProps = {
  title: string;
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
  return (
    <FlexStyled
      $direction={FlexDirection.Column}
      $align={FlexAlign.Start}
      $gap={10}
    >
      <ArticleTitle>{title}</ArticleTitle>
      <LimitedParagraphStyled $linesLimit={2} $fontSize={{ size: 14 }}>
        {description}
      </LimitedParagraphStyled>
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
          $fontSize={{ size: 12 }}
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

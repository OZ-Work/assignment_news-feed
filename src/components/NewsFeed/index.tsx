import { MarginStyled } from "@styles/spacing.styles";
import { ContainerStyled, FlexStyled } from "@styles/containers.styles";
import { NewsArticle, ScrollToTopButton } from "@components/index";
import {
  ColorSchema,
  FlexAlign,
  FlexDirection,
  FlexJustify,
} from "@enums/styleProperties";
import { ParagraphStyled, Title } from "@styles/typography.styles";
import { ImageStyled } from "@styles/components.styles";
import { POINT_LOGO } from "@constants/url";
import { MonthsRussian } from "@enums/urils";

type NewsFeedProps = {
  articleIDs: string[];
  scrollRef: (node?: Element | null | undefined) => void;
  isFirstRender: boolean;
};

export default function NewsFeed({
  articleIDs,
  scrollRef,
  isFirstRender,
}: NewsFeedProps) {
  return (
    <>
      <FlexStyled
        $align={FlexAlign.Center}
        $justify={FlexJustify.Center}
        $direction={FlexDirection.Column}
      >
        <MarginStyled $size={50} />
        <ContainerStyled
          $backgroundColor={ColorSchema.MainGray}
          $width={{ size: 170 }}
          $height={{ size: 48 }}
        >
          <ImageStyled src={POINT_LOGO} />
        </ContainerStyled>
        <MarginStyled $size={5} />
        <ParagraphStyled
          $fontSize={{ size: 12 }}
          $color={ColorSchema.SecondaryDark}
        >
          Думай и решай свободно
        </ParagraphStyled>
        <ContainerStyled
          $width={{ size: 800 }}
          $margin={[50, 0]}
          $backgroundColor={ColorSchema.White}
          $padding={[24]}
          $radius={8}
        >
          <Title $fontWeight={700} $fontSize={{ size: 28 }}>
            {getTitle()}
          </Title>
          {getNewsArticles(articleIDs)}
        </ContainerStyled>
        <ScrollToTopButton />
      </FlexStyled>
      {getScrollReferenceTarget(isFirstRender, scrollRef)}
    </>
  );
}

function getNewsArticles(articleIDs: string[]) {
  return articleIDs.map((articleID: string, index: number) => (
    <article key={index}>
      <ContainerStyled>
        <MarginStyled $size={24} />
        <NewsArticle articleID={articleID} />
      </ContainerStyled>
    </article>
  ));
}
function getScrollReferenceTarget(
  isFirstRender: boolean,
  ref: (node?: Element | null | undefined) => void
) {
  if (isFirstRender) return null;
  return <ContainerStyled ref={ref} $height={{ size: 1 }} />;
}
function getTitle() {
  const months = [
    MonthsRussian.January,
    MonthsRussian.February,
    MonthsRussian.March,
    MonthsRussian.April,
    MonthsRussian.May,
    MonthsRussian.June,
    MonthsRussian.July,
    MonthsRussian.August,
    MonthsRussian.September,
    MonthsRussian.October,
    MonthsRussian.November,
    MonthsRussian.December,
  ];
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const day = currentDate.getMonth();
  const monthRussian = months.at(
    months.findIndex((m: MonthsRussian) => m === (month as MonthsRussian))
  );

  return (
    <span>
      {day} {monthRussian} {year}
    </span>
  );
}

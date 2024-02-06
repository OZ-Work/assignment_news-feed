import { MarginStyled } from "styles/spacing.styles";
import { ContainerStyled, FlexStyled } from "styles/containers.styles";

import {
  ColorSchema,
  FlexAlign,
  FlexDirection,
  FlexJustify,
  PositionsProperty,
} from "enums/styleProperties";
import { ParagraphStyled } from "styles/typography.styles";
import { NewsArticle, PointLogo, ScrollToTopButton } from "components/index";
import { useMediaQuery } from "hooks/custom/useMediaQuery";
import { BreakpointList } from "enums/style";
import { getFormattedDate } from "../../utils/methods/date";

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
  const smallDownBP = useMediaQuery(BreakpointList.SmallDown);
  const mediumDownBP = useMediaQuery(BreakpointList.MediumDown);
  const feedMargin = mediumDownBP ? [20, 0, 40] : [50, 0];
  const {
    day: dateHeaderDay,
    month: dateHeaderMonth,
    year: dateHeaderYear,
  } = getFormattedDate(new Date());

  return (
    <>
      <FlexStyled
        $align={FlexAlign.Center}
        $justify={FlexJustify.Center}
        $direction={FlexDirection.Column}
      >
        <PointLogo />
        <ContainerStyled
          $position={PositionsProperty.Relative}
          $maxWidth={{ size: 800 }}
          $margin={feedMargin}
          $backgroundColor={ColorSchema.White}
          $padding={[smallDownBP ? 8 : 24]}
          $radius={8}
        >
          <ScrollToTopButton />
          <ParagraphStyled
            $fontWeight={700}
            $fontSize={{ largeUp: mediumDownBP ? 24 : 28 }}
          >
            {dateHeaderDay} {dateHeaderMonth} {dateHeaderYear}
          </ParagraphStyled>
          {getNewsArticles(articleIDs)}
        </ContainerStyled>
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

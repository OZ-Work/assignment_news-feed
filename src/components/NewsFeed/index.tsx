import { MarginStyled } from "styles/spacing.styles";
import { ContainerStyled } from "styles/containers.styles";
import { ParagraphStyled } from "styles/typography.styles";
import { NewsArticle, ScrollToTopButton } from "components/index";
import { getFormattedDate } from "utils/methods/date";
import { useMediaQuery } from "hooks/custom/useMediaQuery";
import { BreakpointList } from "enums/style";
import FeedCard from "components/FeedCard";

type NewsFeedProps = {
  articleIds: string[];
  scrollRef: (node?: Element | null | undefined) => void;
  isFirstRender: boolean;
};

export default function NewsFeed({
  articleIds,
  scrollRef,
  isFirstRender,
}: NewsFeedProps) {
  const mediumDownBP = useMediaQuery(BreakpointList.MediumDown);
  const {
    day: dateHeaderDay,
    month: dateHeaderMonth,
    year: dateHeaderYear,
  } = getFormattedDate(new Date());

  return (
    <>
      <FeedCard>
        <>
          <ScrollToTopButton />
          <ParagraphStyled
            $fontWeight={700}
            $fontSize={{ largeUp: mediumDownBP ? 24 : 28 }}
          >
            {dateHeaderDay} {dateHeaderMonth} {dateHeaderYear}
          </ParagraphStyled>
          {getNewsArticles(articleIds)}
        </>
      </FeedCard>
      {getScrollReferenceTarget(isFirstRender, scrollRef)}
    </>
  );
}

function getNewsArticles(articleIds: string[]) {
  return articleIds.map((articleId: string, index: number) => (
    <article key={index}>
      <ContainerStyled>
        <MarginStyled $size={24} />
        <NewsArticle articleId={articleId} />
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

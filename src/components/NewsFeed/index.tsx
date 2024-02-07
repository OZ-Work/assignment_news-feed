import { MarginStyled } from "styles/spacing.styles";
import { ContainerStyled, FlexStyled } from "styles/containers.styles";
import { ParagraphStyled } from "styles/typography.styles";
import {
  ArticleLoader,
  NewsArticle,
  PageCard,
  PointLogo,
  ScrollToTopButton,
} from "components/index";
import { getFormattedDate } from "utils/methods/date";
import { useMediaQuery } from "hooks/custom/useMediaQuery";
import { BreakpointList, ColorSchema } from "enums/style";
import { FETCH_LIMIT } from "constants/api";

type NewsFeedProps = {
  isLoading: boolean;
  articleIds: string[];
  scrollRef: (node?: Element | null | undefined) => void;
  isFirstRender: boolean;
};

export default function NewsFeed({
  isLoading,
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
      <FlexStyled>
        <PointLogo />
      </FlexStyled>
      <PageCard>
        <>
          <ScrollToTopButton />
          <ParagraphStyled
            $fontWeight={700}
            $fontSize={{ largeUp: mediumDownBP ? 24 : 28 }}
          >
            {dateHeaderDay} {dateHeaderMonth} {dateHeaderYear}
          </ParagraphStyled>
          {getNewsArticles(articleIds, isLoading, FETCH_LIMIT)}
        </>
      </PageCard>
      {getScrollReferenceTarget(isFirstRender, scrollRef)}
    </>
  );
}

function getNewsArticles(
  articleIds: string[],
  isLoading: boolean,
  numberOfLoaders: number
) {
  if (isLoading) {
    const articleLoaders = [];

    for (let i = 0; i < numberOfLoaders; i++)
      articleLoaders.push(
        <ContainerStyled key={i}>
          <MarginStyled $size={24} />
          <ArticleLoader />
        </ContainerStyled>
      );

    return articleLoaders;
  }

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

  return (
    <ContainerStyled
      ref={ref}
      $height={{ size: 1 }}
      $backgroundColor={ColorSchema.Transparent}
    />
  );
}

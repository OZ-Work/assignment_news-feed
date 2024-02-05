import { ArticleID } from "../../types/article";

export async function fetchUpdatedArticlesList(
  inView: boolean,
  fetchMore: Function,
  articles: ArticleID[]
) {
  if (inView) {
    await fetchMore({
      variables: { take: 10, skip: articles.length },
      updateQuery: (
        previousArticles: { contents: ArticleID[] },
        data: {
          fetchMoreResult: { contents: ArticleID[] };
          variables: { skip: number; take: number };
        }
      ) => {
        if (!data.fetchMoreResult) return previousArticles;

        return {
          ...previousArticles,
          contents: [
            ...previousArticles.contents,
            ...data.fetchMoreResult.contents,
          ],
        };
      },
    });
  }
}

import { ArticleID } from "types/article";
import { FETCH_LIMIT } from "constants/api";

export async function fetchMoreArticles(
  inView: boolean,
  fetchMore: Function,
  articles: ArticleID[]
) {
  if (inView) {
    await fetchMore({
      variables: { take: FETCH_LIMIT, skip: articles.length },
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

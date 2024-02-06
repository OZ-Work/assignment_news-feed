import { useQuery } from "@apollo/client";
import { FETCH_LIMIT } from "constants/apollo";
import { getIds } from "schemas/getIds";

export function useArticleIDs() {
  const { data, loading, error, fetchMore } = useQuery(getIds(), {
    variables: { take: FETCH_LIMIT, skip: 0 },
  });

  const articleIDs = data?.contents.map(
    (content: { id: string }) => content.id
  );

  return { data: articleIDs, loading, error, fetchMore };
}

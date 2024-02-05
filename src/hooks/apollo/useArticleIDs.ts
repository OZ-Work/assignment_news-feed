import { gql, useQuery } from "@apollo/client";

export function useArticleIDs() {
  const GET_IDS = gql`
    query GetIDs($take: Int, $skip: Int) {
      contents(
        project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1"
        lang: "ru"
        skip: $skip
        take: $take
      ) {
        id
      }
    }
  `;

  const { data, loading, error, fetchMore } = useQuery(GET_IDS, {
    variables: { take: 10, skip: 0 },
  });

  const articleIDs = data?.contents.map(
    (content: { id: string }) => content.id
  );

  return { data: articleIDs, loading, error, fetchMore };
}

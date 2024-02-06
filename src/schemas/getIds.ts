import { gql } from "@apollo/client";

export function getIds() {
  return gql(`
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
  `);
}

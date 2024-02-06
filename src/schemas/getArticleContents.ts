import { gql } from "@apollo/client";
import { PROJECT_ID } from "constants/id";
import { FULL_URL } from "constants/url";

export function getArticleContents(id: string) {
  return gql(`
        query GetContent{
            content(id: "${id}", project_id: "${PROJECT_ID}", full_url: "${FULL_URL}") {
                parents {attachment type id dates{posted}}
                thumbnail
                banner_info {desktop name}
                tags
                url
                decoration
                album {image source}
                title {long short}
                description {intro}
            }
        }
    `);
}

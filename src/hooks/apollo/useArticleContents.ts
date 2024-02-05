import moment from "moment";
import { gql, useQuery } from "@apollo/client";
import { PROJECT_ID } from "@constants/id";
import {
  ARTICLE_SOURCE_LOGO_URI,
  FULL_URL,
  THUMBNAIL_URI,
} from "@constants/url";
import { replaceHTMLEntities } from "@utils/methods/stringMutation";
import { ArticleParentType } from "@enums/articleProperties";

export function useArticleContents(id: string) {
  const GET_CONTENT = gql`
        query GetContent{
            content(id: "${id}", project_id: "${PROJECT_ID}", full_url: "${FULL_URL}") {
                parents {attachment type id dates{posted}}
                thumbnail
                banner_info {desktop name}
                tags
                url
                decoration
                album {image source}
                title {long} 
                description {intro}
          }
        }
    `;

  const { data, loading, error } = useQuery(GET_CONTENT);

  const parentSourceIndex = data?.content.parents.findIndex(
    (parent: { type: string; id: string; attachment: string }) =>
      parent.type === ArticleParentType.Source
  );
  const parentSource = data?.content.parents.at(parentSourceIndex);

  const articleDate = moment
    .duration(
      moment(new Date()).diff(
        moment(new Date(Number(parentSource?.dates.posted)))
      )
    )
    .asDays();

  const title = replaceHTMLEntities(data?.content.title?.long);
  const description = replaceHTMLEntities(data?.content.description.intro);
  const timestamp = String(Math.round(articleDate));
  const thumbnail = `${THUMBNAIL_URI}/${data?.content.thumbnail}`;
  const logo = parentSource?.attachment
    ? `${ARTICLE_SOURCE_LOGO_URI}/${parentSource.attachment}`
    : "";

  return {
    data: { id, title, description, timestamp, thumbnail, logo },
    loading,
    error,
  };
}

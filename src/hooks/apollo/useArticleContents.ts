import moment from "moment";
import { useQuery } from "@apollo/client";
import { ARTICLE_SOURCE_LOGO_URI, THUMBNAIL_URI } from "constants/url";
import { replaceHTMLEntities } from "utils/methods/string";
import { ArticleParentType } from "enums/article";
import { getArticleContents } from "schemas/getArticleContents";

export function useArticleContents(id: string) {
  const { data, loading, error } = useQuery(getArticleContents(id));

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
  const timestamp = String(Math.round(articleDate));
  const description = replaceHTMLEntities(data?.content.description.intro);
  const thumbnail = `${THUMBNAIL_URI}/${data?.content.thumbnail}`;
  const logo = parentSource?.attachment
    ? `${ARTICLE_SOURCE_LOGO_URI}/${parentSource.attachment}`
    : "";
  const title = {
    long: replaceHTMLEntities(data?.content.title?.long),
    short: replaceHTMLEntities(data?.content.title?.short),
  };

  return {
    data: { id, timestamp, description, thumbnail, logo, title },
    loading,
    error,
  };
}

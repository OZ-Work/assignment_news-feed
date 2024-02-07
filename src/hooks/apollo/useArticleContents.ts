import moment from "moment";
import { useQuery } from "@apollo/client";
import { ARTICLE_SOURCE_LOGO_URI, THUMBNAIL_URI } from "constants/url";
import { replaceHTMLEntities } from "utils/methods/string";
import { ArticleParentType } from "enums/article";
import { getArticleContents } from "schemas/getArticleContents";

export function useArticleContents(id: string) {
  const { data, loading, error } = useQuery(getArticleContents(id));

  if (loading)
    return {
      data: null,
      loading,
      error,
    };

  const {
    content: {
      parents,
      description: unformattedDescription,
      thumbnail: thumbnailName,
      title: unformattedTitle,
    },
  } = data;

  const parentSourceIndex = parents.findIndex(
    (parent: { type: string; id: string; attachment: string }) =>
      parent.type === ArticleParentType.Source
  );
  const parentSource = parents.at(parentSourceIndex);
  const articleDate = Math.round(
    moment
      .duration(
        moment(new Date()).diff(
          moment(new Date(Number(parentSource?.dates.posted)))
        )
      )
      .asDays()
  );

  const title = {
    long: replaceHTMLEntities(unformattedTitle?.long),
    short: replaceHTMLEntities(unformattedTitle?.short),
  };
  const description = replaceHTMLEntities(unformattedDescription.intro);
  const thumbnail = `${THUMBNAIL_URI}/${thumbnailName}`;
  const timestamp = {
    date: parentSource?.dates.posted,
    daysSince: String(articleDate),
  };
  const logo = getLogo(parentSource?.attachment);

  return {
    data: { id, timestamp, description, thumbnail, logo, title },
    loading,
    error,
  };
}

function getLogo(attachment: string) {
  if (!attachment) return "";
  return `${ARTICLE_SOURCE_LOGO_URI}/${attachment}`;
}

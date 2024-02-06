import { FlexStyled } from "styles/containers.styles";
import { useArticleContents } from "hooks/apollo/useArticleContents";
import {
  ArticleLoader,
  NewsPreviewCard,
  NewsPreviewInfo,
} from "components/index";

type NewsArticleProps = {
  articleId: string;
};
export default function NewsArticle({ articleId }: NewsArticleProps) {
  const { data, loading } = useArticleContents(articleId);
  if (loading) return <ArticleLoader />;

  const { thumbnail, title, description, timestamp, logo } = data;
  return (
    <FlexStyled $gap={16}>
      <NewsPreviewCard imageUrl={thumbnail} imageAlt={title.short} />
      <NewsPreviewInfo
        title={title}
        description={description}
        timestamp={timestamp}
        logo={logo}
      />
    </FlexStyled>
  );
}

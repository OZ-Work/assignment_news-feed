import { FlexStyled } from "@styles/containers.styles";
import { useArticleContents } from "@hooks/apollo/useArticleContents";
import { NewsPreviewCard, NewsPreviewInfo } from "@components/index";
import { Spinner } from "@styles/components.styles";

type NewsArticleProps = {
  articleID: string;
};
export default function NewsArticle({ articleID }: NewsArticleProps) {
  const { data, loading } = useArticleContents(articleID);

  if (loading)
    return (
      <FlexStyled>
        <Spinner $size={20} />
      </FlexStyled>
    );

  const { thumbnail, title, description, timestamp, logo } = data;

  return (
    <FlexStyled $gap={16}>
      <NewsPreviewCard imageUrl={thumbnail} imageAlt={title} />
      <NewsPreviewInfo
        title={title}
        description={description}
        timestamp={timestamp}
        logo={logo}
      />
    </FlexStyled>
  );
}

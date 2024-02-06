import { ImageContainerStyled, ImageStyled } from "styles/components.styles";

type NewsPreviewCardProps = { imageUrl: string; imageAlt: string };
export default function NewsPreviewCard({
  imageUrl,
  imageAlt,
}: NewsPreviewCardProps) {
  return (
    <ImageContainerStyled
      $width={{ smallDown: 144, smallUp: 200, largeUp: 240 }}
      $radius={4}
    >
      <ImageStyled alt={imageAlt} src={imageUrl} />
    </ImageContainerStyled>
  );
}

import { ImageStyled } from "@styles/components.styles";
import { ContainerStyled } from "@styles/containers.styles";

type NewsPreviewCardProps = { imageUrl: string; imageAlt: string };
export default function NewsPreviewCard({
  imageUrl,
  imageAlt,
}: NewsPreviewCardProps) {
  return (
    <ContainerStyled $width={{ size: 240 }} $radius={4}>
      <ImageStyled alt={imageAlt} src={imageUrl} />
    </ContainerStyled>
  );
}

import { FlexGrowStyled, FlexStyled } from "styles/containers.styles";
import { ImageContainerStyled } from "styles/components.styles";
import { default as Loader } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ArticleLoader() {
  return (
    <FlexStyled $gap={10}>
      <ImageContainerStyled
        $width={{ smallDown: 144, smallUp: 200, largeUp: 240 }}
      >
        <Loader count={1} height={100} />
      </ImageContainerStyled>
      <FlexGrowStyled>
        <Loader count={1} height={45} />
        <Loader count={1} height={30} />
        <Loader count={1} height={20} />
      </FlexGrowStyled>
    </FlexStyled>
  );
}

import { ContainerStyled, FlexStyled } from "styles/containers.styles";
import { BreakpointList, ColorSchema, PositionsProperty } from "enums/style";
import React, { ReactElement } from "react";
import { useMediaQuery } from "hooks/custom/useMediaQuery";

type FeedCardProps = { children: ReactElement };
export default function FeedCard({ children }: FeedCardProps) {
  const smallDownBP = useMediaQuery(BreakpointList.SmallDown);
  const mediumDownBP = useMediaQuery(BreakpointList.MediumDown);
  const feedMargin = mediumDownBP ? [20, 0, 40] : [50, 0];

  return (
    <FlexStyled>
      <ContainerStyled
        $position={PositionsProperty.Relative}
        $maxWidth={{ size: 800 }}
        $margin={feedMargin}
        $backgroundColor={ColorSchema.White}
        $padding={[smallDownBP ? 8 : 24]}
        $radius={8}
        $flexGrow={1}
      >
        {children}
      </ContainerStyled>
    </FlexStyled>
  );
}

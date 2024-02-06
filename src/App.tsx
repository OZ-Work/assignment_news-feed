import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { useInView } from "react-intersection-observer";
import { POINT_URI } from "constants/api";
import { useArticleIDs } from "hooks/apollo/useArticleIDs";
import { useFirstRender } from "hooks/custom/useFirstRender";
import { GlobalStyle, GlobalTheme } from "styles/default.styles";
import { ArticleLoader, FeedCard, NewsFeed, PointLogo } from "components/index";
import { fetchMoreArticles } from "utils/fetch/fetchMoreArticles";
import { ContainerStyled, FlexStyled } from "./styles/containers.styles";
import { MarginStyled } from "./styles/spacing.styles";
import { FETCH_LIMIT } from "./constants/apollo";

const client = new ApolloClient({
  uri: POINT_URI,
  cache: new InMemoryCache(),
});

function App() {
  const { inView, ref: scrollRef } = useInView();
  const { data, loading, fetchMore } = useArticleIDs();
  const { isFirstRender } = useFirstRender();

  if (inView) fetchMoreArticles(inView, fetchMore, data);

  if (loading)
    return (
      <FeedCard>
        <>{getArticleLoaders(FETCH_LIMIT)}</>
      </FeedCard>
    );
  return (
    <>
      <FlexStyled>
        <PointLogo />
      </FlexStyled>
      <NewsFeed
        articleIds={data}
        scrollRef={scrollRef}
        isFirstRender={isFirstRender}
      />
    </>
  );
}

function getArticleLoaders(numberOfArticles: number) {
  const articleLoaders = [];

  for (let i = 0; i < numberOfArticles; i++)
    articleLoaders.push(
      <ContainerStyled key={i}>
        <MarginStyled $size={24} />
        <ArticleLoader />
      </ContainerStyled>
    );

  return articleLoaders;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={GlobalTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>
);

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { useInView } from "react-intersection-observer";
import { POINT_URI } from "constants/api";
import { useArticleIDs } from "hooks/apollo/useArticleIDs";
import { useFirstRender } from "hooks/custom/useFirstRender";
import { Spinner } from "styles/components.styles";
import { fetchUpdatedArticlesList } from "utils/methods/fetch";
import { GlobalStyle, GlobalTheme } from "styles/default.styles";
import { NewsFeed } from "components/index";

const client = new ApolloClient({
  uri: POINT_URI,
  cache: new InMemoryCache(),
});

function App() {
  const { inView, ref: scrollRef } = useInView();
  const { data, loading, fetchMore } = useArticleIDs();
  const { isFirstRender } = useFirstRender();

  if (inView) fetchUpdatedArticlesList(inView, fetchMore, data);
  if (loading) return <Spinner />;

  return (
    <NewsFeed
      articleIDs={data}
      scrollRef={scrollRef}
      isFirstRender={isFirstRender}
    />
  );
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

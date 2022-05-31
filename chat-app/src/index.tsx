import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "normalize.css/normalize.css";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Root from "#root/components/Root";
import apolloClient from "#root/api/apolloClient";

const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
	}

	html, body, #app { 
		width: 100%;
		height: 100%;
	}
`;

render(
  <ApolloProvider client={apolloClient}>
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <Root />
      </BrowserRouter>
    </RecoilRoot>
  </ApolloProvider>,
  document.getElementById("app")
);

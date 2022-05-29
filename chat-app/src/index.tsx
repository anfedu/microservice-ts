import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "normalize.css/normalize.css";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import Root from "#root/components/Root";
import apolloClient from "#root/api/apolloClient";

render(
  <ApolloProvider client={apolloClient}>
    <RecoilRoot>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </RecoilRoot>
  </ApolloProvider>,
  document.getElementById("app")
);

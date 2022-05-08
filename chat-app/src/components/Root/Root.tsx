import React, { useEffect } from "react";
import { Spinner } from "@blueprintjs/core";
import { gql } from "@apollo/client";
import styled from "styled-components";

import apolloClient from "#root/api/apolloClient";

const SpinnerWrapper = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const query = gql`
  {
    userSession(me: true) {
      user {
        username
      }
    }
  }
`;

export default function Root() {
  useEffect(() => {
    apolloClient
      .query({ query })
      .then((res) => console.log("query response : ", res));
  }, []);

  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
}

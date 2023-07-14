"use client";

import { Todo } from "@/components";
import styled from "styled-components";

const AppContainer = styled.main`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
`;

export default function Home() {
  return (
    <AppContainer>
      <Todo />
    </AppContainer>
  );
}

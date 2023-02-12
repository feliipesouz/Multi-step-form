import React, { ReactNode } from "react";
import Header from "../Header";
import { Area, Container, Page, Sidebar, Steps } from "./styles";

type Props = {
  children: ReactNode;
};

const Theme = ({ children }: Props) => {
  return (
    <Container>
      <Area>
        <Header />

        <Steps>
          <Sidebar>;;;</Sidebar>
          <Page>{children}</Page>
        </Steps>
      </Area>
    </Container>
  );
};

export default Theme;

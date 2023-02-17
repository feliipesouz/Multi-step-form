import React, { ReactNode } from "react";
import { useForm } from "../../contexts/FormContext";
import Header from "../Header";
import SideBarItem from "../SideBarItem";
import { Area, Container, Page, Sidebar, Steps } from "./styles";

type Props = {
  children: ReactNode;
};

const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <Container>
      <Area>
        <Header />

        <Steps>
          <Sidebar>
            <SideBarItem
              title={"Personal"}
              description={"Identify yourself"}
              icon={"profile"}
              path={"/"}
              active={state.currentStep === 1}
            />

            <SideBarItem
              title={"Professional"}
              description={"Your level"}
              icon={"book"}
              path={"/step2"}
              active={state.currentStep === 2}
            />

            <SideBarItem
              title={"Contacts"}
              description={"How to find you"}
              icon={"mail"}
              path={"/step3"}
              active={state.currentStep === 3}
            />
          </Sidebar>
          <Page>{children}</Page>
        </Steps>
      </Area>
    </Container>
  );
};

export default Theme;

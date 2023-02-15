import React from "react";
import { Container, Description, Icon, Info, Title } from "./styles";

type Props = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
};
const SelectOption = ({
  title,
  description,
  icon,
  selected,
  onClick,
}: Props) => {
  return (
    <Container onClick={onClick} selected={selected}>
      <Icon>{icon}</Icon>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  );
};

export default SelectOption;

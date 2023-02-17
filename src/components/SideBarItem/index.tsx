import React from "react";
import { Link } from "react-router-dom";
import { Container, Info, Title, Description, Point, IconArea } from "./styles";
import { ReactComponent as ProfileIcon } from "../../svgs/profile.svg";
import { ReactComponent as BookIcon } from "../../svgs/book.svg";
import { ReactComponent as MailIcon } from "../../svgs/mail.svg";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};
const SideBarItem = ({ title, description, icon, path, active }: Props) => {
  console.log(active)
  return (
    <Container>
      <Link to={path}>
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
        <IconArea active={active}>
          {icon === "profile" && (
            <ProfileIcon fill={"white"} width={24} height={24} />
          )}
          {icon === "book" && (
            <BookIcon fill={"white"} width={24} height={24} />
          )}
          {icon === "mail" && (
            <MailIcon fill={"white"} width={24} height={24} />
          )}
        </IconArea>
        <Point active={active}></Point>
      </Link>
    </Container>
  );
};

export default SideBarItem;

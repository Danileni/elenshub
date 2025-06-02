import React, { JSX } from "react";
import { socialIconClass } from "./styles";
import MailFillIcon from "remixicon-react/MailFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import { Social } from "../../constants/socialList";

export const getIconByName = (name: string): JSX.Element | null => {
  switch (name) {
    case Social.Mail:
      return <MailFillIcon size={22} className={socialIconClass} />;
    case Social.LinkedIn:
      return <LinkedinFillIcon size={24} className={socialIconClass} />;
    case Social.GitHub:
      return <GithubFillIcon size={24} className={socialIconClass} />;
    default:
      return null;
  }
};

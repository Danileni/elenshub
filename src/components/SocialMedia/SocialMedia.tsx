import React, { FC } from "react";
import { getSocialListClass } from "./styles";
import { getIconByName } from "./helpers";
import { socialList } from "../../constants/socialList";
import { ComponentProps } from "../../types/common";
import { SocialMediaProps } from "./types";

const SocialMedia: FC<ComponentProps> = ({ className }) => {
  const social = socialList.map(({ name, url }: SocialMediaProps) => (
    <li key={name}>
      <a href={url} target="_blank" rel="noreferrer" aria-label={name}>
        {getIconByName(name)}
      </a>
    </li>
  ));

  return <ul className={getSocialListClass(className)}>{social}</ul>;
};
export default SocialMedia;

import React, { FC, JSX } from "react";
import {
  cardWrapperClass,
  descriptionTextClass,
  getBadgeClass,
  getTitleLinkClass,
  linkItemClass,
  linksListClass,
  techStackWrapperClass,
} from "./styles";
import { Heading } from "../index";
import Card from "./components/Card";
import Badge from "./components/Badge";
import { LinkProps, ProjectProps } from "../../../types/common";

const ProjectCard: FC<ProjectProps> = ({ title, description, techStacks, links }) => {
  const techStacksEntry = techStacks.map(
    (techStack: string, index: number): JSX.Element => (
      <Badge key={index} className={getBadgeClass()}>
        {techStack}
      </Badge>
    ),
  );

  const linksEntry = links.map(
    (link: LinkProps, index: number): JSX.Element => (
      <li key={index} className={linkItemClass}>
        <a href={link.url} target="_blank" rel="noreferrer" aria-label={link.label}>
          {link.icon}
        </a>
      </li>
    ),
  );

  const primaryLink =
    links.find(({ label }) => label === "Source code")?.url ??
    links.find(({ label }) => label === "Live")?.url;

  return (
    <Card className={cardWrapperClass}>
      <header>
        <Heading level="h3">
          <a href={primaryLink} className={getTitleLinkClass()} target="_blank" rel="noreferrer">
            {title}
          </a>
        </Heading>
        <p className={descriptionTextClass}>{description}</p>
      </header>
      <footer>
        <div className={techStackWrapperClass}>{techStacksEntry}</div>
        <ul className={linksListClass}>{linksEntry}</ul>
      </footer>
    </Card>
  );
};
export default ProjectCard;

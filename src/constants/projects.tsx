import React from "react";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import ExternalLinkFillIcon from "remixicon-react/ExternalLinkFillIcon";

import { InlineLink } from "../components/ReusableComponents";

import { LinkProps, ProjectProps } from "../types/common";
import { SocialLinks } from "./socialList";
import { TECH_FILTERS } from "./techFilters";
import { REPOS_LIST } from "./reposList";

const github: LinkProps = {
  label: "Source code",
  icon: <GithubFillIcon size={22} />,
};

const live: LinkProps = {
  label: "Live",
  icon: <ExternalLinkFillIcon size={22} />,
};

const getGitHubUrl = (repoName: string): string => {
  return `${SocialLinks.GitHub}/${repoName}`;
};

// Generate project links based on repository and optional live URL
const getLinks = (githubRepo: string, url?: string): LinkProps[] => {
  const links: LinkProps[] = [{ ...github, url: getGitHubUrl(githubRepo) }];
  if (url) {
    links.push({ ...live, url });
  }
  return links;
};

export const projects: ProjectProps[] = [
  {
    id: "meeteleni",
    featured: true,
    title: "MEETELENI",
    description: "Personal portfolio built with React, TypeScript and Tailwind CSS.",
    techStacks: [TECH_FILTERS.REACT, TECH_FILTERS.TYPESCRIPT, TECH_FILTERS.TAILWINDCSS],
    otherTechStacks: [TECH_FILTERS.HTML_CSS, TECH_FILTERS.JAVASCRIPT],
    category: "Front-end development",
    links: getLinks(REPOS_LIST.ELENSHUB),
  },
  {
    id: "spark-chat",
    featured: true,
    title: "SparkChat",
    description:
      "An Android development project featuring Firebase Cloud Messaging, created as part of my university coursework.",
    techStacks: [TECH_FILTERS.ANDROID_SDK, TECH_FILTERS.FIREBASE],
    category: "Mobile development",
    links: getLinks(REPOS_LIST.SPARK_CHAT),
  },
  {
    id: "travel-management-app",
    featured: true,
    title: "Travel Management App",
    description: (
      <span>
        A travel management system app built with PHP. Built as a probation project during my
        internship at <InlineLink href="https://www.epignosishq.com/">Epignosis</InlineLink>.
      </span>
    ),
    techStacks: [TECH_FILTERS.PHP, TECH_FILTERS.MYSQL],
    otherTechStacks: [TECH_FILTERS.HTML_CSS, TECH_FILTERS.JAVASCRIPT],
    category: "Web development",
    links: getLinks(REPOS_LIST.PHP_ASSIGNMENT_TRAVEL_MANAGEMENT),
  },
  {
    id: "book-app",
    featured: true,
    title: "Bookstore App",
    description:
      "An Android development project featuring a Bookstore, created as part of my university coursework.",
    techStacks: [TECH_FILTERS.ANDROID_SDK, TECH_FILTERS.JAVA],
    category: "Mobile development",
    links: getLinks(REPOS_LIST.BOOK_APP),
  },
  {
    id: "health-appointment-management-app",
    featured: true,
    title: "Health Appointment Management App",
    description:
      "A Health Appointment Management App developed using C# and Bootstrap, created as part of my university project.",
    techStacks: [TECH_FILTERS.CSHARP, TECH_FILTERS.BOOTSTRAP],
    otherTechStacks: [TECH_FILTERS.HTML_CSS, TECH_FILTERS.JAVASCRIPT],
    category: "Full-stack development",
    links: getLinks(REPOS_LIST.HEALTH_APP_MANAGEMENT),
  },
];

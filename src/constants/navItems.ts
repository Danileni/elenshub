import { URLS } from "./urls";
import { NavItemsProps } from "../types/common";

export const TabKey = {
  Home: "Home",
  Blog: "Blog",
  Projects: "Projects",
  About: "About",
} as const;

export const navItems: NavItemsProps[] = [
  {
    name: TabKey.Home,
    href: URLS.root,
    isNew: false,
  },
  {
    name: TabKey.Blog,
    href: URLS.blog,
    isNew: true,
  },
  {
    name: TabKey.Projects,
    href: URLS.projects,
    isNew: false,
  },
  {
    name: TabKey.About,
    href: URLS.about,
    isNew: false,
  },
];

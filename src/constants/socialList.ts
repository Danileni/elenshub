import { SocialMediaProps } from "../components/SocialMedia/types";
import { config } from "../config";

export const SocialLinks = {
  Gmail: config.gmailUser,
  GitHub: config.githubUrl,
  LinkedIn: config.linkedInUrl,
} as const;

export const Social = {
  Mail: "Mail",
  LinkedIn: "LinkedIn",
  GitHub: "GitHub",
} as const;

export const socialList: SocialMediaProps[] = [
  {
    name: Social.Mail,
    url: `mailto:${SocialLinks.Gmail}`,
  },
  {
    name: Social.LinkedIn,
    url: SocialLinks.LinkedIn,
  },
  {
    name: Social.GitHub,
    url: SocialLinks.GitHub,
  },
];

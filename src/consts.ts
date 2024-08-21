import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Ryder Mitchell",
  EMAIL: "rmitche@pitzer.edu",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Ryder Mitchell's portfolio website. Hello, world!",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Articles about topics I'm a bit passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "A compile-ation of the places I've worked at.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/rmitchellPitzer"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/rmitche",
  }
];

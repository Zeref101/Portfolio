export const config = {
  name: "Shreyas Mohanty",
  role: "Engineer",
  disciplines: [
    "Relentless Learner",
    "Curious Mind",
    "Explorer",
    "Question Asker",
  ],
  twitter: "https://x.com/Shreyas_M0228",
  linkedin: "https://www.linkedin.com/in/shreyas-mohanty-8a899524a/",
  github: "Zeref101",
  ascii:
    "__  __  __\n\u005C \u005C \u005C \u005C \u005C\u2215\n \u005C \u005C\u2215\u005C \u005C\n  \u005C\u2215  \u005C\u2215\n",
};
export const navLinks = [
  {
    label: "Projects",
    pathname: "/#project-1",
  },
  {
    label: "Details",
    pathname: "/#details",
  },
  // {
  //   label: 'Articles',
  //   pathname: '/articles',
  // },
  {
    label: "Skills",
    pathname: "/skills",
  },
  {
    label: "Contact",
    pathname: "/contact",
  },
];

export const socialLinks = [
  {
    label: "Twitter",
    url: `${config.twitter}`,
    icon: "twitter",
  },
  {
    label: "LinkedIn",
    url: `${config.linkedin}`,
    icon: "linkedin",
  },
  {
    label: "GitHub",
    url: `https://github.com/${config.github}`,
    icon: "github",
  },
];

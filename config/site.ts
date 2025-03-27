export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "AlphaLabs: Computer Simulations of Classical Mechanics",
  description: "Visualize and analyze physcial phenomena in Google Colab.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Collection",
      href: "/collection",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Collection",
      href: "/collection",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/commanderxa/alphalabs",
    mujoco: "https://mujoco.org/"
  },
};

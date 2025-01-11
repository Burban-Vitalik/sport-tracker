export type NavItem = {
  title: string;
  url: string;
  isActive?: boolean;
};

export type NavSection = {
  title: string;
  url: string;
  items: NavItem[];
};

export const data = {
  versions: ["Client", "Coach", "Admin"],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      items: [
        {
          title: "Page1",
          url: "/dashboard/page1",
        },
        {
          title: "Page2",
          url: "/dashboard/page2",
        },
        {
          title: "Page3",
          url: "/dashboard/page3",
        },
        {
          title: "Programs",
          url: "/dashboard/programs",
        },
      ],
    },
    {
      title: "Users",
      url: "/users",
      items: [
        {
          title: "Users",
          url: "/users",
        },
      ],
    },
  ],
};

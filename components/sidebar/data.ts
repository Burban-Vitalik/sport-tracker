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

const currentPrograms = [
  {
    title: "Program 1",
    url: "/dashboard/programs/41",
  },
  {
    title: "Program 2",
    url: "/dashboard/programs/41",
  },
  {
    title: "Program 3",
    url: "/dashboard/programs/41",
  },
];

export const data = {
  versions: ["Client", "Coach", "Admin"],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      items: [
        {
          title: "Overview",
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
      ],
    },
    {
      title: "Workout",
      url: "/workouts",
      items: [
        {
          title: "All Programs",
          url: "/dashboard/programs",
        },
        ...currentPrograms.map((program) => ({
          title: program.title,
          url: program.url,
        })),
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

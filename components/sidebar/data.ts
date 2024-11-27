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
      url: "#",
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Progress",
          url: "#",
          isActive: true,
        },
        {
          title: "Daily Goals",
          url: "#",
        },
      ],
    },
    {
      title: "Workouts",
      url: "#",
      items: [
        {
          title: "Workout Plans",
          url: "#",
        },
        {
          title: "Exercises",
          url: "#",
        },
        {
          title: "Create New Workout",
          url: "#",
        },
        {
          title: "Workout History",
          url: "#",
        },
      ],
    },
  ],
};

import { UserRole } from "@prisma/client";
import {
  HomeIcon,
  LucideIcon,
  MessageCircle,
  Notebook,
  ScrollText,
  Users,
} from "lucide-react";

export type NavItem = {
  title: string;
  url: string;
  isActive?: boolean;
  icon?: LucideIcon;
};

export type NavSection = {
  title: string;
  url: string;
  items: NavItem[];
};

const currentPrograms = [
  {
    icon: Notebook,
    title: "Program 1",
    url: "/dashboard/programs/41",
  },
  {
    icon: ScrollText,
    title: "Exercises",
    url: "/dashboard/exercises",
  },
  {
    icon: Notebook,
    title: "Program 2",
    url: "/dashboard/programs/41",
  },
  {
    icon: Notebook,
    title: "Program 3",
    url: "/dashboard/programs/41",
  },
  {
    icon: Notebook,
    title: "Balance",
    url: "/dashboard/balance",
  },
];

export const data = {
  // versions: ["Client", "Coach", "Admin"],
  versions: [UserRole.client, UserRole.coach, UserRole.admin],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      items: [
        {
          icon: HomeIcon,
          title: "Overview",
          url: "/dashboard/overview",
        },
        {
          icon: HomeIcon,
          title: "Page2",
          url: "/dashboard/page2",
        },
        {
          icon: HomeIcon,
          title: "Page3",
          url: "/dashboard/page3",
        },
        {
          icon: MessageCircle,
          title: "Chats",
          url: "/chats",
        },
      ],
    },
    {
      title: "Workout",
      url: "/workouts",
      items: [
        {
          icon: Notebook,
          title: "All Programs",
          url: "/dashboard/programs",
        },
        ...currentPrograms.map((program) => ({
          title: program.title,
          url: program.url,
          icon: program.icon,
        })),
      ],
    },
    {
      title: "Users",
      url: "/users",
      items: [
        {
          icon: Users,
          title: "Users",
          url: "/users",
        },
      ],
    },
  ],
};

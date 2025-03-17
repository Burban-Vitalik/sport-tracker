import { cn } from "@/lib/utils";
import { Ban, Contact, User } from "lucide-react";
import { FC } from "react";

const options = [
  { title: "Profile", icon: <User size={20} color="black" /> },
  { title: "Contacts", icon: <Contact size={20} color="black" /> },
  { title: "Block", icon: <Ban size={20} color="red" /> },
];

export const ProfileOptions: FC = () => {
  return (
    <ul className="flex gap-4">
      {options.map(({ title, icon }) => (
        <li
          key={title}
          className={cn(
            "flex-1 cursor-pointer py-2 px-4 rounded-lg flex justify-center items-center transition-all hover:bg-gray-100 hover:text-gray-800"
          )}
        >
          <span
            className="flex items-center justify-center gap-2 text-sm"
            title={title}
          >
            {icon}
          </span>
        </li>
      ))}
    </ul>
  );
};

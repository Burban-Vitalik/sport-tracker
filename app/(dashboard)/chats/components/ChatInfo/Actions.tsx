import { MessageCircle, Video } from "lucide-react";
import { FC } from "react";

const actions = [
  { title: "Chat", icon: <MessageCircle size={24} /> },
  { title: "Video", icon: <Video size={24} /> },
];

export const Actions: FC = () => {
  return (
    <div className="flex gap-6 justify-center items-center text-sm text-gray-500 w-full">
      {actions.map(({ title, icon }) => (
        <span
          key={title}
          className="flex bg-gray-100 flex-1 flex-col items-center justify-center gap-2 text-center p-4 rounded-lg hover:shadow-sm cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="flex items-center justify-center text-xl">
            {icon}
          </span>
          <span>{title}</span>
        </span>
      ))}
    </div>
  );
};

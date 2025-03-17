import { FC } from "react";

const stats = [
  {
    title: "Messages Sent",
    value: 120,
  },
  {
    title: "Hours Online",
    value: 15,
  },
  {
    title: "Hours Chatting",
    value: 15,
  },
];

export const Stats: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 text-center text-gray-500 text-xs">
      {stats.map(({ title, value }) => (
        <div key={title} className="bg-gray-100 p-3 rounded-lg shadow-sm">
          <span className="block text-lg font-semibold text-gray-800">
            {value}
          </span>
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};

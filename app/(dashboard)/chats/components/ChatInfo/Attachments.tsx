import { FC } from "react";

export const Attachments: FC = () => {
  return (
    <div className="space-y-2">
      <p className="text-sm text-gray-600">Attachments</p>
      <div className="flex gap-4 justify-center">
        {[1, 2, 3, 4, 5].map((item) => (
          <span
            key={item}
            className="w-10 h-10 bg-green-500 flex items-center justify-center text-white font-semibold rounded-md hover:scale-105 transition-all"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

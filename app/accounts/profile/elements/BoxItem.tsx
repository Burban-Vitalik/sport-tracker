import { LucideIcon } from "lucide-react";
import React from "react";

type PropsType = {
  icon: LucideIcon;
  title: string;
  openModal?: VoidFunction;
};

export function BoxItem({ openModal, title, icon: Icon }: PropsType) {
  return (
    <div className="w-[260px] flex-1 p-6 bg-white rounded-lg border shadow-md hover:shadow-xl transition-all">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center mb-4">
          <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center">
            <Icon size={28} />
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      </div>
      <ul className="text-sm text-gray-500 space-y-1 mb-4"></ul>

      <button
        onClick={openModal}
        className="w-full py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-all"
      >
        Edit
      </button>
    </div>
  );
}

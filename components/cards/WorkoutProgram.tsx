"use client";
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { FC, MouseEvent } from "react";

import { getWorkoutGoal } from "@/app/helpers/getWorkoutGoal";
import { WorkoutProgram } from "@prisma/client";

import { CustomIconButton } from "../form-elements";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useRouter } from "next/navigation";

type PropsType = {
  data: WorkoutProgram;
};

export const WorkoutProgramCard: FC<PropsType> = ({ data }) => {
  const router = useRouter();

  const handleCardClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    router.push(`/dashboard/programs/${data.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer bg-gradient-to-br from-[#5da291] to-[#2f9e82] text-white rounded-xl p-4 flex flex-col gap-4 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
    >
      <div className="flex justify-between items-start">
        <p className="text-xl font-bold truncate max-w-[70%]">{data.title}</p>
        <Popover>
          <PopoverTrigger>
            <CustomIconButton variant="link" className="border">
              <EllipsisVertical className="text-white hover:text-gray-200" />
            </CustomIconButton>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2 max-w-[150px] bg-white text-black rounded-md shadow-lg border border-gray-200">
            <span className="flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-50 w-full text-left rounded-md">
              <Pencil size={16} /> Edit
            </span>
            <span className="flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-50 w-full text-left rounded-md">
              <Trash2 size={16} /> Delete
            </span>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col gap-2">
        <p
          className="px-2 py-1 rounded-md text-sm font-medium"
          style={{ backgroundColor: data.workoutGoal }}
        >
          {getWorkoutGoal(data.workoutGoal as keyof typeof getWorkoutGoal)}
        </p>
        <p className="text-sm">
          Week Sessions:{" "}
          <span className="font-semibold">{data.weekSessions}</span>
        </p>
      </div>

      <div className="flex justify-end text-xs text-gray-200 gap-1">
        <p>14.01.2025</p>
        <span>-</span>
        <p>30.05.2025</p>
      </div>
    </div>
  );
};

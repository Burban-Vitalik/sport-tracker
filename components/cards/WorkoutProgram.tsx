import { EllipsisVertical } from "lucide-react";
import { FC } from "react";

import { getWorkoutGoal } from "@/app/helpers/getWorkoutGoal";
import { WorkoutProgram } from "@prisma/client";

import { CustomIconButton } from "../form-elements";

type PropsType = {
  data: WorkoutProgram;
};

export const WorkoutProgramCard: FC<PropsType> = ({ data }) => {
  return (
    <div className="bg-[#10ac84] text-white rounded-lg p-3 flex flex-col gap-3 cursor-pointer hover:shadow-lg hover:bg-[#2f9e82] transition-all duration-3000 hover:scale-105">
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">{data.title}</p>
        <span>
          <CustomIconButton variant="link">
            <EllipsisVertical color="white" onClick={() => alert("ok")} />
          </CustomIconButton>
        </span>
      </div>
      <div className="flex flex-basis flex-grow flex-shrink flex-col">
        <p style={{ background: data.workoutGoal }}>
          {getWorkoutGoal(data.workoutGoal as keyof typeof getWorkoutGoal)}
        </p>
        <p>Week Sessions: {data.weekSessions}</p>
        <div className="flex flex-row gap-2 justify-end text-sm text-gray-300">
          <p>14.01.2025</p>
          <p>-</p>
          <p>30.05.2025</p>
        </div>
      </div>
    </div>
  );
};

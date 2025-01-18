import { WorkoutProgramCard } from "@/components/cards/WorkoutProgram";
import { WorkoutProgram } from "@prisma/client";
import { FC } from "react";

type PropsType = {
  data: WorkoutProgram[];
};

export const WorkoutProgramsList: FC<PropsType> = ({ data }) => {
  if (!data.length) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-500 text-lg">No programs available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((program: WorkoutProgram) => (
        <WorkoutProgramCard key={program.id} data={program} />
      ))}
    </div>
  );
};

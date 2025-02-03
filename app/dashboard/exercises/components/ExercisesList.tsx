import { Exercise } from "@prisma/client";
import { FC } from "react";
import { ExerciseCard } from "@/components/cards/ExerciseCard";
import { mockExercises } from "@/app/mockData/mockExercises";

type PropsType = {
  exercises: Exercise[];
};

export const ExercisesList: FC<PropsType> = ({ exercises }) => {
  if (!exercises.length) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-gray-500 text-lg">No programs available</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Exercise List</h1>
      <div className="flex flex-wrap justify-start gap-5">
        {mockExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

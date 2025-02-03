import { Exercise } from "@prisma/client";
import React from "react";

type ExerciseCardProps = {
  exercise: Exercise;
};

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  return (
    <div className="flex flex-col gap-2 bg-white shadow-md rounded-md p-4">
      <p>{exercise.name}</p>
      <p>{exercise.muscleGroup}</p>
      <p>{exercise.difficulty}</p>
      <p>{new Date(exercise.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default ExerciseCard;

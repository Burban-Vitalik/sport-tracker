import { Exercise } from "@prisma/client";
import Image from "next/image";
import { FC } from "react";
import Shoulders from "../../public/img/People.webp";
import { Button } from "../ui/button";

type PropsType = {
  exercise: Exercise;
};

export const ExerciseCard: FC<PropsType> = ({ exercise }) => {
  return (
    <div className="w-full flex items-center gap-5 p-2 rounded-xl shadow-lg bg-white transition-all hover:shadow-xl">
      {/* Image container */}
      <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-gray-100 overflow-hidden">
        <Image
          src={Shoulders}
          alt="Shoulders"
          height={64}
          width={64}
          className="object-cover"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{exercise.name}</h3>
        <p className="text-sm text-gray-600">{exercise.muscleGroup}</p>
        <span className="text-xs font-medium text-gray-500">
          {exercise.difficulty}
        </span>
      </div>

      {/* Button */}
      <Button className="px-5 py-2 text-sm font-medium bg-cyan-600 text-white rounded-lg transition-all hover:bg-cyan-700">
        See
      </Button>
    </div>
  );
};

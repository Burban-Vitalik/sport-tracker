"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

import { isItemFavorite } from "@/helpers/isItemFavorite";
import { useAddToFavorites } from "@/hooks/post/useAddToFavorites";
import { useRemoveFromFavorites } from "@/hooks/remove/useRemoveFromFavorites";
import { useUser } from "@/hooks/userContext";
import { FavoriteTypeEnum } from "@/lib/api/favorites";
import { Exercise, Favorite } from "@prisma/client";

import Shoulders from "../../public/img/People.webp";
import { Button } from "../ui/button";

type PropsType = {
  exercise: Exercise;
};

export const ExerciseCard: FC<PropsType> = ({ exercise }) => {
  const { user } = useUser();
  const router = useRouter();

  const { addToFavorites } = useAddToFavorites(user?.id as string);
  const { removeFromFavorites } = useRemoveFromFavorites();

  const isFavorited = isItemFavorite(
    exercise.id,
    user?.favorites as Favorite[]
  );

  return (
    <div className="w-full flex items-center gap-5 p-2 rounded-xl shadow-lg bg-white transition-all hover:shadow-xl">
      <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-gray-100 overflow-hidden">
        <Image
          src={Shoulders}
          alt="Shoulders"
          height={64}
          width={64}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{exercise.name}</h3>
        <p className="text-sm text-gray-600">{exercise.muscleGroup}</p>
        <span className="text-xs font-medium text-gray-500">
          {exercise.difficulty}
        </span>
      </div>

      {/* Button */}
      <Button
        className="px-5 py-2 text-sm font-medium bg-cyan-600 text-white rounded-lg transition-all hover:bg-cyan-700"
        onClick={() => router.push("/dashboard/exercises/" + exercise.id)}
      >
        See
      </Button>
      <Button
        onClick={
          isFavorited
            ? () => removeFromFavorites(exercise.id)
            : () => addToFavorites(exercise.id, FavoriteTypeEnum.EXERCISE)
        }
      >
        {isFavorited ? "Remove from favorites" : "Add to favorites"}
      </Button>
    </div>
  );
};

"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import GifImage from "../../../../public/img/gif/dumbbell-one-arm-chest-press.gif";
import { DifficultyItem } from "@/components/common/DifficultyItem";
import { cn } from "@/lib/utils";
import { Exercise } from "@prisma/client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type PropsType = {
  className?: string;
  exercise: Exercise;
  addFavorite: (exercise: Exercise) => Promise<null | undefined>;
  deleteFromFavorites: (itemId: string) => Promise<null | undefined>;
  isFavoriteItem?: boolean;
};

export function ExerciseCard({
  className,
  exercise,
  addFavorite,
  deleteFromFavorites,
  isFavoriteItem,
}: PropsType) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(isFavoriteItem);

  const handleAction = () => {
    if (isFavorite) {
      setIsFavorite(!isFavorite);
      deleteFromFavorites(exercise.id);
    } else {
      setIsFavorite(!isFavorite);
      addFavorite(exercise);
    }
  };

  return (
    <div
      className={cn(
        className,
        "flex cursor-pointer items-center gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-gray-200"
      )}
      onClick={() => router.push(`/dashboard/exercises/${exercise.id}`)}
    >
      <div className="w-20 h-20 rounded-lg overflow-hidden">
        <Image
          src={GifImage}
          alt="GifImage"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-1 justify-center flex-grow">
        <p className="text-md font-bold text-gray-600">{exercise.name}</p>
        <p className="text-sm text-gray-600">{exercise.muscleGroup}</p>
        <DifficultyItem difficulty={exercise.difficulty} />
      </div>

      <div className="ml-auto flex self-end relative">
        {isFavorite && (
          <motion.div
            initial={{ scale: 0, opacity: 0.7 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Star size={24} className="text-cyan-300 fill-cyan-300" />
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{
            scale: 0.9,
            rotate: -10,
          }}
          animate={{
            scale: isFavorite ? [1, 1.2, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
          onClick={handleAction}
          className="p-2 border-none transition rounded-full relative"
        >
          <Star
            size={18}
            className={
              isFavorite ? "text-cyan-300 fill-cyan-300" : "text-gray-200"
            }
          />
        </motion.button>
      </div>
    </div>
  );
}

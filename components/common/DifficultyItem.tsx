import { ShowDifficultyColor } from "@/app/helpers/showDifficultyColor";
import { cn } from "@/lib/utils";
import { Difficulty } from "@prisma/client";
import { FC } from "react";

type PropsType = {
  difficulty: Difficulty;
};

export const DifficultyItem: FC<PropsType> = ({ difficulty }) => {
  return (
    <p
      className={cn(ShowDifficultyColor(difficulty), "font-semibold text-sm")}
      title={difficulty}
    >
      {difficulty.at(0)}
    </p>
  );
};

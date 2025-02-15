import { Difficulty } from "@prisma/client";

export function ShowDifficultyColor(level: Difficulty) {
  switch (level) {
    case "EASY":
      return "text-green-300";
    case "MEDIUM":
      return "text-yellow-300";
    case "HARD":
      return "text-red-300";
  }
}

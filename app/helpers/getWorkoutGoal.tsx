import { WorkoutGoal } from "../enums/workoutGoal";

export const getWorkoutGoal = (goal: keyof typeof WorkoutGoal): string => {
  return Object.values(WorkoutGoal)[Object.keys(WorkoutGoal).indexOf(goal)];
};

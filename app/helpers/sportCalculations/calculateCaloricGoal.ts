type Goal = "maintain" | "lose" | "gain";

export const calculateCaloricGoal = (tdee: number, goal: Goal): number => {
  const goalMultipliers: Record<Goal, number> = {
    maintain: 0,
    lose: -500,
    gain: 500,
  };

  return tdee + goalMultipliers[goal];
};

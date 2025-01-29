type ParamsType = {
  weight: number;
  height: number;
  age: number;
  gender: "male" | "female";
};

// Function for calculating basal metabolic rate (BMR) - Haris Benedict
export const calculateBMR = ({
  weight,
  height,
  age,
  gender,
}: ParamsType): number => {
  if (gender === "male") {
    return Math.round(88.362 + 13.397 * weight + 4.799 * height - 5.677 * age); // Formula for men
  } else {
    return Math.round(447.593 + 9.247 * weight + 3.098 * height - 4.33 * age); // Formula for women
  }
};

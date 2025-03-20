import { CircleArrowOutUpLeft, GoalIcon } from "lucide-react";

const goals = [
  { title: "Loose Weight", id: 1 },
  { title: "Build Muscle", id: 2 },
  { title: "Build Strength", id: 3 },
];

const fitnessLevel = "Beginner";

export const Goal = () => {
  return (
    <div className="flex flex-col gap-4 shadow-md p-4 bg-white rounded-lg">
      <div className="flex flex-row justify-between items-center mb-4">
        <p className="flex flex-row items-center gap-2 font-semibold text-gray-800">
          <GoalIcon size={18} color="green" /> Goals
        </p>
        <p className="flex flex-row items-center gap-2 text-blue-600 cursor-pointer text-sm hover:underline">
          Edit
        </p>
      </div>

      <ol className="list-decimal list-inside space-y-2 text-gray-700">
        {goals.map((goal) => (
          <li
            key={goal.id}
            className="bg-gray-50 p-2 rounded-md hover:bg-gray-100 transition-all"
          >
            {goal.title}
          </li>
        ))}
      </ol>

      <p className="flex flex-row items-center gap-2 font-semibold text-gray-800">
        <CircleArrowOutUpLeft size={18} color="green" /> Fitness Level
      </p>

      <ol className="list-disc list-inside space-y-2 text-gray-700">
        <li className="text-gray-700">{fitnessLevel}</li>
      </ol>
    </div>
  );
};

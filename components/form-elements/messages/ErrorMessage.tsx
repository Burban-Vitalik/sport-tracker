import { CircleX } from "lucide-react";

type PropsType = {
  message: string;
};

export const ErrorMessage = ({ message }: PropsType) => {
  return (
    <p className="text-red-400 text-sm mt-1 flex items-center">
      <CircleX size={16} className="mr-1" />
      {message}
    </p>
  );
};

import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";

type Props = {
  label: string;
  icon: React.ReactElement;
  bg: string;
  className?: string;
};

export const ChatTypeCard = ({ label, icon, bg, className }: Props) => {
  return (
    <Card
      key={label}
      className={cn(
        "flex flex-col items-center justify-center rounded-xl shadow-md p-6 transition-all transform hover:scale-105 hover:shadow-lg cursor-pointer",
        className
      )}
    >
      <div
        className={`sm:w-16 sm:h-16 w-12 h-12 flex items-center justify-center rounded-full text-white ${bg} transition-all duration-300 ease-in-out`}
      >
        {icon}
      </div>
      <CardContent className="text-lg items-center gap-2 font-semibold mt-3 text-gray-900 text-center">
        {label}
      </CardContent>
    </Card>
  );
};

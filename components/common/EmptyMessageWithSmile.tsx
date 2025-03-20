import { Smile } from "lucide-react";

export const EmptyMessageWithSmile = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center justify-center h-auto">
      <div className="flex flex-col items-center justify-center p-8 bg-white  animate-fadeInUp">
        <Smile className="size-16 text-cyan-700 mb-6 animate-bounce" />

        <p className="text-lg text-center text-cyan-700 font-semibold animate-fadeInUp animation-delay-200">
          {message}
        </p>
      </div>
    </div>
  );
};

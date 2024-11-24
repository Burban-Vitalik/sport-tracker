import { Smile } from "lucide-react"; // Іконка від Lucide

export const EmptyMessageWithSmile = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center justify-center h-auto">
      <div className="flex flex-col items-center justify-center p-8 bg-white  animate-fadeInUp">
        {/* Smile */}
        <Smile className="size-16 text-emerald-800 mb-6 animate-bounce" />

        {/* Message */}
        <p className="text-lg text-center text-emerald-800 font-semibold animate-fadeInUp animation-delay-200">
          {message}
        </p>
      </div>
    </div>
  );
};

import Image from "next/image";
import EmptyChatImg from "@/public/img/emptyChat.png";

export const EmptyChat = () => {
  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center space-y-4">
      <Image
        src={EmptyChatImg}
        alt="Empty Chat"
        width={220}
        height={220}
        className="mx-auto opacity-80"
      />
      <h2 className="text-xl font-semibold text-gray-800">
        It&apos;s nice to chat with someone
      </h2>
      <p className="text-gray-600">
        Pick a person from the left menu and start your conversation
      </p>
    </div>
  );
};

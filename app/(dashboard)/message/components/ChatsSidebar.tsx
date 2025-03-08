import { CustomSearchInput } from "@/components/form-elements/CustomSearchInput";
import { ChatItemCard } from "./ChatItemCard";
import Image from "next/image";
import FaceImg from "../../../../public/img/userLogo.png";

export const ChatsSidebar = () => {
  return (
    <div className="h-full inline-flex bg-white flex-col gap-4 rounded-md shadow-md">
      <div className="flex flex-col gap-4 p-4">
        <p>Favorites</p>
        <div className="flex flex-row justify-between border-b pb-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="relative size-12 rounded-full overflow-hidden border hover:scale-105 transition cursor-pointer"
            >
              <Image
                src={FaceImg}
                layout="fill"
                objectFit="cover"
                alt="User Avatar"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="px-4">
        <CustomSearchInput />
      </div>
      <div className="flex justify-between px-4">
        <p>Friends</p>
        <button className="text-cyan-600">Add New</button>
      </div>
      <div className="">
        <ChatItemCard />
        <ChatItemCard />
        <ChatItemCard />
        <ChatItemCard />
        {/* <ChatItemCard />
        <ChatItemCard />
        <ChatItemCard />
        <ChatItemCard />
        <ChatItemCard />
        <ChatItemCard />
        <ChatItemCard /> */}
      </div>
    </div>
  );
};

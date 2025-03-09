import { CustomSearchInput } from "@/components/form-elements/CustomSearchInput";

import FaceImg from "../../../../public/img/userLogo.png";
import { ChatsList } from "./ChatsList";
import { MembersList } from "./MembersList";
import { NewChat } from "./NewChat";

export const ChatsSidebar = () => {
  return (
    <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
      <div className="flex justify-around border-b p-4">
        <MembersList userImg={FaceImg} />
      </div>
      <div className="p-4">
        <CustomSearchInput className="w-full" />
      </div>
      <NewChat chatsLength={0} />
      <ChatsList
        chats={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        // chats={[]}
      />
    </div>
  );
};

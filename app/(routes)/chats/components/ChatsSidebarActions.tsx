import { CustomSearchInput } from "@/components/form-elements/CustomSearchInput";
import { CustomSelect } from "@/components/form-elements/CustomSelect";
import { FC } from "react";

const options = ["all", "chat", "group", "channel"];

type PropsChatsType = {
  chatsType: (typeof options)[number];
  toggleChatsType: (type: string) => void;
};

export const ChatSidebarActions: FC<PropsChatsType> = ({
  chatsType,
  toggleChatsType,
}) => {
  return (
    <div className="flex flex-col-reverse xl:flex-row gap-2 px-2 py-4">
      <CustomSearchInput />
      <CustomSelect
        options={options}
        value={chatsType}
        onChange={toggleChatsType}
      />
    </div>
  );
};

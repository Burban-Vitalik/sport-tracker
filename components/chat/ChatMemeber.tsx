import { AvatarCover } from "../cards/Avatar";
import UserLogo from "../../public/img/userLogo.png";
import { CustomIconButton } from "../form-elements";

export const ChatMember = () => {
  return (
    <div className="flex justify-between items-center border bg-white p-3 rounded-lg cursor-pointer hover:shadow-md transition duration-300 ease-in-out hover:border">
      <div className="flex items-center gap-2">
        <AvatarCover image={UserLogo} size={12} />
        <span>
          <p className="font-medium text-gray-800">Burban Vitalik</p>
          <p className="text-gray-600 text-sm">burbanvitalik2002@gmail.com</p>
        </span>
      </div>
      <CustomIconButton className="px-3 py-1 text-sm text-red-400 border border-red-400 rounded-lg hover:bg-red-400 hover:text-white transition">
        Remove
      </CustomIconButton>
    </div>
  );
};

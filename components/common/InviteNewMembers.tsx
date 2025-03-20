import { CustomIconButton } from "../form-elements";
import { MembersList } from "../sections/chat/MembersList";

export const InviteNewMembers = () => {
  return (
    <div className="">
      <h2 className="text-xl font-semibold text-gray-900">
        Invite New Members
      </h2>
      <p className="text-gray-600">Invite members to Burban team</p>

      <input
        type="text"
        placeholder="Search members..."
        className="w-full mt-4 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      <div className="mt-6">
        <MembersList />
      </div>

      <CustomIconButton className="bg-cyan-500 text-white w-full mt-6">
        Invite
      </CustomIconButton>
    </div>
  );
};

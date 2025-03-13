import React, { FC } from "react";
import { ChatMember } from "./ChatMemeber";

type Props = {
  num?: number;
};

export const MembersList: FC<Props> = ({ num = 6 }) => {
  return (
    <React.Fragment>
      <p className="text-gray-700 font-medium">Invited: {num}</p>

      <div className="space-y-4 min-w-72 w-full max-h-72 pr-4 py-2 overflow-y-auto mt-3">
        {num && num > 0 ? (
          Array.from({ length: num }).map((_, i) => <ChatMember key={i} />)
        ) : (
          <div className="p-4 rounded-lg text-center">
            <p>Have no invited members</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

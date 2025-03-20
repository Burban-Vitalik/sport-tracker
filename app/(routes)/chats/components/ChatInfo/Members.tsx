import { ChatParticipant } from "@prisma/client";
import { FC } from "react";

type Props = {
  participants: ChatParticipant[];
};

export const Members: FC<Props> = ({ participants }) => {
  return (
    <div>
      <ul>
        {participants.map((member) => (
          <li key={member.id}>{member.userId}</li>
        ))}
      </ul>
    </div>
  );
};

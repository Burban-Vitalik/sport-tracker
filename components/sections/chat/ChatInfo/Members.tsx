"use client";
import { MemberCard } from "@/components/cards/MemberCard";
import { CustomIconButton } from "@/components/form-elements";
import { ChatParticipant, ChatType } from "@prisma/client";
import { FC } from "react";

type Props = {
  participants: ChatParticipant[];
  chatType: keyof typeof ChatType;
};

export const Members: FC<Props> = ({ participants, chatType }) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        {[...participants].map((participant) => (
          <MemberCard key={participant.id} name="Vitalik Burban" />
        ))}

        {chatType === "GROUP" && (
          <CustomIconButton className="bg-cyan-500 hover:bg-cyan-600 hover:text-white text-white">
            Invite
          </CustomIconButton>
        )}
      </div>
    </div>
  );
};

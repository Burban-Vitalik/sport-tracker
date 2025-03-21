import {
  BodyInfo,
  ChatParticipant,
  Favorite,
  Message,
  WorkoutProgram,
} from "@prisma/client";

export type UserWithRelations = User & {
  messages: Message[];
  favorites: Favorite[];
  workoutProgram?: WorkoutProgram[];
  ChatParticipant: ChatParticipant[];
  bodyInfo: BodyInfo;
};

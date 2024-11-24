import { Getter } from "./eventTypes";

export interface IUser {
  userName: string;
  email: string;
  age: number;
}

export type UserNameGetter = Getter<"userName">;
export type UserEmailGetter = Getter<"email">;
export type UserAgeGetter = Getter<"age">;

import {
  IUser,
  UserAgeGetter,
  UserEmailGetter,
  UserNameGetter,
} from "../types/users/user";

const user: IUser = {
  userName: "JohnDoe",
  email: "johndoe@example.com",
  age: 30,
};

export const getUserProperty = <T extends keyof IUser>(
  property: T
): IUser[T] => {
  return user[property];
};

export const userName: UserNameGetter = "getUserName";
export const userEmail: UserEmailGetter = "getEmail";
export const userAge: UserAgeGetter = "getAge";

console.log(getUserProperty("userName"));
console.log(getUserProperty("email"));
console.log(getUserProperty("age"));

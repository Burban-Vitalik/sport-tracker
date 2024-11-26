export interface IUser {
  userName: string;
  email: string;
  age: number;
  phone: string;
  address: IUserAddress;
  status: "active" | "inactive";
}

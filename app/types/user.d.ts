export interface IUser {
  userName: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  status: "active" | "inactive";
}
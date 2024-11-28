type UserId = number & { readonly brand: "UserId" };

export interface IUser {
  id: UserId;
  userName: string;
  email: string;
  age: number;
  phone: string;
  address: IUserAddress;
  status: "active" | "inactive";
}
